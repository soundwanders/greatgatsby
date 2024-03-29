import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 0;
  height: 100%;
  top: 0px;
  right: -275px;
  opacity: 0;
  overflow: auto;
  background-color: ${({ theme }) => (theme === 'light' ? '#ecece7' : '#221b3c ')};
  -webkit-transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.9);
  -o-transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.9);
  -moz-transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.9);
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.9);
  z-index: 4;

  ${({ active }) =>
    active &&
    `
        width: 20%;
        right: 0px;
        opacity: 1;
        @media (max-width: 940px) {
            width: 40%;
        }
        @media (max-width: 600px) {
            width: 50%;
        }
    `}
`;
