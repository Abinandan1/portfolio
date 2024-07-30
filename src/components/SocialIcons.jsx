import { Wrapper } from "../wrappers/SocialIcons";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <Wrapper>
      <div className="icons">
        <a
          target="_blank"
          href="https://github.com/Abinandan1"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/abinandan-a-t-465657211/"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/abinandan_at"
          className="icon"
        >
          <FaInstagram />
        </a>
        <a target="_blank" href="https://www.x.com/abidev3009" className="icon">
          <FaTwitter />
        </a>
      </div>
      <hr />
    </Wrapper>
  );
};
export default SocialIcons;
