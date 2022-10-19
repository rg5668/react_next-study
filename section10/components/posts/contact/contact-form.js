import { useEffect, useRef, useState } from "react";
import Notification from "../../ui/notification";
import classes from "./contact-form.module.css";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
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

const ContactForm = () => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageRef = useRef();
  //   pending, success, error
  const [requestStatus, setRequestStatus] = useState();
  //error message
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageRef.current.value;

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      emailInputRef.current.value = "";
      nameInputRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "대기",
      message: "잠시만요.",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "성공",
      message: "완료입니다.",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "에러",
      message: requestError || "실패입니다.",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea rows="5" ref={messageRef} id="message"></textarea>
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
