import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-image: linear-gradient(
    to bottom,
    #f8f8f8,
    #f7f7f7,
    #f5f5f5,
    #f4f4f4,
    #f2f2f2
  );
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 4rem 0;
  width: 99%;
  max-width: 100%;
  overflow-x: hidden;
  background-image: inherit;
  z-index: -2;
  @media (max-width: 900px) {
    padding: 1.5rem 0;
  }
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
  display: grid;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 4rem;
  overflow: hidden;
  @media (max-width: 900px) {
    padding: 1rem 0.25rem;
  }
    img {
      display: flex;
      width: 700px;
      height: 380px;
      max-height: 380px;
      box-shadow: 9px 11px 3px -5px rgba(54,54,54,0.4);
      -webkit-box-shadow: 9px 11px 3px -5px rgba(54,54,54,0.4);
      -moz-box-shadow: 9px 11px 3px -5px rgba(54,54,54,0.4);
      
      @media (max-width: 900px) {
        width: 520px;
        max-height: 300px;
      }
      @media (max-width: 600px) {
        width: 100%;
        height: 200px;
        max-height: 200px;
        padding: 0;
      }
    }
  }
`;

export const ModalWrapper = styled.button`
  background: transparent;
  border-style: none;
  outline: none;
  padding: 0;
`;
