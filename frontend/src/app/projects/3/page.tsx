'use client';
import Button from '@/components/Button';
import { projectDetails } from '@/data/projectDetails';
import { useRouter } from 'next/navigation';

export default function Project3Page() {
  const projectData = projectDetails[3];
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
                빠른 상품 등록을 위한 SPA 구현
              </h2>
              <p className="block my-4">
                페이지 리로드 없는 빠른 상품 등록 단계를 구현하기 위해서 SPA의
                특징인 CSR을 이용하여 상품 등록 단계를
                &lsquo;addproduct/1&rsquo;, &lsquo;addproduct/2&rsquo;,
                &lsquo;addproduct/3&rsquo;과 같은 URL 변경에 따른 뷰 전환으로
                구현하였습니다. 이 방식은 사용자가 상품 등록 단계를 진행하는
                동안에도 페이지가 새로 고침되지 않고, 필요한 데이터만을 동적으로
                로드합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
