'use client';
import { useParams } from 'next/navigation';
import { projectDetails } from '@/data/projectDetails'; // projectDetails 경로에 맞게 수정 필요
import ProjectDetails from '@/components/Project/ProjectDetails';
import ProjectProblemsAndSolutions from '@/components/Project/ProjectProblemsAndSolutions';
import ProjectFeatures from '@/components/Project/ProjectFeatures';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/Button';

const ProjectPage = () => {
  const { projectId } = useParams();
  const projectData = projectDetails[Number(projectId)];
  const router = useRouter();

  if (!projectData) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div className="pt-[8rem] pb-10 px-4">
        <div className="flex flex-col items-center text-center mt-8">
          <div className="w-full max-w-4xl text-left">
            <Button
              onClick={() => router.back()}
              className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black font-semibold rounded"
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

          <div className="w-full max-w-4xl text-left">
            <ul className="list-none p-0 ">
              {projectData.problemsAndSolutions?.map((ps, index) => (
                <li key={index} className="text-gray-600 mb-8">
                  <div className="mb-4">
                    <strong className="block text-lg font-semibold mb-4">
                      문제
                    </strong>
                    <p>{ps.problem}</p>
                  </div>
                  <div className="">
                    <strong className="block text-lg font-semibold mb-4">
                      해결
                    </strong>
                    <p>{ps.solution}</p>
                  </div>
                  {ps.link && (
                    <div className="text-right mt-2">
                      <Link
                        href={ps.link}
                        className="text-blue-500 hover:underline"
                      >
                        더보기 →
                      </Link>
                    </div>
                  )}
                  {/* 문제와 해결 세트 사이에 구분선 추가 */}
                  {index <
                    (projectData.problemsAndSolutions?.length ?? 0) - 1 && (
                    <hr className="border-gray-300 my-8" />
                  )}
                </li>
              ))}
            </ul>
            <ul className="list-none p-0">
              {projectData.features?.map((feature, index) => (
                <li key={index} className="mb-8 text-gray-600">
                  <strong className="block text-lg font-semibold mb-4">
                    {feature.name}
                  </strong>
                  <p>{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
