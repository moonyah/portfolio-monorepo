"use client";
import React, { useEffect, useState } from "react";
import { projectDetails } from "@/data/projectDetails";
import { useSearchParams, useRouter } from "next/navigation";
import ProjectSlider from "@/components/Project/ProjectSlider";
import ProjectDetails from "@/components/Project/ProjectDetails";
import ProjectProblemsAndSolutions from "@/components/Project/ProjectProblemsAndSolutions";
import ProjectFeatures from "@/components/Project/ProjectFeatures";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleProjectClick = (id: number) => {
    if (projectDetails[id]) {
      setSelectedProject(id);
      router.push(`?project=${id}`);
    }
  };

  useEffect(() => {
    const projectParam = searchParams.get("project");
    const projectId = projectParam ? parseInt(projectParam, 10) : null;

    if (
      projectParam &&
      projectId !== null &&
      !isNaN(projectId) &&
      projectDetails[projectId]
    ) {
      setSelectedProject(projectId);
    } else if (!projectParam) {
      router.push("?project=1");
    } else {
      setSelectedProject(null);
    }
  }, [searchParams, router]);

  const projectData =
    selectedProject !== null ? projectDetails[selectedProject] : null;

  return (
    <div>
      <ProjectSlider
        onProjectClick={handleProjectClick}
        projects={[1, 2, 3, 4, 5]}
        selectedProject={selectedProject}
      />
      <div className="pt-4 pb-10 px-4">
        {projectData && (
          <div className="flex flex-col items-center text-center mt-8">
            <ProjectDetails project={projectData} />
            <ProjectProblemsAndSolutions project={projectData} />
            <ProjectFeatures project={projectData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
