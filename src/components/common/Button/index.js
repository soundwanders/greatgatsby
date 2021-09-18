import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.675rem 1.75rem;
  margin-right: 3rem;
  border: none;
  background: #3f3d56;
  color: #f8f8f8;
  font-family: Ubuntu, monospace, mono;
  letter-spacing: 1px;
  @media (max-width: 960px) {
    text-align: center;
    margin: 0 auto;
    margin-right: 0;
  }
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.01);
  }
  &:disabled {
    background: #f8f8f8;
  }
  ${({ secondary }) =>
    secondary &&
    `
    background: #3f3d56;
    color: #f8f8f8;
	`}
`;
