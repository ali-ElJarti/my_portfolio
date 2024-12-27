"use client";

import projectsData from "@/data/projectsData";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id;

  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <div className="wrapper">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <Image
            src={project.img}
            alt={project.title}
            width={800}
            height={500}
            className="rounded-lg mb-6"
          />
          <p className="text-lg mb-6">{project.description}</p>

          {project.pdf && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Project PDF</h2>
              <iframe
                src={project.pdf}
                width="60%"
                height="1000"
                className="border border-gray-700 rounded-lg"
                title="Project PDF Viewer"
              ></iframe>
            </div>
          )}

          {project.video && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Project Video</h2>
              <iframe
                width="800"
                height="600"
                src={project.video.replace("watch?v=", "embed/")}
                title={`${project.title} Video`}
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
