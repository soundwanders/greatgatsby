import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/common/seo";
import { StyledLink } from "../components/common/styledLinks";
import { Container } from "../common";

const AboutPage = () => (
  <Layout>
    <Container>
        <Seo title="About" />
        <h1>About</h1>
        <p>bla lorem ipsum fulcrum</p>

        <StyledLink to="/">Return Home</StyledLink>
    </Container>
  </Layout>
);

export default AboutPage
