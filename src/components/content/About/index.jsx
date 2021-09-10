import React from "react";
import { Container, Seo, StyledLink } from "components/common"

export const AboutPage = () => {
    return (
        <Container>
            <Seo title="About" />
            <h1>About</h1>
            <p>bla lorem ipsum fulcrum</p>
            <StyledLink to="/">Return Home</StyledLink>
        </Container>
    )
};
