import React from "react";
import { Seo, StyledLink } from "components/common";
import { HomeContainer, Subcontainer, User, Subtitle, Pages } from "./style";

export const HomePage = () => {
  return (
    <HomeContainer id="home">
      <Seo title="Home" />
      <Subcontainer>
        <User>Jared Coletta</User>
        <Subtitle>Web Developer</Subtitle>
        <Pages>
          <StyledLink to="/projects/">Projects</StyledLink> <br />
          <StyledLink to="/about/">About Me</StyledLink>
        </Pages>
      </Subcontainer>
    </HomeContainer>
  );
};
