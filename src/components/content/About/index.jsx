import React from "react";
import { Container, Seo, StyledLink } from "components/common"

const AboutPage = () => (
    <Container>
        <Seo title="About" />
        <h1>About</h1>
        <p>bla lorem ipsum fulcrum</p>
        <StyledLink to="/">Return Home</StyledLink>
    </Container>
);

export default AboutPage;
