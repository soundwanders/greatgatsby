import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #1e90ff;
  border-radius: 0.5rem;
  transition: 0.3s;
  padding: 0.8rem 2.5rem;
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
