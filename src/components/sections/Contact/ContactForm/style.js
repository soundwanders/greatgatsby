import styled from 'styled-components';

export const FormContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 26vmax;
  width: 26vmax;
  margin: 0 auto;
  padding-bottom: 1rem;
  overflow: hidden;
  &:nth-child(1) {
    min-height: 2vmax;
  }
  &:nth-child(2) {
    min-height: 2vmax;
  }
  &:nth-child(3) {
    min-height: 10vmax;
  }

  @media (max-width: 940px) {
    min-width: 90%;
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
    &:nth-child(3) {
      min-height: 0;
    }
  }
  @media (max-height: 500px) and (max-width: 940px) {
    min-width: 55vw;
    width: 55vw;
  }
`;
