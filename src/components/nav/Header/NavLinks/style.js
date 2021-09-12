import styled from "styled-components";

// the ? : operators for the desktop style props is an Inline If-Else with a conditional operator
// Logic ==> condition ? true : false

export const Wrapper = styled.div`
    a {
    color: #000;
    text-decoration: none;
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
        margin: 0 auto;
        padding: 3rem;
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
