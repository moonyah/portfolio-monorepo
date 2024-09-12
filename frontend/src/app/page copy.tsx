"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  // const mainContentRef = useRef<HTMLDivElement>(null);

  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 방문자 수 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/visitors/today")
      .then((response) => {
        setVisitorCount(response.data.count);
      })
      .catch((err) => {
        setError(err.message);
      });

    // 방문자 추가
    // axios.post("http://localhost:5000/api/visitors").catch((err) => {
    //   setError(err.message);
    // });
  }, []);

  useEffect(() => {
    const sectionIds = ["section1", "section2", "section3", "section4"];

    // IntersectionObserver 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5 && entry.isIntersecting) {
            entry.target.scrollIntoView({ behavior: "smooth" });
          }
        });
      },
      { threshold: 0.5 }
    );

    // 각 섹션에 observer 등록
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // 컴포넌트 언마운트 시 observer 해제
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div>
      <Header className="bg-transparent" />

      {/* 비디오 섹션 */}
      <section id="section1" className="relative h-screen">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* 방문자 수 표시 */}
        <div className="absolute top-40 right-8  text-white p-8 rounded">
          <p>
            Today's Visitors:
            {visitorCount !== null ? visitorCount : "Loading..."}
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 섹션 */}
      <main className="relative">
        {/* 메인 콘텐츠 섹션 */}
        <section
          id="section2"
          className="flex flex-col items-center justify-center h-screen px-10 bg-white"
        >
          <h1 className="text-4xl font-bold mb-4">안녕하세요, 장문용입니다!</h1>
          <p className="text-lg text-center font-light mb-8">
            프론트엔드 개발을 좋아하는 개발자입니다. <br />
            다양한 프로젝트를 통해 경험을 쌓고 있으며, 최신 기술을 배우는 데
            열정을 가지고 있습니다.
          </p>
        </section>
      </main>
    </div>
  );
}
