import React from "react";
import { StyledLink } from "components/common";
import { Container } from "./style";

export const About = () => {
  return (
    <Container id="about">
      <h1>About</h1>
      <p>bla lorem ipsum fulcrum</p>
      <StyledLink to="/">Return Home</StyledLink>
    </Container>
  );
};
