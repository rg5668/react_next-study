import React, { useEffect, useRef, useState } from "react";
import classes from "./Canvas.module.css";

const handlerSubmit = async (file) => {
  const response = await fetch("/api/file-upload", {
    method: "POST",
    body: JSON.stringify(file),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Error");
  }
};

const Canvas = () => {
  // canvas 설정
  const canvasRef = useRef();
  // canvas 설정
  const contextRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingCtx, setDrawingCtx] = useState(null);
  const [coordinates, setCoordinates] = useState({
    top: 0,
    left: 0,
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    // 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공 DOMRect 객체를 반환
    const rect = canvas.getBoundingClientRect();

    setCoordinates({
      top: rect.top,
      left: rect.left,
    });
    const context = canvas.getContext("2d");

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.globalAlpha = 0.5;
    contextRef.current = context;

    setDrawingCtx(context);
  }, []);

  // console.log(coordinates);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    drawingCtx.beginPath();
    setIsDrawing(false);
  };

  const emptyCanvas = () => {
    const blank = document.createElement("canvas");

    blank.width = canvasRef.current.width;
    blank.height = canvasRef.current.height;

    return canvasRef.current.toDataURL() === blank.toDataURL();
  };

  const drawing = ({ nativeEvent }) => {
    const { clientX, clientY, changedTouches } = nativeEvent;
    // mo
    const touches = changedTouches;
    // console.log(coordinates);

    if (drawingCtx) {
      if (!isDrawing) {
        // 출발점을 초기화
        drawingCtx.beginPath();
        // 출발점을 좌표로 옮김 pc
        // drawingCtx.moveTo(offsetX, offsetY);
        // mo
        drawingCtx.moveTo(touches[0].screenX, touches[0].screenY);
      } else {
        // 도착점을 좌표로 옮김
        // pc
        // drawingCtx.lineTo(offsetX, offsetY);
        // mo
        drawingCtx.lineTo(
          touches[0].clientX - coordinates.left,
          touches[0].clientY - coordinates.top
        );
        // 그림
        drawingCtx.stroke();
      }
    }
  };

  const resetHandler = () => {
    drawingCtx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const saveHandler = async () => {
    const empty = emptyCanvas();
    if (empty) {
      return;
    }
    const imgBase64 = canvasRef.current.toDataURL("image/png", 1.0);
    // const imageOpen = window.open("about:blank", "image from canvas");
    // imageOpen?.document.write(
    //   "<img src='" + imgBase64 + "' alt='from canvas'/>"
    // );
    try {
      await handlerSubmit({ file: imgBase64 });
    } catch (error) {
      console.log(error);
    }

    // console.log(imgBase64);
  };

  return (
    <section>
      <div className={classes.canvas}>
        <canvas
          ref={canvasRef}
          // onMouseDown={startDrawing}
          // onMouseUp={finishDrawing}
          // onMouseMove={drawing}
          // onMouseLeave={finishDrawing}
          onTouchMove={drawing}
          onTouchCancel={finishDrawing}
          onTouchStart={startDrawing}
          onTouchEnd={finishDrawing}
          width="300"
          height="300"
        />
      </div>

      {/* btn component */}
      <div>
        <button onClick={resetHandler}>다시 서명</button>
      </div>
      <div>
        <button onClick={saveHandler}>등록하기</button>
      </div>
    </section>
  );
};

export default Canvas;
