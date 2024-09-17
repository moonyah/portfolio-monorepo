"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 경로를 확인하기 위해 사용

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // 현재 경로 가져오기

  // 홈 페이지 여부 판단 (홈 경로가 '/'인 경우)
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return; // 홈 페이지가 아닌 경우 스크롤 이벤트 추가하지 않음

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 p-4 transition-colors duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-white text-black" // 배경을 약간 불투명하게 설정
            : "bg-transparent text-white"
          : "bg-white text-black" // 홈이 아닌 경우 고정된 스타일
      } ${className}`}
    >
      <div className="container mx-auto h-16 flex items-center justify-between">
        <h1 className="text-xl flex items-center">
          <Link href="/">
            <span className="">Portfolio</span>
            <span className="font-bold">JangMunYong</span>
          </Link>
        </h1>
        <nav className="flex-grow px-[20rem] lg:px-[15rem] md:px-[5rem]">
          <ul className="flex justify-around space-x-4">
            <li className="flex-1 text-center">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/activities">Activities</Link>
            </li>
            <li className="flex-1 text-center">
              <Link href="/guestbook">Guestbook</Link>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="https://github.com/moonyah"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-1 text-lg ${
              isHomePage
                ? scrolled
                  ? "scrolled" // 배경을 약간 불투명하게 설정
                  : ""
                : "scrolled" // 홈이 아닌 경우 고정된 스타일
            }`}
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5 icon"
            />
            <span className="mt-1 pl-[1px]">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
