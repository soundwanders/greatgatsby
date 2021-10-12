import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2rem 0;
  margin: 0;
  overflow: hidden;
`;
export const Error = styled.span`
  font-family: Ubuntu, Helvetica, sans-serif;
  color: #fff;
  letter-spacing: 0.25px;
  padding-bottom: 0.5rem;
`;

export const Center = styled.div`
  text-align: center;
`;

export const InputField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 26vw;
  margin: 0 auto;
  padding-bottom: 1rem;
  overflow: hidden;

  @media (max-width: 900px) {
    min-width: 88%;
    width: 88%;
    margin: 0 auto;
    padding-left: 0;
  }
  @media (max-height: 500px) and (max-width: 900px) {
    width: 55vw;
  }
`;
