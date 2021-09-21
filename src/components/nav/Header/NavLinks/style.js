import styled from 'styled-components';

// the ? : operators for the desktop style props is an Inline If-Else with a conditional operator
// Logic ==> condition ? true : false

export const Wrapper = styled.div`
    a {
    font-family: 'Roboto', Ubuntu, Helvetica, sans-serif;
    color: #222;
    text-shadow: 1px 0px #f4f4f4;
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
            margin: 0 2.25rem;
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
            a:hover {
                transform:scale(1.011);
            }
            @media (max-width: 960px) {
                display: none;
            }
        `
        : `
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding: 1rem 0;
        transform: translateY(3rem);
        text-align: center;
        font-size: 1.25rem;
        text-shadow: 0.5px 0.5px #444;
        color: #f9f9f9;
        float: none;
        flex-direction: column;
        a {
            margin-bottom: 1rem;
            &:last-child {
                margin-bottom: unset;
            }
        }
    `}
`;
