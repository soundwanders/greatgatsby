import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: #dfdbe5;
  z-index: -2;
`;

export const Wrapper = styled.div`
  padding: 5rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  padding: 3rem;
  background: #f2f2f2;
  height: 100%;
`;

export const Item = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.11);
  padding
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;