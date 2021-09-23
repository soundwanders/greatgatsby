import React from 'react';
import { Seo } from 'components/common';
import { HomeContainer, Decor, User, Subtitle } from './style';

export const HomePage = () => {
  return (
    <HomeContainer id="home">
      <Seo title="Home" />
      <Decor />
      <User> Jared Coletta </User>
      <Subtitle> &#60; Web Developer &#47;&nbsp;&#62;</Subtitle>
    </HomeContainer>
  );
};
