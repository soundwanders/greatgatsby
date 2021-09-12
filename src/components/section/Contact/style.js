import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  background: lightblue;
  align-items: flex-start;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-size: 3.75rem;
  color: dodgerblue;
  padding: 0.5rem 0;
  margin: 0 auto;
  @media (max-width: 968px) {
    font-size: 1.75rem;
  }

`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 960px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    order: 1;
    margin: 0 auto;
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
  width: 100%;
  margin: 0;
  padding-top: 8rem;
  padding-right: 1rem;
  overflow: hidden;
  @media (max-width: 960px) {
    justify-content: flex-end;
    width: 70%;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-right: 0;
    padding-left: 3.5rem;
  }
  img {
    flex: 1;
    flex-direction: column;
    width: 60%;
  }
`;
