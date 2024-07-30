import { Wrapper } from "../wrappers/Projects";
import project1 from "/assets/images/project-1.png";
import project2 from "/assets/images/project-2.png";
import project3 from "/assets/images/project-3.png";
import Project from "./Project";
import { projectDescriptions } from "../utils/projectDescriptions";
const Projects = () => {
  // const flip = (e) => {
  //   e.currentTarget.parentElement.parentElement.classList.toggle(
  //     "flip-project"
  //   );
  // };
  return (
    <Wrapper>
      <Project
        image={project3}
        name="Frontend Mentor challenges"
        site="/fm-challenges"
        code="https://www.frontendmentor.io/profile/Abinandan1"
        special={true}
        about={projectDescriptions[0]}
      />
      <Project
        image={project1}
        name="Jobify"
        site="https://mern-course-jobify-e9pr.onrender.com"
        code="https://github.com/Abinandan1/mern-course-jobify"
        about={projectDescriptions[1]}
      />
      <Project
        image={project2}
        name="Notes"
        site="https://notes-v2.onrender.com"
        code="https://github.com/Abinandan1/notes_v2"
        about={projectDescriptions[2]}
      />
    </Wrapper>
  );
};
export default Projects;
