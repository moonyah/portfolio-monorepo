"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출
    axios
      .get("http://host.docker.internal:5000/") // 백엔드 API의 URL
      .then((response) => {
        setData(response.data); // 응답 데이터 설정
      })
      .catch((err) => {
        setError(err.message); // 에러 메시지 설정
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
