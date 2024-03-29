import styled, { keyframes } from 'styled-components';

export const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1.0;
  }
`;

export const HomeContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 99vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0 3rem 0;
  background-color: ${({ theme }) => (theme === 'light' ? '#f8f8f8' : '#18132a')};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='700 -10 1600 900'%3E%3Cpolygon fill='%23dde1ff' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23c4c6f3' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23dadffe' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23c5c6f3' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d7ddfd' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c6c7f2' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d4dafd' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23c7c7f2' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23d1d8fc' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23c8c8f1' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ced6fb' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c9c8f1' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-size: cover;
  overflow-x: hidden;
  @media (max-width: 940px) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='600 -20 1600 900'%3E%3Cpolygon fill='%23dde1ff' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23c4c6f3' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23dadffe' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23c5c6f3' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d7ddfd' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c6c7f2' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d4dafd' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23c7c7f2' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23d1d8fc' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23c8c8f1' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ced6fb' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c9c8f1' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  }
  @media (max-width: 600px) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='920 -80 1600 900'%3E%3Cpolygon fill='%23dde1ff' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23c4c6f3' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23dadffe' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23c5c6f3' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d7ddfd' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23c6c7f2' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d4dafd' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23c7c7f2' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23d1d8fc' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23c8c8f1' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ced6fb' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c9c8f1' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    height: 100vh;
  }
`;

export const User = styled.h1`
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0 auto;
  font-family: 'Pacifico', cursive;
  font-size: 11.25vmax;
  font-weight: 700;
  text-rendering: optimizeSpeed;
  background: #5d2ad3;
  background: -webkit-linear-gradient(to right, #333399 30%, #ff662e 100%);
  background: -moz-linear-gradient(to right, #333399 30%, #ff662e 100%);
  background: linear-gradient(to right, #333399 30%, #ff662e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 1.2s ease-out 0s 1 ${Fade};
  @media (max-width: 940px) {
    height: 28%;
  }
`;

export const Subtitle = styled.h1`
  display: inherit;
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0 0 0;
  white-space: nowrap;
  color: ${({ theme }) => (theme === 'light' ? '#333399' : '#ff8251')};
  font-family: 'Pacifico', cursive;
  font-size: 4vmax;
  text-rendering: optimizeSpeed;
  animation: 1.2s ease-out 0s 1 ${Fade};
  @media (max-width: 940px) {
    padding: 1rem 0;
    font-size: 3vmax;
  }
  @media (max-width: 600px) {
    height: 25%;
  }
`;
