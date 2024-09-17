"use client";
import { useState } from "react";
import { activitiesData } from "@/data/activitiesData";
import Link from "next/link";

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const parseDate = (dateString: string) => {
    // 기간을 처리하기 위한 파서 함수
    const [startDate, endDate] = dateString.split(" to ");
    return new Date(startDate).getTime() || new Date(endDate).getTime() || 0;
  };

  const filteredActivities = activitiesData
    .filter(
      (activity) =>
        selectedCategory === "all" || activity.category === selectedCategory
    )
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  // 카테고리별 색상 정의
  const categoryColors: { [key: string]: string } = {
    conference: "bg-blue-200 text-black", // 부드러운 파란색
    project: "bg-red-200 text-black", // 부드러운 빨간색
    other: "bg-yellow-200 text-black", // 부드러운 노란색
  };

  return (
    <div className="py-[8rem] md:px-[8rem] px-[2rem]">
      {/* 카테고리 버튼 */}
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded ${
            selectedCategory === "all"
              ? "bg-gray-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          전체
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded ${
            selectedCategory === "conference"
              ? categoryColors.conference
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("conference")}
        >
          컨퍼런스
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded ${
            selectedCategory === "project"
              ? categoryColors.project
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("project")}
        >
          기타 프로젝트
        </button>
        <button
          className={`px-4 py-2 md:px-6 md:py-3 rounded ${
            selectedCategory === "other" ? categoryColors.other : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("other")}
        >
          기타 활동
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="relative p-4 border rounded shadow-lg"
            >
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              {/* 카테고리 태그 */}
              <span
                className={`inline-block px-2 py-1 text-[0.8rem] rounded ${
                  categoryColors[activity.category]
                } mb-2`}
              >
                {activity.category}
              </span>
              {/* 제목과 날짜를 같은 행에 배치 */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{activity.title}</h2>
                <p className="text-sm text-gray-500 mr-2">{activity.date}</p>
              </div>
              <p className="text-gray-700 line-clamp-3 mb-8">
                {activity.description}
              </p>
              {activity.link && (
                <Link
                  href={activity.link}
                  className="absolute bottom-4 right-4 text-blue-500 hover:underline"
                >
                  더보기 →
                </Link>
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500 pt-40">
            선택한 카테고리에 해당하는 활동이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
