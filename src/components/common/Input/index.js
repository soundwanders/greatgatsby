import styled from "styled-components";

export const Input = styled.input`
  width: 70%;
  box-sizing: border-box;
  border: 1px solid #1e90ff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}
  &::placeholder {
    color: #a7a7a7;
  }
`;
