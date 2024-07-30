import styled from "styled-components";

export const Wrapper = styled.section`
  box-shadow: var(--shadow-2);
  padding: 2rem 0.5rem 1rem 0.5rem;
  display: grid;
  border-radius: 0.75rem;

  margin-top: 5rem;
  gap: 2rem;
  border-top: 4px solid var(--primary-color);
  .course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  a {
    display: grid;
    color: var(--primary-color);
  }
  p {
    font-size: 0.75rem;
  }
  svg {
    width: 1rem;
    height: 1rem;
    /* align-self: flex-start; */
  }
  svg path:nth-child(2) {
    fill: var(--text-color);
  }
  @media (width >=500px) {
  }
  @media (width >=768px) {
    width: 90%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    .course {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    p {
      font-size: 1rem;
    }
  }
`;
