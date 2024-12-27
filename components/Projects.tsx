import projectsData from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="wrapper">
      {/* Title Section */}
      <Title text="Projects" icon={<FaProjectDiagram />} />

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
            description={project.description || ""} // Ensure description is always a string
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
