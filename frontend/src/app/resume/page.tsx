import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - JangMunYong",
  description: "Explore my professional background and skills.",
  robots: "index, follow",
};

export default function Resume() {
  return (
    <div className="p-6 max-w-4xl mx-auto pt-[130px]">
      <Header className="bg-white text-black" />

      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          장문용 - 프론트엔드 개발자
        </h2>

        <h3 className="text-xl font-semibold mb-2">개요</h3>
        <p className="mb-4">
          프론트엔드 개발자로서, 확장성과 효율성을 갖춘 웹 애플리케이션을
          구축하는 데 열정을 가지고 있습니다. 현대 웹 기술과 프레임워크에 대한
          경험이 풍부하며, 사용자 경험을 향상시키는 다양한 프로젝트를
          수행해왔습니다.
        </p>

        <h3 className="text-xl font-semibold mb-2">기술 스택</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>React, Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>API 통합</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">경력</h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">프론트엔드 개발자, XYZ Corp</h4>
          <p className="text-sm text-gray-600">2022년 1월 - 현재</p>
          <p className="mt-2">
            - React와 TypeScript를 사용하여 회사의 주요 웹 애플리케이션을
            개발하고 유지보수했습니다. - 코드 최적화 및 새로운 기능 통합을 통해
            애플리케이션 성능을 개선했습니다.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2">학력</h3>
        <p className="mb-4">컴퓨터 과학 학사, ABC 대학교</p>

        <h3 className="text-xl font-semibold mb-2">자격증</h3>
        <p className="mb-4">인증 React 개발자</p>

        <h3 className="text-xl font-semibold mb-2">프로젝트</h3>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">포트폴리오 웹사이트</h4>
          <p className="mt-2">
            다양한 프로젝트와 기술을 소개하는 개인 포트폴리오 웹사이트입니다.
          </p>
          <a
            href="https://github.com/moonyah/portfolio"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            프로젝트 보기
          </a>
        </div>
      </section>
    </div>
  );
}
