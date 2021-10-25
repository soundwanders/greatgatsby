import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.675rem 1.75rem;
  margin-right: 3rem;
  border: none;
  background: #f8f8f8;
  color: #3f3d56;
  text-shadow: 0.125px 0 #fff;
  font-family: 'Roboto', Ubuntu, Helvetica, sans-serif;
  letter-spacing: 1px;
  @media (max-width: 940px) {
    text-align: center;
    margin: 0 auto;
    margin-right: 0;
  }
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.99);
  }
  &:disabled {
    background: rgb(200, 200, 200);
  }
  ${({ secondary }) =>
    secondary &&
    `
    background: #3f3d56;
    color: #f9f9f9;
    border-radius: 6px;
	`}
`;
