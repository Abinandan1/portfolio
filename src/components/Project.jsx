import { FaArrowLeft, FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { Link } from "react-router-dom";
import { Wrapper } from "../wrappers/Project";
import { useState } from "react";
const Project = ({ image, name, site, code, special, about }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <Wrapper className="project">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <p>{name}</p>
        <button
          onClick={(e) => {
            setFlipped(true);
          }}
          className="info-btn"
        >
          <FaInfoCircle />
        </button>
      </div>
      {flipped ? (
        <div className="description">
          <button onClick={() => setFlipped(false)} className="back-btn">
            <FaArrowLeft /> Back
          </button>
          <p>{about}</p>
        </div>
      ) : (
        <div className="footer">
          {special ? (
            <Link to={site} className="btn">
              <FaGlobe />
              Live Site
            </Link>
          ) : (
            <a target="_blank" href={site} className="btn">
              <FaGlobe />
              Live Site
            </a>
          )}
          <a target="_blank" href={code} className="btn">
            {special ? (
              <>
                <SiFrontendmentor className="fm" />
                FM Profile
              </>
            ) : (
              <>
                <FaGithub />
                Github
              </>
            )}
          </a>
        </div>
      )}
    </Wrapper>
  );
};
export default Project;
