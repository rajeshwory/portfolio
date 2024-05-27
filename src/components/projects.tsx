import ProjectCard from "./project-card";

const projectData = [
  {
    id: 1,
    title: "Derive VQ",
    description:
      "A vehicle tracking system developed using Next js and Tailwind CSS. Helps with keeping record of fuel consumption and track vehicles through Azure map.",
  },
  {
    id: 2,
    title: "OfficeSync",
    description:
      "A web application that has multitenancy for companies, developed using Vite js, SCSS and Bootstrap. Helps company to sharfe files, generate meetings with required security alongside.",
  },
  {
    id: 3,
    title: "ToDo App",
    description:
      "A simple mobile application developed using React Native. Helps with keeping list of things to do and checklist out the done things.",
  },
  {
    id: 4,
    title: "JobFinderPlus",
    description:
      "A job recommending mobile application developed using React Expo and Python. Helps user for seeking suitable job and the system uses recommendation algorithms to recommend job on context-based.",
  },
];

const Projects = () => {
  return (
    <section className="w-full h-screen mt-20" id="projects">
      <div>
        <div className="text-center mb-6">
          <a className="text-5xl font-bold">Projects</a>
        </div>
        <div className="flex flex-row flex-wrap">
          {projectData &&
            projectData.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
