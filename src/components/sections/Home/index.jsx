import React, { useRef } from 'react';
import { Seo } from 'components/common';
import { HomeContainer, User, Subtitle } from './style';
import config from 'data/config';

export const HomePage = () => {
  return (
    <HomeContainer id="home">
      <Seo title="Home" />
      <User> {config.legalName} </User>
      <Subtitle> &#60; {config.role} &#47;&nbsp;&#62;</Subtitle>
    </HomeContainer>
  );
};
