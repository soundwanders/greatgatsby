import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 1.6rem;
  right: 1.8rem;
  padding: 3px;
  cursor: pointer;
  -webkit-transform: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  -o-transform: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  -moz-transform: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  transform: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  z-index: 5;

  @media (max-width: 940px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
      right: 18%;
      top: 1.3rem;

      @media (max-width: 940px) {
          right: 35%;
          position: fixed;
      }
      @media (max-width: 600px) {
          right: 38%;
      }
    `}
`;

export const Bar = styled.div`
  width: 1.3rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms;
  background: ${({ theme }) => (theme === 'light' ? '#0d0614' : '#f9f9f9')};

  ${({ top, sidebar, theme }) =>
    top &&
    sidebar &&
    `
      background-color: ${(theme === 'light' ? '#0d0614' : '#f9f9f9')};
      -webkit-transform: translateY(8px) rotate(-135deg);
      -o-transform: translateY(8px) rotate(-135deg);
      -moz-transform: translateY(8px) rotate(-135deg);
      transform: translateY(8px) rotate(-135deg);
  `}

  ${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
      transform: scale(0);
   `}

  ${({ bottom, sidebar, theme }) =>
    bottom &&
    sidebar &&
   `
      background-color: ${(theme === 'light' ? '#0d0614' : '#f9f9f9')};
      -webkit-transform: translateY(-6px) rotate(-45deg);
      -o-transform: translateY(-6px) rotate(-45deg);
      -moz-transform: translateY(-6px) rotate(-45deg);
      transform: translateY(-6px) rotate(-45deg);
   `}
`;
