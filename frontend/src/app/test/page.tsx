"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/testDataApi"; // 변경된 파일 경로를 사용합니다.
import { testData } from "../../types/testDataTypes";

export default function Test() {
  const [data, setData] = useState<testData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
