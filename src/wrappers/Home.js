import styled from "styled-components";

export const Wrapper = styled.section`
  animation: fadeIn;
  animation-duration: 1s;

  nav {
    padding: 1rem;
    margin-bottom: 2rem;
  }
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .theme-btn {
    background: transparent;
    border: none;
    display: grid;
    place-items: center;
    font-size: 1rem;
    transition: var(--transition);
    padding: 0.25rem;
    border-radius: 50%;
    color: var(--text-color);
    cursor: pointer;
  }
  .theme-btn:hover {
    background: var(--gray-200);
    color: var(--gray-900);
  }
  aside {
    justify-self: center;
  }
  main {
    opacity: 0;
  }
  .show-main {
    padding: 0 3rem 3rem 6rem;
    animation: fadeInDown;
    animation-duration: 1s;
    opacity: 1;
  }
  @media (width >= 500px) {
    .theme-btn {
      font-size: 1.5rem;
    }
    .show-main {
      padding-top: 1rem;
      width: 90%;
      max-width: 800px;
      margin: 0 auto;
    }
  }
  @media (width>=768px) {
    nav {
      width: 90%;
      max-width: 1170px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
