import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  color: #f8f8f8;
  background-color: #5d46a2;
  background-image: linear-gradient(
    to bottom,
    #5d46a2,
    #5f49a1,
    #5f4a9e,
    #5d499a,
    #5e4a99,
    #5d4a96,
    #5d4b92
  );
  background-size: cover;
  overflow: hidden;
  z-index: -4;
  @media (max-width: 940px) {
    padding: 3rem 0;
  }
`;

export const Title = styled.h1`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  text-align: center;
  padding: 1rem 0 2rem 0;
  font-family: 'Filson Pro', 'Filson Soft', 'Roboto', sans-serif;
  font-size: 4.5vmax;
  color: inherit;
  @media (max-width: 940px) {
    font-size: 4vmax;
    padding: 0;
  }
`;

export const Section = styled.h2`
  display: inherit;
  width: 60%;
  padding: 1rem 0 0.5rem 0;
  font-family: 'Filson Soft', 'Roboto', sans-serif;
  font-size: 1.75vmax;
  text-align: center;
  line-height: 2;
  color: inherit;
  @media (max-width: 940px) {
    font-size: 2.3vmax;
    padding: 0.5rem 0;
  }
`;

export const Concepts = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
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
  @media (max-width: 940px) {
    width: 80%;
    max-width: 80%;
  }
`;

export const DetailsA = styled.h1`
  display: inherit;
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  font-size: 5vmax;
  text-rendering: optimizeLegibility;
  color: #f8f8f8;
  @media (max-width: 940px) {
    padding-bottom: 0;
  }
  &:first-child {
    padding: 0;
  }
`;

export const DetailsB = styled.h1`
  display: inherit;
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  font-size: 5vmax;
  text-rendering: optimizeLegibility;
  color: #f8f8f8;
  @media (max-width: 940px) {
    padding-bottom: 0;
  }
`;

export const Subtext = styled.p`
  display: inherit;
  width: 70%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.5vmax;
  font-family: inherit;
  text-rendering: optimizeLegibility;
  line-height: 2;
  color: inherit;
  &:nth-child(3) {
    width: 50%;
  }
  &:nth-child(12) {
    width: 80%;
    padding-bottom: 0;
  }
  @media (max-width: 940px) {
    font-size: 2.2vmax;
    width: 82%;
    &:nth-child(3) {
      width: 82%;
  }
`;
export const Woods = styled.img`
  position: relative;
  margin: 0 auto;
  padding: 0 0 0.5rem 0;
  width: 17%;
  opacity: 0.95;
  z-index: 0;
  @media (max-width: 900px) {
    width: 45%;
    padding: 0.5rem 0 1rem 0;
  }
`;

export const Pathway = styled.img`
  margin: 0 auto;
  padding: 1rem 0;
  width: 13%;
  @media (max-width: 900px) {
    width: 35%;
    padding: 0.5rem 0;
  }
`;

export const TrailMarker = styled.img`
  margin: 0 auto;
  padding: 1rem 0 2rem 0;
  width: 17%;
  @media (max-width: 900px) {
    width: 45%;
    padding: 0.5rem 0 1rem 0;
  }
`;
