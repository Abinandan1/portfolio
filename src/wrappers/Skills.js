import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  row-gap: 1.5rem;
  justify-items: center;
  .skill {
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 4rem;
    cursor: pointer;
    transition: var(--transition);
    background: var(--main-bg-color);
    box-shadow: var(--shadow-2);
  }
  .skill h3 {
    color: var(--main-bg-color);
    width: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .skill:hover {
    align-items: center;
    background: var(--primary-color);
  }
  .skill:hover h3 {
    width: 150px;
    text-align: right;
    animation: lightSpeedInLeft;
    animation-duration: 1.25s;
  }
  .skill:nth-child(1) {
    color: #e34c26;
  }
  .skill:nth-child(2) {
    color: #264de4;
  }
  .skill:nth-child(3) {
    color: #f0db4f;
  }
  .skill:nth-child(4) {
    color: #61dbfb;
  }
  .skill:nth-child(5) {
    color: #3c873a;
  }
  .skill:nth-child(6) {
    color: #06b6d4;
  }
  @media (width >=500px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 4rem;
    .skill:hover h3 {
      width: 200px;
    }
  }
  @media (width >=768px) {
    margin-top: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
