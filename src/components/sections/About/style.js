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
    #7676dc,
    #7a7ade,
    #7f7ee0,
    #8383e1,
    #8787e3
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
  font-size: 2.1vmax;
  font-family: inherit;
  line-height: 2;
  color: inherit;
  @media (max-width: 900px) {
    width: 60%;
    font-size: 2.75vmax;
`;

export const Concepts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  max-width: 60%;
  margin: 0 auto;
  padding: 0;
  font-family: 'Filson Soft', 'Roboto', sans-serif;
  color: inherit;
  overflow-x: hidden;
`;

export const DetailsA = styled.h1`
  display: inherit;
  padding: 2rem 0;
  font-size: 5vmax;
  color: #f8f8f8;
  @media (max-width: 900px) {
  }
`;

export const DetailsB = styled.h1`
  display: inherit;
  padding: 2rem 0;
  padding-bottom: 0.5rem;
  font-size: 5.5vmax;
  color: #f8f8f8;
  @media (max-width: 900px) {
    padding-bottom: 0;
  }
`;
