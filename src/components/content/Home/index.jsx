import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Seo, StyledLink } from "components/common";
import { Subcontainer, User, Subtitle, Pages } from './style';
import { Container } from 'components/common';

export const HomePage = () => {
  return (
    <Container>
      <Seo title="Home" />
      <Subcontainer>
        <User>Jared Coletta</User>
        <Subtitle>Front-end Developer</Subtitle>
        <StaticImage
          src=""
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="gatsby"
          style={{ marginBottom: `1.45rem` }}
        />
        <Pages>
          <StyledLink to="/projects/">Projects</StyledLink> <br />
          <StyledLink to="/about/">About Me</StyledLink>
        </Pages>
      </Subcontainer>
    </Container>
  )
};
