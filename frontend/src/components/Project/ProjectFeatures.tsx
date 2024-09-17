import React from "react";
import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectFeaturesProps {
  project: Project;
}

const ProjectFeatures = ({ project }: ProjectFeaturesProps) => {
  if (!project?.features) return null;

  return (
    <div className="mt-8 w-full max-w-4xl text-left">
      <ul className="list-none p-0">
        {project.features.map((feature, index) => (
          <li key={index} className="mb-8 text-gray-600">
            <strong className="block text-lg font-semibold mb-4">
              {feature.name}
            </strong>
            <p>{feature.description}</p>
            {feature.link && (
              <div className="text-right mt-2">
                <Link
                  href={feature.link}
                  className="text-blue-500 hover:underline"
                >
                  더보기 →
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
