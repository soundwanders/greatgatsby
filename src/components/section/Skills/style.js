import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 4rem 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: pink;
  z-index: -2;
`;

export const Title = styled.h1`
  font-size: 4vmax;
  font-weight: 600;
  color: #000;
  padding: 0 0 3rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 6rem 0.5rem;
  justify-content: center;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 30%;
  margin: 0 auto;
`;
