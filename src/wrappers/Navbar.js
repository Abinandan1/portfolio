import styled from "styled-components";

export const Wrapper = styled.aside`
  background: var(--primary-color);
  border-radius: 0.5rem;
  border: none;
  box-shadow: var(--shadow-3);
  .menu-center {
    display: flex;
  }
  .nav-icon:first-child {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
  .nav-icon:last-child {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .nav-icon {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    background: transparent;
    border: none;
    color: var(--main-bg-color);
    cursor: pointer;
    transition: var(--transition);
  }
  .nav-icon:hover {
    background: var(--white);
    color: var(--gray-700);
  }
  @media (width >= 500px) {
    .nav-icon {
      font-size: 1.5rem;
    }
  }
`;
