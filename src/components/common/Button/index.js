import styled from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 2rem;
  margin-right: 8rem;
  border: none;
  background: #0074d9;
  color: #fff;
  @media (max-width: 960px) {
    text-align: center;
    margin: 0 auto;
    margin-right: 0;
  }
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
