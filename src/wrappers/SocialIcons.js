import styled from "styled-components";

export const Wrapper = styled.section`
  border-radius: var(--border-radius);
  animation: slideInUp;
  animation-duration: 1.5s;
  position: fixed;
  bottom: 4rem;
  display: grid;
  hr {
    transform: rotate(90deg);
    margin-top: 2rem;
    border: none;
    background: var(--primary-color);
    height: 2px;
    /* display: block; */
  }
  .icons {
    display: grid;
    padding: 1rem 2rem;
    justify-content: center;
    gap: 1rem;
    border-radius: var(--border-radius);
  }
  .icon {
    font-size: 1rem;
    color: var(--primary-color);
    transition: var(--transition);
  }
  .icon:hover {
    color: var(--gray-700);
  }
  /* @media (width>=768px) {
    margin-left: 3rem;
  }
  @media (width>=1170px) {
    margin-left: 4rem;
  }
  @media (width>=1300px) {
    margin-left: 6rem;
  }
  @media (width>=1400px) {
    margin-left: 10rem;
  } */
`;
