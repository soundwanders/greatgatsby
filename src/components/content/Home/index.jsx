import React from "react";
import { Container, Seo, StyledLink } from "components/common";
import { Subcontainer, User, Subtitle, Pages } from './style';

export const HomePage = () => {
  return (
    <Container>
        <Seo title="Home" />
        <Subcontainer>
          <User>Jared Coletta</User>
          <Subtitle>Front-end Developer</Subtitle>
          <Pages>
            <StyledLink to="/projects/">Projects</StyledLink> <br />
            <StyledLink to="/about/">About Me</StyledLink>
          </Pages>
        </Subcontainer>
    </Container>
  )
};
