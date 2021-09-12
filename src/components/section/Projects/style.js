import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 100%;
  height: 90vh;
  overflow-x: hidden;
  background-color: #dfdbe5;
  z-index: -2;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
