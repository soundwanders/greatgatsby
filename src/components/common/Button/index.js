import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.675rem 1.75rem;
  margin-right: 3rem;
  background: #f8f8f8;
  color: #3f3d56;
  text-shadow: 0.1px 0 #fff;
  font-family: 'Roboto', Ubuntu, Helvetica, sans-serif;
  letter-spacing: 1px;
  border: none;
  border-bottom: 1px solid #333;
  border-radius: 5px;
  @media (max-width: 940px) {
    text-align: center;
    margin: 0 auto;
    margin-right: 0;
  }
  user-select: none;
  cursor: pointer;
  &:focus {
    outline: none;
    border-bottom: 1px solid #333;
  }
  &:active {
    transform: scale(0.99);
    border-bottom: 1px solid #333;
  }
  &:disabled {
    background: rgb(200, 200, 200);
  }
  ${({ secondary }) =>
    secondary &&
    `
    background: #3f3d56;
    color: #f8f8f8;
    border-radius: 6px;
	`}
`;
