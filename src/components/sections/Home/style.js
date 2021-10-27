import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 99vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0 3rem 0;
  background-color: #f8f8f8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='700 0 1600 900'%3E%3Cpolygon fill='%23c2c1dc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ced0dc' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23cdcce2' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23cdcfdc' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8d7e7' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23cbcddc' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23e2e2ed' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23caccdc' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23ededf2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23c9cadc' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23f8f8f8' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c8c9dc' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  overflow-x: hidden;

  @media (max-width: 940px) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='600 20 1600 900'%3E%3Cpolygon fill='%23c2c1dc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ced0dc' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23cdcce2' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23cdcfdc' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8d7e7' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23cbcddc' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23e2e2ed' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23caccdc' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23ededf2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23c9cadc' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23f8f8f8' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c8c9dc' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  }
  @media (max-width: 600px) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='920 -70 1600 900'%3E%3Cpolygon fill='%23c2c1dc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23ced0dc' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23cdcce2' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23cdcfdc' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8d7e7' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23cbcddc' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23e2e2ed' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23caccdc' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23ededf2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23c9cadc' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23f8f8f8' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23c8c9dc' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    height: 93vh;
  }
`;

export const User = styled.h1`
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 11vmax;
  font-weight: 600;
  background: #5d2ad3;
  background: -webkit-linear-gradient(to right, #333399 30%, #ff662e 100%);
  background: -moz-linear-gradient(to right, #333399 30%, #ff662e 100%);
  background: linear-gradient(to right, #333399 30%, #ff662e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 940px) {
    height: 30%;
  }
`;

export const Subtitle = styled.h1`
  display: inherit;
  max-width: 100%;
  height: 25%;
  margin: 0 auto;
  padding: 2rem 0 0 0;
  white-space: nowrap;
  font-display: swap;
  color: #333399;
  letter-spacing: -2px;
  font-size: 2.2vmax;
  font-family: 'LuloCleanW01-OneBold', 'Roboto', 'Ubuntu', sans-serif;
  text-rendering: optimizeSpeed;
  @media (max-width: 600px) {
    font-size: 2vmax;
    padding: 0 0 2rem 0;
  }
`;
