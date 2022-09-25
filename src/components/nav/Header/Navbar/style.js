import styled from 'styled-components';

export const SpansMaxWidth = styled.div`
  display: block;
  position: fixed;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
  min-height: 4vmax;
  padding: 0 0 1rem 0;
  overflow: hidden;
  background-color: ${({ theme }) => (theme === 'light' ? '#f8f8f8' : '#221b3c ')};
  @media (max-width: 940px) {
    background: transparent;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 85%;
  padding: 0;
  background: transparent;
  z-index: 4;
`;

export const Brand = styled.div`
  max-width: 2.5%;
  padding: 1rem;
  @media (max-width: 940px) {
    max-width: 5%;
  }
  @media (max-width: 600px) {
    max-width: 10.5%;
  }
  img.svg {
    -webkit-user-select: none;
    user-select: none;
  }
  &:active {
    transform: rotateX(10deg);
  }
`;
