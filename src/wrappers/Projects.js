import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  .fm-projects {
    display: grid;
    gap: 2rem;
  }
  .project:nth-child(odd):hover {
    transform: rotate(2deg);
  }
  .project:nth-child(even):hover {
    transform: rotate(-2deg);
  }
  .back-btn {
    display: flex;
    width: 177px;
    text-decoration: none;
    align-items: center;
    color: var(--text-color);
    gap: 0.5rem;
    transition: var(--transition);
    font-weight: 500;
  }
  .back-btn:hover {
    color: var(--primary-color);
  }
  @media (width>=768px) {
    grid-template-columns: ${(props) => props.type !== "fm" && "1fr 1fr"};
    .fm-projects {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
