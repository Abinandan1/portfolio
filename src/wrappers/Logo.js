import styled from "styled-components";

export const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @media (width >= 500px) {
    width: 4rem;
    height: 4rem;
  }
`;
