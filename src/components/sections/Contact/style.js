import styled from 'styled-components';

export const Wrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 0;
  padding-bottom: 3rem;
  background-color: #5d46a2;
  background-image: linear-gradient(
    to bottom,
    #5d46a2,
    #5f49a1,
    #5f4a9e,
    #5d499a,
    #5e4a99,
    #5d4a96,
    #5d4b92
  );
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

export const Details = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
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
  font-family: 'Filson Soft', 'Roboto', sans-serif;
  font-size: 2.8vmax;
  font-weight: 800;
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
  width: 56%;
  margin: 0 auto;
  padding-top: 16%;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 0.5rem;
    padding-top: 1rem;
    padding-left: 4rem;
  }
  img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 80%;
  }
`;

export const MailTime = styled.div`
  display: inline-block;
  position: absolute;
  width: 56%;
  right: 0;
  opacity: 0.9;
  pointer-events: none;
  img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 60%;
    transform: translateY(1rem);
  }
  @media (max-width: 600px) {
    position: relative;
    width: 90%;
    left: 23%;
    margin-bottom: 1rem;
    margin-top: -1rem;
  }
  @media (max-width: 940px) and (max-height: 440px) and (orientation: landscape) {
    display: none;
  }
`;
