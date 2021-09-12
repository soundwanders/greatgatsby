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
            align-items: center;
            a {
                margin-right: 1rem;
                &:last-child {
                    margin-right: unset;
                }
            }
            @media (max-width: 960px) {
                display: none;
            }
        `
        : `
        padding: 3rem;
        display: flex;
        flex-direction: column;
        a {
                margin-bottom: 1rem;
                &:last-child {
                        margin-bottom: unset;
                }
        }
    `}
`;
