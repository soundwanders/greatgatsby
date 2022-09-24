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
    width: 1.5vmax;
    flex-direction: column;
    align-self: center;
    flex-wrap: nowrap;
    margin-top: 1.2rem;
    padding: ${({ theme }) => (theme === 'light' ? '0.1rem 0.5rem' : '0.5rem 0.5rem')};
    border-radius: ${({ theme }) => (theme === 'light' ? '0' : '120px')};

    @media (max-width: 940px) {
      width: 26px;
      margin-top: 0.8rem;
    }
  }
`;
