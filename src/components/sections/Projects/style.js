import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    #f8f8f8,
    #f5f5f5,
    #f2f2f2,
    #efefef,
    #ececec
  );
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
  width: 99%;
  max-width: 100%;
  overflow-x: hidden;
  background-image: inherit;
  z-index: -2;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const Card = styled.div`
  display: inherit;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  background: transparent;
  @media (max-width: 960px) {
    width: 90%;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  overflow: hidden;
  object-fit: contain;

    img {
      float: left;
      width: auto;
      height: 420px;
      object-fit: contain;
      @media (max-width: 900px) {
        width: 92%;
        height: auto;
      }
    }
  }
`;
