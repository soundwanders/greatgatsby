import styled from 'styled-components';

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
  padding: 4.5rem 0;
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
    img {
      display: flex;
      width: 710px;
      height:400px;
      max-height: 400px;
      box-shadow: 9px 11px 3px -5px rgba(54,54,54,0.4);
      -webkit-box-shadow: 9px 11px 3px -5px rgba(54,54,54,0.4);
      -moz-box-shadow: 9px 11px 3px -5px rgba(54,54,54,0.4);
      @media (max-width: 900px) {
        width: 100%;
        height: 200px;
        max-height: 200px;
        padding: 0;
      }
    }
    @media (max-width: 900px) {
      padding: 1rem 0.25rem;
    }
  }
`;

export const ModalContainer = styled.div`
  z-index: 1;
  width: 350px;
  height: 220px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
`;

export const ViewModal = styled.div`
  z-index: 1;
  width: 350px;
  height: 220px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  padding: 8px 11px;
  background: crimson;
  color: white;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
`;

// export const AnimateModal = keyframes`
//   from {
//     transform: scale(0.5);
//   }
//   to {
//     transform: scale(1);
//   }
// `;
