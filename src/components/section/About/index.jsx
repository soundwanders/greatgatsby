import React from "react";
import { Seo, StyledLink } from "components/common";
import { Container } from './style';

export const About = () => {
    return (
        <Container id="about">
            <Seo title="About" />
            <h1>About</h1>
            <p>bla lorem ipsum fulcrum</p>
            <StyledLink to="/">Return Home</StyledLink>
        </Container>
    )
};
