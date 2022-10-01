import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalsesPage(props) {
  const [sales, setSalse] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  // fetch를 간편하게 사용할 수 있게 해주는 hook,
  // getStaticProps + CSR 시작부터 데이터를 가지게 할 수 있고 업데이트 된 데이터는 실시간 브라우저 내부에서 가능하게 한다.
  const path =
    "https://nextjs-course-16f93-default-rtdb.firebaseio.com/sales.json";
  const { data, error } = useSWR(path, (path) =>
    fetch(path).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSalse(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://nextjs-course-16f93-default-rtdb.firebaseio.com/sales.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }
  //       setSalse(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  if (error) {
    return <p>No Data...</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  // if (!sales) {
  //   return <p>No Data...</p>;
  // }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalsesPage;

// 클라이언트에서 실시간으로 데이터 페칭을 하기위한 미리 생성한 페이지
export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-16f93-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { sales: transformedSales } };
}
