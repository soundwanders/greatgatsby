import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: inherit;
  overflow: hidden;
  max-width: 95%;
  z-index: 4;
`;

export const Brand = styled.div`
  max-width: 3rem;
  padding: 1rem;
  @media (max-width: 960px) {
    max-width: 2.5rem;
  }
    img.svg {
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: -moz-none;
      -o-user-select: none;
      user-select: none;
    }
`;