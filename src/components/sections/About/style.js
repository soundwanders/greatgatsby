import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  color: #f8f8f8;
  background: #1a1a4d;
  background: linear-gradient(
    0deg,
    rgba(22, 10, 43, 1) 0%,
    rgba(21, 4, 48, 1) 100%
  );
  background-size: cover;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  display: flex;
  text-align: center;
  padding: 2rem 0;
  padding-top: 5rem;
  font-size: 4vmax;
  font-family: 'Roboto', sans-serif;
  color: inherit;
  @media (max-width: 900px) {
    padding-top: 2rem;
  }
`;

export const Section = styled.h2`
  display: inherit;
  width: 70%;
  text-align: inherit;
  padding: 1rem 0;
  font-size: 2vmax;
  font-family: inherit;
  line-height: 2;
  color: inherit;
  @media (max-width: 900px) {
    width: 60%;
    font-size: 2.25vmax;
`;

export const Concepts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  max-width: 60%;
  margin: 0 auto;
  padding: 0.5rem 0 2rem 0;
  font-family: 'Filson Soft', 'Roboto', sans-serif;
  color: inherit;
  overflow-x: hidden;
`;

export const DetailsWhite = styled.h1`
  display: inherit;
  margin: 0 auto;
  padding: 2rem 0;
  font-size: 5.5vmax;
  text-align: center;
  color: #f8f8f8;
  @media (max-width: 900px) {
    font-size: 4.5vmax;
  }
`;

export const DetailsOrange = styled.h1`
  display: inherit;
  margin: 0 auto;
  padding: 2rem 0;
  font-size: 5.5vmax;
  text-align: center;
  color: #ff662e;
  @media (max-width: 900px) {
    font-size: 4.5vmax;
  }
`;
