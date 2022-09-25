import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    font-family: 'Filson Pro', 'Roboto', Helvetica, sans-serif;
    -moz-osx-font-smoothing: auto;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#2d2d86' : '#f8f8f8')};
    z-index: 8;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === 'light' ? '#2d2d86' : '#f8f8f8')};
    }
  }
  
  ${({ desktop }) =>
    desktop
      ? `
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: flex;
        float: left;
        align-items: center;
        margin: 0 2rem;
        padding: 0 0.5rem;
        font-size: 1.5vmax;
        font-weight: 600;
        line-height: 1;
        white-space: pre;
        a {
          padding-right: 2rem;
        }
        img {
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: flex;
            flex-basis: 100%;
            flex-direction: column;
            align-self: center;
            flex-wrap: nowrap;
            padding: 0.25rem 0 0 0;
        }
        img:hover { 
          -webkit-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
          -webkit-transition: 0.9s;
          -o-transition: 0.9s;
          -moz-transition: 0.9s;
          transition: 0.9s;
        }
        &:hover {
          color: #424292;
        }
        &:focus {
          color: #774900;
        }
        @media (max-width: 940px) {
          display: none;
        }
      `
      : `
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      padding: 2.5rem 0 8px 0;
      -webkit-transform: translateY(3rem);
      -moz-transform: translateY(3rem);
      -ms-transform: translateY(3rem);
      -o-transform: translateY(3rem);
      transform: translateY(3rem);
      color: #26123A;
      text-align: center;
      font-size: 1.3rem;
      text-shadow: 0.5px 0px #f8f8f8;
      float: none;
      a {
        margin-bottom: 0.75rem;
      }
      
      div:nth-child(6) > a:nth-child(1) {
        margin-bottom: 0;
      }
  `}
`;
export const Socials = styled.div`
  display: grid;
  bottom: 0;
  align-items: baseline;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 4fr;
  margin: 0 0 0 1.5rem !important;

  @media (max-width: 940px) {
    padding: 2rem 1.5rem;
    margin-left: 0 !important;
    justify-content: center;
  }

  img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    width: 1.6vmax;
    flex-direction: column;
    align-self: center;
    flex-wrap: nowrap;
    margin-top: 1.2rem;
    padding: ${({ theme }) => (theme === 'light' ? '0.1rem 0.5rem' : '0.5rem 0.5rem')};
    border-radius: ${({ theme }) => (theme === 'light' ? '0' : '120px')};
    background:  ${({ theme }) => (theme === 'light' ? 'transparent' : '#eeeeee')};
    
    @media (max-width: 940px) {
      width: 20px;
      margin: 0.3rem auto;
      justify-items: start;
    }
  }
`;
