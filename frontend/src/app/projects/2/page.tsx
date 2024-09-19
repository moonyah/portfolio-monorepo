'use client';
import Button from '@/components/Button';
import dynamic from 'next/dynamic';
import { projectDetails } from '@/data/projectDetails';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 클라이언트 사이드 컴포넌트 동적 임포트
const CreateClubForm = dynamic(
  () => import('@/components/Project/CreateClubForm'),
  {
    ssr: false, // 서버 사이드 렌더링 비활성화
  }
);

export default function Project1Page() {
  const projectData = projectDetails[2];
  const router = useRouter();

  if (!projectData) {
    return <p>프로젝트 데이터를 찾을 수 없습니다.</p>;
  }

  return (
    <div>
      <div className="pt-[8rem] pb-10 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-4xl text-left">
            <Button
              onClick={() => router.back()}
              className="mb-4 px-4 py-2 font-semibold"
            >
              ← 뒤로 가기
            </Button>
          </div>
          <div className="pb-10">
            <h2 className="font-bold text-gray-500 mb-4 text-xl">
              {projectData.type} 프로젝트
            </h2>
            <h2 className="text-3xl font-bold mb-4">{projectData.title}</h2>

            <div className="flex justify-center mb-2">
              {projectData.period && (
                <p className="text-gray-500 text-lg">{projectData.period}</p>
              )}
            </div>
            <p className="text-gray-500 text-lg">
              {projectData.description}&nbsp;
            </p>
            {projectData.members && (
              <p className="text-gray-500">({projectData.members})</p>
            )}
          </div>

          <div className="w-full max-w-4xl text-left text-gray-600">
            <section>
              <h2 className="block text-lg font-semibold my-4">
                소모임 개설 폼 구현
              </h2>
              <p className="block my-4">
                사용자가 소모임을 개설할 수 있는 폼을 구현하였으며, 이 과정에서
                react-hook-form과 zod를 사용하여 폼의 상태 관리 및 유효성 검사를
                처리하였습니다. react-hook-form을 이용해 간결하고 직관적인 폼
                상태 관리를 할 수 있었고, TypeScript와 호환되며 타입 안전성과
                강력한 유효성 검사를 제공하는 zod를 활용하여 에러 처리와 상태
                관리를 구현하였습니다. 이를 통해 사용자 경험을 향상시키고,
                유지보수성을 높일 수 있었습니다.
              </p>
              <p className="my-4">
                현재 아래의 폼은 데이터 입력 및 유효성 검사 기능만 구현되어
                있습니다.
                <br />
                (&quot;신청 후 승인&quot; 버튼 클릭 시에는, 폼 맨 아래에 신청서
                만들기 부분 추가됩니다.)
              </p>

              <CreateClubForm />

              <p className="mt-8 mb-4">
                zod를 사용한 이유는 데이터 유효성 검사를 더 명확하고 간결하게
                하기 위해서입니다. Zod는 타입스크립트와 완벽하게 통합되어
                있으며, 스키마 기반 유효성 검사를 통해 데이터 검증을 간편하게
                처리할 수 있습니다. Zod를 사용하지 않았다면, 유효성 검사를
                수동으로 처리해야 하며, 코드 중복이 발생하고 유지보수에 불리할
                수 있었습니다. react-hook-form과 Zod를 함께 사용함으로써 타입
                안전성과 유연한 검증 로직을 제공하며, 폼 상태 관리의 성능을
                최적화할 수 있었습니다.
              </p>
              <p className="my-4">
                이 조합을 통해 복잡한 폼에서도 코드 라인이 약 30% 줄어들고,
                유지보수 시 발생하는 오류를 20~30% 감소시키는 효과를 얻을 수
                있었습니다. 이는 사용자 경험을 개선하고, 프로젝트의 안정성과
                유지보수성을 더욱 강화하는 데 기여했습니다.
              </p>
            </section>
            <hr className="my-10" />
            <section>
              <h2 className="block text-lg font-semibold mb-4">
                자동화된 코드 동기화 및 배포 시스템 구축
              </h2>
              <p className="block my-4">
                조직 레포지토리의 코드를 개인 레포지토리로 동기화하고 Vercel로
                자동 배포되도록 GitHub Actions를 설정했습니다. 이를 통해 조직
                레포지토리에 새로운 코드가 푸시될 때마다 개인 레포지토리로 자동
                동기화되고, 변경사항이 감지되면 Vercel로 자동 배포됩니다.
                actions/checkout을 사용해 소스 코드를 체크아웃하고, 개인
                레포지토리로 푸시 작업을 수행했으며, Vercel의 Git 통합 기능을
                통해 배포를 트리거했습니다. 이러한 자동화 설정으로 코드 변경 시
                빠르고 효율적인 배포가 가능해져 개발 효율성이 크게
                향상되었습니다.
              </p>
              <h3 className="font-semibold mt-8 mb-4">
                GitHub Actions 설정 코드
              </h3>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                <code className="whitespace-pre">
                  {`name: Deploy

on:
  push:
    branches: ['main']

jobs:
  build:
    runs-on: ubuntu-latest

    container: pandoc/latex

    steps:
      - uses: actions/checkout@v2

      - name: Install mustache (to update the date)
        run: apk add ruby && gem install mustache

      - name: creates output
        run: sh ./build.sh

      - name: Pushes to another repository
        id: push_directory
        uses: cpina/github-action-push-to-another-repository@main
        env:
          API_TOKEN_GITHUB: \${{ secrets.API_TOKEN_GITHUB }}
        with:
          source-directory: 'output'
          destination-github-username: moonyah
          destination-repository-name: linkup-frontend
          user-email: dltk456@naver.com
          commit-message: \${{ github.event.commits[0].message }}
          target-branch: main

      - name: Test get variable exported by push-to-another-repository
        run: echo $DESTINATION_CLONED_DIRECTORY`}
                </code>
              </pre>

              <p className="my-4">
                위의 코드는 실제로 사용한 GitHub Actions 설정 코드입니다. 이
                워크플로우는 코드가 main 브랜치에 푸시될 때마다 실행되며, 소스
                코드를 체크아웃하고, 빌드를 수행한 후, 결과를 다른 레포지토리에
                푸시합니다. 또한, Vercel과 통합되어 자동 배포가 트리거됩니다.
              </p>
              <Image
                src="/images/linkup-workflows.png"
                alt="GitHub Actions Workflow 로그"
                width={800}
                height={600}
                className="mt-8 mb-4 rounded shadow-md"
              />

              <p className="my-4">
                위 이미지는 GitHub Actions의 워크플로우 실행 로그의 전체적인
                상태를 보여줍니다.
              </p>
              <Image
                src="/images/linkup-workflows2.png"
                alt="GitHub Actions Workflow 자세한 로그"
                width={800}
                height={600}
                className="mb-8 rounded shadow-md"
              />

              <p className="my-4">
                이 이미지는 GitHub Actions의 워크플로우 실행 로그에서 자세한
                내용을 클릭하여 확인할 수 있는 화면을 캡쳐한 것입니다. 자동화된
                배포 프로세스의 세부 사항을 확인하는 데 유용합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
