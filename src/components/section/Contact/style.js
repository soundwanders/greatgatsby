import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  background: lightblue;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const Details = styled.div`
  margin-left: 6rem;
  flex: 1;
  min-width: 0;
  padding-right: 2rem;
  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #212121;
  }
  p {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Photo = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  @media (max-width: 960px) {
    width: 80%;
    margin-bottom: 2rem;
  }
  img {
    flex: 1;
    flex-direction: column;
    margin-right: 5rem;
    margin-top: 4rem;
    width: 90%;
  }
`;
