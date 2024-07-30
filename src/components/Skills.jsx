import { Wrapper } from "../wrappers/Skills";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
const Skills = () => {
  return (
    <Wrapper>
      <div className="skill">
        <FaHtml5 />
        <h3>HTML</h3>
      </div>
      <div className="skill">
        <FaCss3Alt />
        <h3>CSS</h3>
      </div>
      <div className="skill">
        <FaJs />
        <h3>JavaScript</h3>
      </div>
      <div className="skill">
        <FaReact />
        <h3>React</h3>
      </div>
      <div className="skill">
        <FaNodeJs />
        <h3>Node</h3>
      </div>
      <div className="skill">
        <SiTailwindcss />
        <h3>Tailwind</h3>
      </div>
    </Wrapper>
  );
};
export default Skills;
