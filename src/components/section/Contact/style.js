import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4rem 0;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
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