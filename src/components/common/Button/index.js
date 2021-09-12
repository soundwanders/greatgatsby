import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 2rem;
  border: none;
  background: #0074d9;
  color: #fff;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;