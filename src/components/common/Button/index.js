import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.5rem 2rem;
  margin-right: 3rem;
  border: none;
  background: #222;
  color: #f8f8f8;
  font-family: Ubuntu, monospace, mono;
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
    background: #222;
    color: #f8f8f8;
	`}
`;
