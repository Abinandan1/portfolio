import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 3rem;
  h2 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    border-left: 10px solid var(--primary-color);
    border-right: 10px solid var(--primary-color);
    border-radius: 0.75rem;
    font-size: 1.5rem;
  }
  .form {
    margin: 0 auto;
    background: var(--text-color);
    border-radius: 0.5rem;
    padding: 1rem;
    position: relative;
    max-width: 400px;
    box-shadow: var(--shadow-3);
  }
  .form-row {
    margin-bottom: 1rem;
  }
  .form-input {
    width: 100%;
    background: var(--gray-300);
    height: 3rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
  }
  .form-textarea {
    width: 100%;
    background: var(--gray-300);
    resize: none;
    height: 5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  .btn {
    width: 100%;
    background: var(--gray-800);
    border: none;
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--main-bg-color);
    text-transform: uppercase;
    transition: var(--transition);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
  }
  .btn:hover {
    background: var(--primary-color);
    color: var(--text-color);
  }
  @media (width>=500px) {
    h2 {
      font-size: 1.75rem;
    }
  }
`;
