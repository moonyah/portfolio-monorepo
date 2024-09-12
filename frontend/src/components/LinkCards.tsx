import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface LinkItem {
  href: string;
  title: string;
  description: string;
}

const linkItems: LinkItem[] = [
  {
    href: "/resume",
    title: "이력서",
    description:
      "연락처 정보, 프로젝트 목록, 학력 및 기술 스킬을 확인하실 수 있습니다.",
  },
  {
    href: "/projects",
    title: "프로젝트",
    description: "제가 참여한 다양한 프로젝트를 소개합니다.",
  },
  {
    href: "/activities",
    title: "기타 활동",
    description:
      "컨퍼런스, 세미나, 그리고 웹 개발 외의 여러 프로젝트 활동을 소개합니다.",
  },
  {
    href: "/guestbook",
    title: "방명록",
    description:
      "제 웹사이트를 방문한 분들의 메시지를 확인하고 여러분의 의견도 남겨주세요.",
  },
];

interface LinkCardsProps {
  hasAnimated: boolean;
}

const LinkCards: React.FC<LinkCardsProps> = ({ hasAnimated }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated && containerRef.current) {
      const items = containerRef.current.querySelectorAll(".animate-item");
      items.forEach((item, index) => {
        (item as HTMLElement).style.transition = `opacity 0.5s ease ${
          index * 0.2
        }s, transform 0.5s ease ${index * 0.2}s`;
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      });
    }
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="relative h-full flex items-center justify-center md:px-[100px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {linkItems.map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="bg-white rounded-xl shadow-lg p-8 max-w-xs md:max-w-sm lg:max-w-md animate-item lg:h-[300px] md:h-[200px] w-[300px]"
            style={{ opacity: 0, transform: "translateY(20px)" }} // 초기 상태
          >
            <div className="flex items-center justify-between mb-5">
              <div className="text-2xl md:text-3xl font-semibold text-black">
                {title}
              </div>
              <div className="text-xl text-gray-500">{"➜"}</div>
            </div>
            <p className="text-sm md:text-base text-slate-500 mt-2 hidden md:block">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkCards;
