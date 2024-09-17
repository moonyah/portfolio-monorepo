import React from "react";
import { projectDetails } from "@/data/projectDetails";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectProblemsAndSolutionsProps {
  project: Project;
}

const ProjectProblemsAndSolutions = ({
  project,
}: ProjectProblemsAndSolutionsProps) => {
  if (!project?.problemsAndSolutions) return null;

  return (
    <div className="mt-8 w-full max-w-4xl text-left">
      <ul className="list-none p-0">
        {project.problemsAndSolutions.map((ps, index) => (
          <li key={index} className="text-gray-600 mb-8">
            <div className="mb-4">
              <strong className="block text-lg font-semibold mb-4">문제</strong>
              <p>{ps.problem}</p>
            </div>
            <div className="">
              <strong className="block text-lg font-semibold mb-4">해결</strong>
              <p>{ps.solution}</p>
            </div>
            {ps.link && (
              <div className="text-right mt-2">
                <Link href={ps.link} className="text-blue-500 hover:underline">
                  더보기 →
                </Link>
              </div>
            )}
            {/* 문제와 해결 세트 사이에 구분선 추가 */}
            {index < (project.problemsAndSolutions?.length ?? 0) - 1 && (
              <hr className="border-gray-300 my-8" />
            )}
          </li>
        ))}
      </ul>
      {/* 문제와 해결 세트 후에 구분선 추가 */}
      {project.features && <hr className="border-gray-300 " />}
    </div>
  );
};

export default ProjectProblemsAndSolutions;
