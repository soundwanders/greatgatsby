import styled from 'styled-components';

// the ? : operators for the desktop style props is an Inline If-Else with a conditional operator
// Logic ==> condition ? true : false

export const Wrapper = styled.div`
    a {
        font-family: 'Roboto', Ubuntu, Helvetica, sans-serif;
        color: #302060;
        text-shadow: 0.2px 0px #f4f4f4;
        font-weight: 600;
        text-decoration: none;
        z-index: 8;
        @media (max-width: 960px) {
            color: none;
        }
    ${({ desktop }) =>
      desktop
        ? `
            display: flex;
            float: left;
            align-items: center;
            margin: 0 2.5rem;
            padding: 0;
            font-size: 2rem;
            font-weight: 600;
            white-space: pre;
            a {
                padding-right: 1rem;
                &:last-child {
                    margin-right: unset;
                }
            }
            img {
                display: flex;
                flex-basis: 100%;
                flex-direction: column;
                align-self: center;
                flex-wrap: nowrap;
            }
            img {
                padding: 0.25rem 0 0 0;
            }
            @media (max-width: 960px) {
                display: none;
            }
        `
        : `
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        margin: 0 auto;
        padding: 2.5rem 0 8px 0;
        transform: translateY(3rem);
        text-align: center;
        font-size: 1.25rem;
        text-shadow: 0.5px 0px #f8f8f8;
        color: #202060;
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
  align-items: center;
  grid-template-columns: repeat(2, 0.5fr);
  grid-template-rows: 4fr;
  @media (max-width: 900px) {
    padding: 4rem 1rem 0 1rem;
  }
  img {
    display: flex;
    flex-direction: column;
    align-self: center;
    flex-wrap: nowrap;
    padding: 0.1rem;
  }
`;
