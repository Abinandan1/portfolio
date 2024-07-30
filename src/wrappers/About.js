import styled from "styled-components";

export const Wrapper = styled.section`
  .faq {
    background: var(--main-bg-color);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.75rem;
    box-shadow: var(--shadow-1);
  }
  .question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    gap: 1rem;
  }
  .question p {
    font-weight: 500;
  }
  .arrow-btn {
    border-radius: 50%;
    display: grid;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    transition: var(--transition);
    color: var(--text-color);
    cursor: pointer;
  }
  .arrow-btn:hover {
    color: var(--gray-900);
    background: var(--gray-200);
  }
  .answer {
    /* text-align: justify; */
    overflow: hidden;
    height: 0;
    font-size: 0.875rem;
    letter-spacing: 1px;
    opacity: 0;
    transition: var(--transition);
    line-height: 1.1;
    color: var(--primary-color);
  }
  .show-answer {
    height: 90px;
    opacity: 1;
  }
`;
