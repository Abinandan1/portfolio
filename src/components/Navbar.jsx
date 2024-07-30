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
        <Link to="/" className="nav-icon">
          <TbHomeFilled />
        </Link>
        <Link to="/about" className="nav-icon">
          <TbInfoSquareFilled />
        </Link>
        <Link to="/skills" className="nav-icon">
          <GiSmart />
        </Link>
        <Link to="/projects" className="nav-icon">
          <TbBriefcaseFilled />
        </Link>
        <Link to="/courses" className="nav-icon">
          <PiCertificateFill />
        </Link>
        <Link to="/contact" className="nav-icon">
          <TbUserFilled />
        </Link>
      </div>
    </Wrapper>
  );
};
export default Navbar;
