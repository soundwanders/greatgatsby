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
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: center;
  h4 {
    font-weight: normal;
  }
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 30vw;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    width: 90%;
    padding-left: 0;
  }

  @media (max-height: 500px) and (max-width: 890px) {
    width: 55vw;
  }
`;
