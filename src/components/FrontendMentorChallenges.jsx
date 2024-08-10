import { Wrapper } from "../wrappers/Projects";
import Project from "./Project";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useFetchProjects } from "../utils/FetchProjects";
const FrontendMentorChallenges = () => {
  const { loading, challenges } = useFetchProjects();

  return (
    <Wrapper type="fm">
      <Link to="/projects" className="back-btn">
        <FaArrowLeft /> Back to projects
      </Link>
      <div className="fm-projects">
        {challenges.map(
          ({ id, title, siteUrl, githubUrl, imageUrl, description }) => (
            <Project
              key={id}
              about={description}
              image={imageUrl}
              name={title}
              site={siteUrl}
              code={githubUrl}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};
export default FrontendMentorChallenges;
