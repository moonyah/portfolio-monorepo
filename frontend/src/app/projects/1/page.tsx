'use client';
import Button from '@/components/Button';
import { projectDetails } from '@/data/projectDetails';
import { useRouter } from 'next/navigation';
import DownloadsChart from '@/components/Project/DownloadsChart';
import Image from 'next/image'; // 추가된 import

export default function Project2Page() {
  const projectData = projectDetails[1];
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
                npm 패키지 개발 및 적용
              </h2>
              <p className="block my-4">
                직접 개발한 use-scroll-animation npm 패키지를 프로젝트에
                적용하여 스크롤 애니메이션을 간편하게 구현하였습니다. 이
                패키지는 사용자 경험을 향상시키는 부드러운 스크롤 효과를
                제공하며, 코드 재사용성을 높이고 효율적인 코드 관리에 도움을
                줍니다.
              </p>
              <div className="my-4">
                <h3 className="font-semibold">적용된 화면</h3>
                <video autoPlay muted loop playsInline className="w-full">
                  <source src="/scroll.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-8 mb-4">
                <h3 className="font-semibold">npm 페이지 캡처</h3>
                <p className="block my-4">
                  아래는{' '}
                  <a
                    href="https://www.npmjs.com/package/use-scroll-animation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    npm 페이지
                  </a>
                  의 화면 캡처입니다.
                </p>
                <Image
                  src="/images/npm-screenshot.jpg"
                  alt="npm 페이지 캡처"
                  className="w-full"
                  width={1200} // 적절한 width 값
                  height={600} // 적절한 height 값
                />
              </div>
              <div className="mt-8 mb-4 font-semibold">코드 예제:</div>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                {`import useSmoothScroll from 'use-scroll-animation';

const App = () => {
  const { currentSection, scrollToSection } = useSmoothScroll(1000);

  return (
    <div>
      <button onClick={() => scrollToSection(0)}>Scroll to Section 1</button>
      <button onClick={() => scrollToSection(1)}>Scroll to Section 2</button>
      <p>Current Section: {currentSection}</p>
    </div>
  );
};`}
              </pre>

              <h2 className="text-lg font-semibold my-4">성과 및 학습</h2>
              <p className="block my-4">
                이 패키지 개발을 통해 npm 패키지의 제작 및 배포 과정에 대한
                경험과 모듈화와 확장성에 대한 깊이 있는 이해를 얻을 수
                있었습니다. 이 후 프로젝트에서도 이러한 경험을 활용하여 더 나은
                솔루션을 제공할 수 있을 것입니다.
              </p>

              <h2 className="text-lg font-semibold my-4">향후 개선 방안</h2>
              <p className="block my-4">
                향후 패키지의 기능을 확장하고, 더 많은 사용자 요구를 반영할
                계획입니다. 새로운 애니메이션 효과를 추가하고, 사용자의 피드백을
                기반으로 개선점을 반영할 예정입니다. 또한, 문서화 작업을
                강화하여 패키지의 사용성을 더욱 향상시키고, 더 많은 개발자들에게
                유용한 도구가 되도록 할 계획입니다.
              </p>

              <p className="block my-4">
                자세한 정보와 패키지의 설치 방법은{' '}
                <a
                  href="https://www.npmjs.com/package/use-scroll-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  npm 페이지
                </a>
                에서 확인하실 수 있으며, 코드와 기여 방법은{' '}
                <a
                  href="https://github.com/moonyah/use-scroll-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  GitHub repository
                </a>
                에서 확인하실 수 있습니다.
              </p>
              <h2 className="text-lg font-semibold mt-8">다운로드 기록</h2>
              <p className="block my-4">
                패키지는 2024년 9월 10일 배포가 되었고, 차트는 현재 날짜를
                기준으로 최근 한 달 동안의 다운로드 추세를 NPM API를 통해 가져와
                나타낸 것입니다. 이 데이터를 통해 패키지의 인기 변화를
                시각적으로 확인할 수 있습니다.
              </p>
              <DownloadsChart />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
