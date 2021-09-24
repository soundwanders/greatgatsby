import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  width: 95%;
`;

export const Overlay = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(250, 250, 250, 0.1);
  transition: 0.4s;
  ${({ sidebar }) =>
    sidebar &&
    `
		display: block;
		z-index: 4;	
	`}
`;
