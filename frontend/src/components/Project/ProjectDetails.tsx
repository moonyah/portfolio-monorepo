import React from "react";
import { projectDetails } from "@/data/projectDetails";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  if (!project) return null;

  return (
    <section className="w-full max-w-4xl mx-auto relative">
      <h2 className="font-bold text-gray-500 mb-4 text-xl">
        {project.type} 프로젝트
      </h2>
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

      <div className="flex justify-center mb-2">
        {project.period && (
          <p className="text-gray-500 text-lg">{project.period}</p>
        )}
      </div>
      <p className="text-gray-500 text-lg">{project.description}&nbsp;</p>
      {project.members && <p className="text-gray-500">({project.members})</p>}

      <div className="flex flex-col items-start text-left mt-8 space-y-4">
        <div className="flex">
          <h3 className="text-lg font-semibold text-gray-600">
            사용 기술:&nbsp;
          </h3>
          {project.technologies && (
            <p className="text-gray-500 text-lg">
              {project.technologies.join(" + ")}
            </p>
          )}
        </div>
        {project.role && (
          <p className="text-lg text-gray-600">
            <span className="font-semibold">담당 역할: </span>
            {project.role}
          </p>
        )}
        {project.githubLink && (
          <h3 className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">깃헙레포지토리: </span>
            <a
              href={project.githubLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.githubLink}
            </a>
          </h3>
        )}
        <div className="pb-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-2 text-left">
            프로젝트 아키텍처
          </h3>
          {project.architectureImage && (
            <div className="mt-8 flex justify-center rounded-lg shadow-md">
              <div className="w-full max-w-4xl">
                <img
                  src={project.architectureImage}
                  alt="Architecture"
                  className="w-full h-auto max-w-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
