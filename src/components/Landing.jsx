import { Wrapper } from "../wrappers/Landing";

const Landing = () => {
  return (
    <Wrapper>
      <div className="greet">
        <span>{"<>"}</span>
        <p>Hello World</p>
        <span>{"</>"}</span>,
      </div>
      <h1>I'm Abinandan</h1>
      <p className="description">
        Highly skilled Web Developer with a passion for creating awesome and
        user-friendly websites. I have a strong background in HTML, CSS,
        JavaScript, React.js and Node.js. Problem-solving skills and ability to
        adapt to situations are my key strengths. I constantly update myself
        with the latest web development trends and technologies to ensure that
        my work is always cutting-edge. Check out{" "}
        <a href="/projects" className="highlight">
          Projects Section{" "}
        </a>
        for some cool projects!
      </p>
    </Wrapper>
  );
};
export default Landing;
