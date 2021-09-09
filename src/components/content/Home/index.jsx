import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Layout, Seo, StyledLink } from "components/common";
import { Container, Subcontainer, User, Subtitle, Pages } from './style';

const HomePage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Subcontainer>
        <User>Jared Coletta</User>
        <Subtitle>Front-end Developer</Subtitle>
        <StaticImage
          src=""
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="gatsby latsby"
          style={{ marginBottom: `1.45rem` }}
        />
        <Pages>
          <StyledLink to="/projects/">Projects</StyledLink> <br />
          <StyledLink to="/about/">About Me</StyledLink>
        </Pages>
      </Subcontainer>
    </Container>
  </Layout>
);

export default HomePage;
