import styled from "styled-components";

export const Wrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 4px solid var(--text-color);
  border-top-color: var(--gray-200);
  animation: spinner 1s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
