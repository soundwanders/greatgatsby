import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  color: #f8f8f8;
  background-color: #7a7ade;
  background-image: linear-gradient(
    to bottom,
    #684eb3,
    #694fb4,
    #6a4fb5,
    #6a50b6,
    #6b51b7,
    #6c52b8,
    #6d53ba,
    #6e54bb,
    #7055bc,
    #7156bd,
    #7358bf,
    #7459c0
  );
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 900px) {
    padding: 3rem 0;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  display: flex;
  text-align: center;
  padding: 1rem 0 2rem 0;
  font-size: 4.5vmax;
  font-family: 'Roboto', sans-serif;
  color: inherit;
  @media (max-width: 900px) {
    font-size: 4vmax;
    padding: 0;
  }
`;

export const Section = styled.h2`
  display: inherit;
  width: 70%;
  text-align: inherit;
  padding: 1rem 0;
  font-size: 1.8vmax;
  font-family: inherit;
  line-height: 2;
  color: inherit;
  @media (max-width: 900px) {
    width: 60%;
    font-size: 2.5vmax;
  }
`;

export const Concepts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  max-width: 60%;
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;
  font-family: 'Filson Soft', 'Roboto', sans-serif;
  color: inherit;
  overflow-x: hidden;
`;

export const DetailsA = styled.h1`
  display: inherit;
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  font-size: 5vmax;
  color: #f8f8f8;
  @media (max-width: 900px) {
    padding-bottom: 0;
  }
`;

export const DetailsB = styled.h1`
  display: inherit;
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  font-size: 5.5vmax;
  color: #f8f8f8;
  @media (max-width: 900px) {
    padding-bottom: 0;
  }
`;

export const Subtext = styled.p`
  display: inherit;
  width: 75%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.5vmax;
  font-family: inherit;
  line-height: 2;
  color: inherit;
  @media (max-width: 900px) {
    font-size: 2vmax;
    width: 80%;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
