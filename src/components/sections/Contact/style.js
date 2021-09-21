import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 3rem 0;
  background-image: linear-gradient(
    to bottom,
    #46b2f5,
    #53b8f7,
    #5fbef8,
    #6bc3fa,
    #76c9fb
  );
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
`;

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
`;

export const Title = styled.h2`
  display: inherit;
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-size: 3.9rem;
  color: #f8f8f8;
  padding: 1rem 0;
  margin: 0 auto;
  @media (max-width: 900px) {
    font-size: 1.75rem;
  }
  @media (max-height: 600px) and (max-width: 900px) {
    font-size: 2.25rem;
  }
`;

export const Photo = styled.div`
  display: inline-block;
  flex: 1;
  width: 50vh;
  margin: 0;
  padding-top: 4rem;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-left: 4rem;
  }
  img {
    flex: 1;
    flex-direction: column;
    width: 80%;
  }
`;
