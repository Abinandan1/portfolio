import { Wrapper } from "../wrappers/Projects";
import project1 from "/assets/images/project-1.png";
import project2 from "/assets/images/project-2.png";
import project3 from "/assets/images/project-3.png";
import Project from "./Project";
import { projectDescriptions } from "../utils/projectDescriptions";
import { useFetchProjects } from "../utils/FetchProjects";
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  return (
    <Wrapper>
      {projects.map(
        ({ id, title, siteUrl, githubUrl, imageUrl, description }) => (
          <Project
            key={id}
            about={description}
            image={imageUrl}
            name={title}
            site={siteUrl}
            code={githubUrl}
            special={siteUrl === "/fm-challenges"}
          />
        )
      )}
    </Wrapper>
  );
};
export default Projects;
