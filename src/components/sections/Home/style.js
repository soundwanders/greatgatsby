import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
  max-width: 100%;
  height: 99vh;
  overflow-x: hidden;
  background: #f8f8f8;
  background-image: linear-gradient(
    to bottom,
    #f8f8f8,
    #f5f5f5,
    #f2f2f2,
    #efefef,
    #ececec
  );
  z-index: -4;
`;

export const User = styled.h1`
  display: inherit;
  text-align: center;
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-size: 10vmax;
  background: #2143ce;
  background: -webkit-linear-gradient(to right, #2143ce 30%, #ff662e 100%);
  background: -moz-linear-gradient(to right, #2143ce 30%, #ff662e 100%);
  background: linear-gradient(to right, #2143ce 30%, #ff662e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 600px) {
    transform: translateY(-3rem);
  }
`;

export const Subtitle = styled.h1`
  display: inherit;
  max-width: 100%;
  justify-content: center;
  margin: 0 auto;
  white-space: nowrap;
  font-size: 3vmax;
  color: #2143ce;
  padding-top: 1.5rem;
  @media (max-width: 600px) {
    transform: translateY(-3rem);
  }
`;
