import styled from 'styled-components';

// the ? : operators for the desktop style is an Inline If-Else with a conditional operator
// Logic is ( condition ? true : false )

export const Wrapper = styled.div`
    a {
        font-family: 'Roboto', Ubuntu, Helvetica, sans-serif;
        -moz-osx-font-smoothing: auto;
        font-smoothing: auto;
        color: #2d2d86;
        font-weight: 600;
        text-decoration: none;
        z-index: 8;
        @media (max-width: 940px) {
            color: none;
        }
    ${({ desktop }) =>
      desktop
        ? `
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -ms-flexbox;
          display: flex;
            float: left;
            align-items: center;
            margin: 0 2.125rem;
            padding: 0;
            font-size: 1.8vmax;
            font-weight: 600;
            line-height: 1.2;
            white-space: pre;
            a {
                padding-right: 1rem;
            }
            img {
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
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
                -webkit-transition: 0.7s;
                -o-transition: 0.7s;
                -moz-transition: 0.7s;
                transition: 0.7s;
            }
            &:hover {
                color: #424292
            }
            @media (max-width: 940px) {
                display: none;
            }
        `
        : `
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        margin: 0 auto;
        padding: 2.5rem 0 8px 0;
        -webkit-transform: translateY(3rem);
        -moz-transform: translateY(3rem);
        -ms-transform: translateY(3rem);
        -o-transform: translateY(3rem);
        transform: translateY(3rem);
        color: #222222;
        text-align: center;
        font-size: 1.25rem;
        text-shadow: 0.5px 0px #f8f8f8;
        float: none;
        a {
            margin-bottom: 1rem;
            &:last-child {
                margin-bottom: unset;
            }
        }
    `}
`;

export const Socials = styled.div`
  display: grid;
  bottom: 0;
  padding: 0 0 0.5rem 0;
  align-items: center;
  grid-template-columns: repeat(3, 0.5fr);
  grid-template-rows: 4fr;
  @media (max-width: 940px) {
    padding: 3rem 1rem 0 1rem;
  }
  img {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 1.8vmax;
    flex-direction: column;
    align-self: center;
    flex-wrap: nowrap;
    padding: 0.1rem;
    @media (max-width: 940px) {
      width: 36px;
    }
  }

  a:nth-child(3) > img:nth-child(1) {
    width: 2.1vmax;
    @media (max-width: 940px) {
      width: 44px;
    }
  }
`;
