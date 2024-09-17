import { Project } from "@/types/project";

export const projectDetails: Record<number, Project> = {
  1: {
    type: "개인",
    title: "Portfolio-JangMunYong",
    description: "포트폴리오 웹사이트",
    period: "2024년 9월",
    githubLink: "https://github.com/moonyah/portfolio-monorepo",
    architectureImage: "/images/architecture.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
  },
  2: {
    type: "팀",
    title: "LINKUP",
    description: "공유 오피스 예약 & 커뮤니티 서비스",
    period: "2024년 5월 - 6월",
    members: "PM 2명, UI/UX 4명, FE 3명, BE 2명",
    role: "소모임 메뉴, 소모임 개설, 소모임 관리",
    githubLink: "https://github.com/Linkup-3mw/frontend",
    architectureImage: "/images/architecture.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      {
        name: "소모임 개설 폼 구현",
        description:
          "사용자가 소모임을 개설할 수 있는 폼을 구현하였으며, 이 과정에서 react-hook-form과 zod를 사용하여 폼의 상태 관리 및 유효성 검사를 처리하였습니다. react-hook-form을 이용해 간결하고 직관적인 폼 상태 관리를 할 수 있었고, TypeScript와 호환되며 타입 안전성과 강력한 유효성 검사를 제공하는 zod를 활용하여 에러 처리와 상태 관리를 구현하였습니다. 이를 통해 사용자 경험을 향상시키고, 유지보수성을 높일 수 있었습니다.",
        link: "/projects/2",
      },
      {
        name: "자동화된 코드 동기화 및 배포 시스템 구축",
        description:
          "조직 레포지토리의 코드를 개인 레포지토리로 동기화하고 Vercel로 자동 배포되도록 GitHub Actions를 설정했습니다. 이를 통해 조직 레포지토리에 새로운 코드가 푸시될 때마다 개인 레포지토리로 자동 동기화되고, 변경사항이 감지되면 Vercel로 자동 배포됩니다. actions/checkout을 사용해 소스 코드를 체크아웃하고, 개인 레포지토리로 푸시 작업을 수행했으며, Vercel의 Git 통합 기능을 통해 배포를 트리거했습니다. 이러한 자동화 설정으로 코드 변경 시 빠르고 효율적인 배포가 가능해져 개발 효율성이 크게 향상되었습니다.",
      },
    ],
  },
  3: {
    type: "팀",
    title: "골든티켓",
    description: "숙소 양도 거래 서비스",
    period: "2023년 12월 – 2024년 1월",
    members: "PM 5명, UI/UX 1명, FE 5명, BE 5명",
    role: "상품 등록 페이지, 나의 거래 페이지",
    githubLink: "https://github.com/Yanol-Market/frontend",
    architectureImage: "/images/architecture.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    problemsAndSolutions: [
      {
        problem:
          "로그인하지 않으면 접근할 수 없는 경로로 이동한 후, 뒤로 가기 버튼을 클릭하면 홈으로 이동하지 않는 문제가 발생하였습니다. React Router의 기본 동작은 이전 페이지를 이력 스택에 추가하고 새로운 페이지를 렌더링합니다. 로그인하지 않으면 접근할 수 없는 경로가 스택에 추가되어 브라우저의 뒤로 가기 버튼이 기대한 대로 동작하지 않습니다.",
        solution:
          "React Router의 페이지 이동 시, replace 옵션을 추가하여 이전 페이지를 스택에 추가하지 않고 현재 페이지를 유지함으로써 문제 해결하였습니다.",
        // link: "/features/form-implementation",
      },
      {
        problem:
          "로그인하지 않으면 접근할 수 없는 경로로 이동한 후, 뒤로 가기 버튼을 클릭하면 홈으로 이동하지 않는 문제가 발생하였습니다. React Router의 기본 동작은 이전 페이지를 이력 스택에 추가하고 새로운 페이지를 렌더링합니다. 로그인하지 않으면 접근할 수 없는 경로가 스택에 추가되어 브라우저의 뒤로 가기 버튼이 기대한 대로 동작하지 않습니다.",
        solution:
          "React Router의 페이지 이동 시, replace 옵션을 추가하여 이전 페이지를 스택에 추가하지 않고 현재 페이지를 유지함으로써 문제 해결하였습니다.",
        // link: "/features/form-implementation",
      },
    ],
    features: [
      {
        name: "빠른 상품 등록을 위한 SPA 구현",
        description:
          "페이지 리로드 없는 빠른 상품 등록 단계를 구현하기 위해서 SPA의 특징인 CSR을 이용하여 상품 등록 단계를 'addproduct/1', 'addproduct/2', 'addproduct/3'과 같은 URL 변경에 따른 뷰 전환으로 구현하였습니다. 이 방식은 사용자가 상품 등록 단계를 진행하는 동안에도 페이지가 새로 고침되지 않고, 필요한 데이터만을 동적으로 로드합니다.",
        // link: "/features/form-implementation",
      },
    ],
  },
  4: {
    type: "팀",
    title: "STAYINN",
    description: "숙소 예약 서비스",
    period: "2023년 11월 – 2023년 12월",
    members: "FE 5명, BE 3명",
    role: "메인 페이지, 카테고리(숙소 분류) 페이지",
    githubLink: "https://github.com/moonyah/KDT_Y_FE_Mini-Project",
    architectureImage: "/images/architecture.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    problemsAndSolutions: [
      {
        problem:
          "처음에는 호텔을 분류하기 위해 URL에 slug를 사용하려고 했으나, slug를 사용한 URL은 category와 location의 명시성이 부족하여 사용자가 원하는 정보를 정확히 식별하기 어려운 문제가 있었습니다.",
        solution:
          "URL을 product?category=&location=와 같이 변경하여 사용자가 쉽게 필터링하고 원하는 정보를 찾을 수 있도록 개선하였습니다.",
      },
    ],
    features: [
      {
        name: "Next.js를 사용한 이유",
        description:
          "숙소 예약 서비스의 메인 페이지는 사용자가 많이 방문하는 페이지이고 Next.js를 사용해 SSR을 구현함으로써, 초기 로딩 속도를 개선하였습니다. 또한 많은 사용자가 검색 엔진을 통해 숙소를 찾는 점을 고려할 때, SEO를 개선해 더 많은 유입을 얻을 수 있다고 생각하여 선택하였습니다.",
      },
    ],
  },
  5: {
    type: "팀",
    title: "호그와톡",
    description:
      "해리포터 컨셉의 소켓 기반 채팅 서비스, 주어진 api와 소켓을 활용",
    period: "2023년 11월",
    members: "FE 5명",
    role: "마이페이지, 친구 목록 페이지",
    githubLink: "https://github.com/moonyah/Hogwartalk",
    architectureImage: "/images/architecture.png",
    technologies: ["Next.js", "TypeScript", "Styled-components"],
    features: [
      {
        name: "주어진 API 외에 Firebase를 사용한 이유",
        description:
          "기획대로 구현하기 위해서 각 유저마다 기숙사 정보가 저장되어야 했고 주어진 API와 소켓만을 활용하기에 한계가 있었습니다. Firebese를 사용해 문제를 해결하였습니다.",
      },
      {
        name: "소켓을 이용한 실시간 접속 상태 확인",
        description:
          "Socket.io를 사용하여 실시간으로 접속 상태를 확인하는 기능을 구현을 위해 클라이언트 측에서 Socket.io-client를 사용해 서버와 연결을 설정하였습니다. 서버로부터 받은 유저 목록과 Socket.io를 이용해 실시간으로 접속 상태를 확인하고, 접속 유무 표시하였습니다.",
      },
      {
        name: "마이페이지 편집 및 실시간 반영",
        description:
          "사용자가 프로필을 편집할 때, 변경된 내용이 즉시 화면에 반영되도록 구현하기 위해 변경된 내용은 클라이언트 측에서 useState훅을 통해 임시적인 상태로 저장합니다. 변경된 내용은 서버와 통신하기 전에 실시간으로 반영되어 보입니다.",
      },
    ],
  },
};
