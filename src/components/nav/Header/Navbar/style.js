import styled from 'styled-components';

export const SpansMaxWidth = styled.div`
  display: block;
  position: fixed;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 100%;
  height: 5rem;
  padding: 4px 0;
  overflow: hidden;
  background: #f8f8f8;
  @media (max-width: 940px) {
    background: transparent;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  max-width: 86.25%;
  padding: 0.25rem 0;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  z-index: 4;
`;

export const Brand = styled.div`
  max-width: 2.2vmax;
  padding: 1rem;
  @media (max-width: 940px) {
    max-width: 2rem;
  }
  img.svg {
    -webkit-user-select: none;
    user-select: none;
  }
  &:active {
    transform: rotateX(10deg);
  }
`;
