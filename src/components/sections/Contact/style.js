import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 0;
  padding-bottom: 3rem;
  background-color: #7a7ade;
  background-image: linear-gradient(
    to bottom,
    #684eb3,
    #694fb4,
    #6a4fb5,
    #6a50b6,
    #6b51b7,
    #6c52b8,
    #6d53ba,
    #6e54bb,
    #7055bc,
    #7156bd,
    #7358bf,
    #7459c0
  );
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 940px) {
    padding: 0 0 1rem 0;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 4rem 0 2rem 0;
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
  @media (max-width: 940px) {
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
  font-size: 3vmax;
  color: #f8f8f8;
  padding: 1rem 0;
  margin: 0 auto;
  @media (max-width: 940px) {
    font-size: 1.75rem;
  }
  @media (max-height: 600px) and (max-width: 940px) {
    font-size: 2.25rem;
  }
`;

export const Bird = styled.div`
  display: inline-block;
  width: 57%;
  margin: 0 auto;
  padding-top: 12%;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-left: 4rem;
  }
  img {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 80%;
  }
`;
