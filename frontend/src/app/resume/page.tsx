"use client";
import Header from "@/components/Header";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="p-10 max-w-4xl mx-auto pt-40 ">
      <Header className="bg-white text-black" />
      <div className="p-10 rounded-lg shadow-md">
        {/* 연락처, 이메일, github, 간단소개 */}
        <section className="flex flex-col lg:flex-row p-4">
          {/* 왼쪽 파트 - 비율 1 */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-2 pb-4">
            <h1 className="text-4xl font-bold">장문용</h1>
            <p className="text-xl">프론트엔드</p>
          </div>

          {/* 오른쪽 파트 - 비율 3 */}
          <div className="w-full lg:w-3/4 flex flex-col space-y-4 text-left">
            <p>📞 Phone: 010-4185-6306</p>
            <p>
              ✉️ Email:&nbsp;
              <a
                href="mailto:dltk456@naver.com"
                target="_blank"
                className="underline"
              >
                dltk456@naver.com
              </a>
            </p>
            <p>
              🐙 Github:&nbsp;
              <a
                href="https://github.com/moonyah"
                target="_blank"
                className="underline"
              >
                https://github.com/moonyah
              </a>
            </p>
            <p>
              "저는 꾸준함이 무기인 신입 프론트엔드 개발자입니다. 함께 일하는
              것을 즐기며 스스로 부족함을 극복하고 성장하려는 열정을 가지고
              있습니다."
            </p>
          </div>
        </section>
        {/* 프로젝트 요약 */}
        <section className="flex flex-col lg:flex-row p-4">
          {/* 왼쪽 파트 - 비율 1 */}

          <div className="w-full lg:w-1/4 flex flex-col space-y-4">
            <hr className="border-t-4 border-gray-300 lg:w-1/5 lg:flex w-full pb-2" />
            <h2 className="text-xl font-bold">프로젝트 요약</h2>
          </div>

          {/* 오른쪽 파트 - 비율 3 */}
          <div className="w-full lg:w-3/4 flex flex-col space-y-4 text-left">
            <hr className="border-t-4 border-gray-300 hidden lg:flex pb-2" />
            {/* 개인 프로젝트 소개 */}
            <div>
              <h2 className="text-lg font-semibold mb-2">개인 프로젝트</h2>
              <p>
                이 웹사이트는 제 포트폴리오를 소개하는 웹사이트입니다.
                프론트엔드 기술을 활용하여 디자인하고 구현하였으며, 제 역량을
                효과적으로 표현하기 위해 다양한 기능을 추가하였습니다.
                <span className="block text-gray-600 pt-2">
                  Next.js + TypeScript + Tailwind CSS + Node.js + MongoDB
                  (클라우드) + Docker
                </span>
              </p>
            </div>

            {/* 팀 프로젝트 소개 */}
            <div>
              <h2 className="text-lg font-semibold mb-2">팀 프로젝트</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <span className="font-semibold">LINKUP</span> (공유 오피스
                  예약 & 커뮤니티 서비스):&nbsp;
                  <span className="text-gray-600">
                    Next.js + TypeScript + Tailwind CSS
                  </span>
                </li>
                <li>
                  <span className="font-semibold">골든티켓</span> (숙소 양도
                  거래 서비스):&nbsp;
                  <span className="text-gray-600">
                    React + TypeScript + Tailwind CSS
                  </span>
                </li>
                <li>
                  <span className="font-semibold">STAYINN</span> (숙소 예약
                  서비스):&nbsp;
                  <span className="text-gray-600">
                    Next.js + TypeScript + Tailwind CSS
                  </span>
                </li>
                <li>
                  <span className="font-semibold">호그와톡</span> (소켓 기반
                  채팅 서비스):&nbsp;
                  <span className="text-gray-600">
                    Next.js + TypeScript + Firebase + Styled-component
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* 기술스택 */}
        <section className="flex flex-col lg:flex-row p-4">
          {/* 왼쪽 파트 - 비율 1 */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-4">
            <hr className="border-t-4 border-gray-300 lg:w-1/5 lg:flex w-full pb-2" />
            <h2 className="text-xl font-bold">기술스택</h2>
          </div>

          {/* 오른쪽 파트 - 비율 3 */}
          <div className="w-full lg:w-3/4 flex flex-col space-y-4 text-left">
            <hr className="border-t-4 border-gray-300 hidden lg:flex pb-2" />
            <div>
              <p>
                <span className="text-black font-semibold">React</span> /{" "}
                <span className="text-black font-semibold">TypeScript</span> /{" "}
                <span className="text-black font-semibold">Next.js</span> /{" "}
                <span className="text-black font-semibold">JavaScript</span> /{" "}
                <span className="text-gray-600">Recoil</span> /{" "}
                <span className="text-gray-600">HTML</span> /{" "}
                <span className="text-gray-600">CSS</span> /{" "}
                <span className="text-gray-600">Tailwind CSS</span> /{" "}
                <span className="text-gray-600">Styled-component</span> /{" "}
                <span className="text-gray-600">Firebase</span>
              </p>
            </div>
          </div>
        </section>
        {/* 학력 */}
        <section className="flex flex-col lg:flex-row p-4">
          {/* 왼쪽 파트 - 비율 1 */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-4">
            <hr className="border-t-4 border-gray-300 lg:w-1/5 lg:flex w-full pb-2" />
            <h2 className="text-xl font-bold">학력</h2>
          </div>

          {/* 오른쪽 파트 - 비율 3 */}
          <div className="w-full lg:w-3/4 flex flex-col space-y-4 text-left">
            <hr className="border-t-4 border-gray-300 hidden lg:flex pb-2" />
            <div className="flex flex-col space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold">숭실대학교</p>
                <p className="text-gray-500 text-sm">/ 글로벌미디어학부</p>
              </div>
              <p className="text-gray-400 text-xs">2021년 3월 – 2023년 8월</p>
            </div>
            <div className="flex flex-col space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold">한국공학대학교</p>
                <p className="text-gray-500 text-sm">/ 소프트웨어전공</p>
              </div>
              <p className="text-gray-400 text-xs">2018년 3월 – 2019년 12월</p>
            </div>
          </div>
        </section>
        {/* 활동 */}
        <section className="flex flex-col lg:flex-row p-4">
          {/* 왼쪽 파트 - 비율 1 */}
          <div className="w-full lg:w-1/4 flex flex-col space-y-4">
            <hr className="border-t-4 border-gray-300 lg:w-1/5 lg:flex w-full pb-2" />
            <h2 className="text-xl font-bold">활동</h2>
          </div>

          {/* 오른쪽 파트 - 비율 3 */}
          <div className="w-full lg:w-3/4 flex flex-col space-y-4 text-left">
            <hr className="border-t-4 border-gray-300 hidden lg:flex pb-2" />
            <div className="flex flex-col space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold">
                  패스트캠퍼스 X 야놀자 : 프론트엔드 개발 부트캠프
                </p>
              </div>
              <p className="text-gray-400 text-xs">2023년 7월 – 2024년 1월</p>
            </div>
            <div className="flex flex-col space-y-2 text-left">
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold">
                  패스트캠퍼스 X 프로젝트십 7기
                </p>
              </div>
              <p className="text-gray-400 text-xs">2024년 4월 – 2024년 6월</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
