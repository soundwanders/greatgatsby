import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #1e90ff;
  border-radius: 0.5rem;
  transition: 0.3s;
  padding: 0.8rem 1rem;
  margin: 0;
  margin-bottom: 1.5rem;
  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}
  &::placeholder {
    color: #a7a7a7;
  }
`;

export const Button = styled.button`
  padding: 0.675rem 1.75rem;
  margin-right: 3rem;
  background: #f8f8f8;
  color: #3f3d56;
  text-shadow: 0.08px 0 #fff;
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
