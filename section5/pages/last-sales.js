import { useEffect, useState } from "react";

function LastSalsesPage() {
  const [sales, setSalse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-16f93-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSalse(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No Data...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>{sale.username}</li>
      ))}
    </ul>
  );
}

export default LastSalsesPage;
