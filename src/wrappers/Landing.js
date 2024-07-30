import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  place-content: center;

  .greet {
    display: flex;
  }
  .greet span {
    color: var(--primary-color);
    font-weight: 700;
  }
  .highlight {
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
  }
  h1 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
  .description {
    line-height: 1.5;
    text-align: justify;
  }
  @media (width>=768px) {
    padding-top: 4rem;
    .description {
      max-width: 400px;
    }
  }
`;
