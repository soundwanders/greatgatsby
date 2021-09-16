import styled from "styled-components";

// the ? : operators for the desktop style props is an Inline If-Else with a conditional operator
// Logic ==> condition ? true : false

export const Wrapper = styled.div`
    a {
    color: #222;
    text-decoration: none;
    z-index: 10;
    @media (max-width: 960px) {
        color: none;
    }
    ${({ desktop }) =>
      desktop
        ? `
            display: flex;
            float: left;
            margin: 0 2rem;
            padding: 0.75rem 0;
            font-size: 2rem;
            font-weight: 600;
            align-items: center;
            white-space: pre;
            a {
                padding-right: 1rem;
                &:last-child {
                    margin-right: unset;
                }
            }
            @media (max-width: 960px) {
                display: none;
            }
        `
        : `
        display: flex;
        margin: 2.25rem auto;
        padding: 0 4.5rem;
        font-size: 1.25rem;
        font-family: monospace, Lucida-Sans, Lucida-Grande, sans-serif;
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
