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
  background-color: #f8f8f8;
  z-index: -2;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const Card = styled.div`
  padding: 0.25rem;
  background: #f8f8f8;
  height: 100%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.11);
`;

export const Item = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  img {
    margin: 0;
    padding: 2rem 0;
    width: 90%;
    min-height: 180px;
  }
`;
