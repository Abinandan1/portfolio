import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  background: var(--main-bg-color);
  box-shadow: var(--shadow-2);
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  transition: var(--transition);
  position: relative;
  max-width: 300px;
  width: 100%;
  .footer {
    display: grid;
    gap: 1rem;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-btn {
    display: grid;
    font-size: 1.1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    color: var(--text-color);
  }
  .info-btn:hover {
    color: var(--primary-color);
  }
  p {
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
  .fm {
    border-radius: 50%;
    color: var(--white);
    background: var(--primary-color);
    padding: 0.25rem;
    font-size: 1.25rem;
  }
  .img-container {
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
  }
  img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .btn {
    text-decoration: none;
    color: var(--primary-color);
    text-transform: uppercase;
    gap: 0.5rem;
    transition: var(--transition);
    border-radius: 0.5rem;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: var(--about-card-bg-color);
    font-size: 0.875rem;
  }
  .btn:hover {
    background: var(--primary-color);
    color: var(--main-bg-color);
  }
  .btn:hover .fm {
    color: var(--primary-color);
    background: var(--main-bg-color);
  }
  .description {
    animation: flipInX;
    animation-duration: 1s;
    display: grid;
    gap: 0.5rem;
  }
  .back-btn {
    width: 4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: "Red Hat Text";
  }
  .description p {
    text-align: justify;
    color: var(--text-color);
    text-transform: none;
    font-weight: 400;
  }
`;
