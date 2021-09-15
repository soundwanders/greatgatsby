import React from "react";
import { Seo } from "components/common";
import { HomeContainer, Subcontainer, User, Subtitle } from "./style";

export const HomePage = () => {
  return (
    <HomeContainer id="home">
      <Seo title="Home" />
      <Subcontainer>
        <User>Jared Coletta</User>
        <Subtitle>Web Developer</Subtitle>
      </Subcontainer>
    </HomeContainer>
  );
};
