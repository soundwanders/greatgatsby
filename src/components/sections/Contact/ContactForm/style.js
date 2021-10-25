import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 26vw;
  margin: 0 auto;
  padding-bottom: 1rem;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 940px) {
    min-width: 90%;
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
  @media (max-height: 500px) and (max-width: 940px) {
    width: 55vw;
  }
`;
