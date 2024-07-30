import { Wrapper } from "../wrappers/Projects";
import challenge1 from "/assets/images/challenge-1.png";
import challenge2 from "/assets/images/challenge-2.png";
import challenge3 from "/assets/images/challenge-3.png";
import challenge4 from "/assets/images/challenge-4.png";
import challenge5 from "/assets/images/challenge-5.png";
import challenge6 from "/assets/images/challenge-6.png";
import challenge7 from "/assets/images/challenge-7.png";
import challenge8 from "/assets/images/challenge-8.png";
import challenge9 from "/assets/images/challenge-9.png";
import Project from "./Project";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBackward } from "react-icons/fa";
import { fmProjectDescriptions } from "../utils/projectDescriptions";
const FrontendMentorChallenges = () => {
  return (
    <Wrapper type="fm">
      <Link to="/projects" className="back-btn">
        <FaArrowLeft /> Back to projects
      </Link>
      <div className="fm-projects">
        <Project
          about={fmProjectDescriptions[0]}
          image={challenge1}
          name="Responsive Contact Form"
          site="https://contact-form-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/contact-form"
        />
        <Project
          about={fmProjectDescriptions[1]}
          image={challenge2}
          name="Responsive Mortgage Repayment Calculator"
          site="https://mortgage-calculator-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/mortgage-repayment-calculator"
        />
        <Project
          about={fmProjectDescriptions[2]}
          image={challenge3}
          name="Responsive Age Calculator App"
          site="https://age-calculator-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/age-calculator-app"
        />
        <Project
          about={fmProjectDescriptions[3]}
          image={challenge4}
          name="Newsletter Sign Up Form"
          site="https://newsletter-sign-up-form-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/newsletter-sign-up-form-with-success-message"
        />
        <Project
          about={fmProjectDescriptions[4]}
          image={challenge5}
          name="Interactive Calculator App"
          site="https://calculator-app-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/calculator-app"
        />
        <Project
          about={fmProjectDescriptions[5]}
          image={challenge6}
          name="Responsive Multi Step Form"
          site="https://multi-step-form-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/multi-step-form"
        />
        <Project
          about={fmProjectDescriptions[6]}
          image={challenge7}
          name="Interactive Comments Section"
          site="https://interactive-comment-section-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/interactive-comments-section"
        />
        <Project
          about={fmProjectDescriptions[7]}
          image={challenge8}
          name="Launch Countdown Timer"
          site="https://launch-countdown-timer-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/launch-countdown-timer"
        />
        <Project
          about={fmProjectDescriptions[8]}
          image={challenge9}
          name="Dictionary Web App"
          site="https://dictionary-web-app-abinandan.netlify.app/"
          code="https://github.com/Abinandan1/dictionary-web-app"
        />
      </div>
    </Wrapper>
  );
};
export default FrontendMentorChallenges;
