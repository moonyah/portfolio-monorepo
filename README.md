# Portfolio Monorepo

## 프로젝트 설명

이 프로젝트는 프론트엔드와 백엔드를 포함하는 포트폴리오 웹사이트입니다. React와 Next.js를 사용하여 프론트엔드를 구성하고, Express와 MongoDB를 사용하여 백엔드를 구성하였습니다. Docker를 사용하여 개발 환경을 설정하고 배포합니다.

## 기능

- 프로젝트 목록과 세부 정보 표시 (ing)
- 사용자가 프로젝트에 '좋아요'를 표시할 수 있음 (예정)
- 사용자 의견을 남길 수 있는 방명록 기능 (ing)

## 설치 방법

### 로컬 개발 환경 설정

1. 레포지토리를 클론합니다:

   ```bash
   git clone <repository-url>
   cd portfolio-monorepo
   ```

2. 의존성을 설치합니다:

   ```bash
   npm install
   ```

3. Docker 및 Docker Compose가 설치되어 있는지 확인합니다.

4. Docker 컨테이너를 빌드하고 실행합니다:

   ```bash
   docker-compose up --build
   ```

5. 웹 애플리케이션에 접근하려면 브라우저에서 `http://localhost:3000`을 열어보세요.

## 사용 방법

- 프론트엔드 애플리케이션은 `http://localhost:3000`에서 접근할 수 있습니다.
- 백엔드 API는 `http://localhost:5000`에서 접근할 수 있습니다.

## 기술 스택

- 프론트엔드: React, Next.js, Tailwind CSS
- 백엔드: Node.js, Express, MongoDB
- Docker: 컨테이너화 및 배포

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인하세요.

## 연락처

프로젝트에 대한 질문이나 피드백은 [이메일 주소](dltk456@naver.com)로 연락해 주세요.
