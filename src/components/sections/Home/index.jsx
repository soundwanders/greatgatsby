import React from 'react';
import { Seo } from 'components/common';
import { Wrapper, HomeContainer, User, Subtitle } from './style';

export const HomePage = () => {
  return (
    <Wrapper>
      <HomeContainer id="home">
        <Seo title="Home" />
        <User> Jared Coletta </User>
        <Subtitle> &#60; Web Developer &#47;&nbsp;&#62;</Subtitle>
      </HomeContainer>
    </Wrapper>
  );
};
