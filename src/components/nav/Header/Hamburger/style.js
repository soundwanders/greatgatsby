import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 1.6rem;
  right: 1.8rem;
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
  background-color: #0d0614;
  box-shadow 250ms,
  opacity 500ms,
	transform: transform 300ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  ${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		background-color: #5d2ad3;
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
	
  ${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
        background-color: #5d2ad3;
        -webkit-transform: translateY(-6px) rotate(-45deg);
        -o-transform: translateY(-6px) rotate(-45deg);
        -moz-transform: translateY(-6px) rotate(-45deg);
        transform: translateY(-6px) rotate(-45deg);
    `}
`;
