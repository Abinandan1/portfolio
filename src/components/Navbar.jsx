import { Wrapper } from "../wrappers/Navbar";
import { GiSmart } from "react-icons/gi";
import {
  TbHomeFilled,
  TbBriefcaseFilled,
  TbInfoSquareFilled,
  TbUserFilled,
} from "react-icons/tb";
import { PiCertificateFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="menu-center">
        <a href="/" className="nav-icon">
          <TbHomeFilled />
        </a>
        <a href="/about" className="nav-icon">
          <TbInfoSquareFilled />
        </a>
        <a href="/skills" className="nav-icon">
          <GiSmart />
        </a>
        <a href="/projects" className="nav-icon">
          <TbBriefcaseFilled />
        </a>
        <a href="/courses" className="nav-icon">
          <PiCertificateFill />
        </a>
        <a href="/contact" className="nav-icon">
          <TbUserFilled />
        </a>
      </div>
    </Wrapper>
  );
};
export default Navbar;
