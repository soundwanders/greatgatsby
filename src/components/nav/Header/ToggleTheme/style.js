import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  
  img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    width: 1.8vmax;
    flex-direction: column;
    align-self: center;
    flex-wrap: nowrap;
    padding: 0 0.5rem;
    margin-top: 0.9rem;
    @media (max-width: 940px) {
      width: 36px;
    }
  }
`;
