import React from "react";
import { Seo } from "components/common";
import { HomeContainer, NameContainer, User, Subtitle } from "./style";

export const HomePage = () => {
  return (
    <HomeContainer id="home">
      <Seo title="Home" />
      <NameContainer>
        <User>Jared Coletta</User>
        <Subtitle>Web Developer</Subtitle>
      </NameContainer>
    </HomeContainer>
  );
};
