import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Wrapper } from "../wrappers/About";
import { useState } from "react";

const About = () => {
  const [faq, setFaq] = useState([1, 2, 3]);
  return (
    <Wrapper>
      <div className="faq">
        <div className="question">
          <p>I am passionate about web development because…</p>
          <button
            onClick={() => {
              const newFaq = faq.includes(1)
                ? faq.filter((i) => i !== 1)
                : [...faq, 1];
              setFaq(newFaq);
            }}
            className="arrow-btn"
          >
            {faq.includes(1) ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </button>
        </div>
        <p className={`answer ${faq.includes(1) && "show-answer"}`}>
          I can use my creative mind to implement great things in the websites I
          develop. I like doing something new & make others use it & feel
          satisfied by seeing them enjoy it. Web Dev helps me doing it.
        </p>
      </div>
      <div className="faq">
        <div className="question">
          <p>My favorite front-end tool to work with is…</p>
          <button
            onClick={() => {
              const newFaq = faq.includes(2)
                ? faq.filter((i) => i !== 2)
                : [...faq, 2];
              setFaq(newFaq);
            }}
            className="arrow-btn"
          >
            {faq.includes(2) ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </button>
        </div>
        <p className={`answer ${faq.includes(2) && "show-answer"}`}>
          React. I feel React is a very interesting tool to work with. Features
          like components, state management, global context, API communication &
          react query that react provides us makes our lives easier.
        </p>
      </div>
      <div className="faq">
        <div className="question">
          <p>A side project I built that I’m proud of is…</p>
          <button
            onClick={() => {
              const newFaq = faq.includes(3)
                ? faq.filter((i) => i !== 3)
                : [...faq, 3];
              setFaq(newFaq);
            }}
            className="arrow-btn"
          >
            {faq.includes(3) ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </button>
        </div>
        <p className={`answer ${faq.includes(3) && "show-answer"}`}>
          Notes Application. Notes Application is used to take and maintain
          notes. We can note down essential things like credentials, list of
          grocery, list of things we need to do in a day, etc.
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
