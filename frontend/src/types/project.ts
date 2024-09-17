export interface Feature {
  name: string;
  description: string;
  link?: string;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
  link?: string;
}

export interface Project {
  type: string;
  title: string;
  description: string;
  period?: string; // 프로젝트 기간
  role?: string; // 담당 역할
  members?: string; // 프로젝트 구성원
  githubLink?: string; // GitHub 리포지토리 링크
  architectureImage?: string; // 프로젝트 아키텍처 사진 URL
  technologies?: string[]; // 사용한 기술 리스트
  problemsAndSolutions?: ProblemSolution[]; // 문제 및 해결 리스트
  features?: Feature[]; // 구현 기능 리스트
}
