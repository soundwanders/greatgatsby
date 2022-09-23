import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Seo } from 'components/common';
import { HomeContainer, User, Subtitle } from './style';
import config from 'data/config';

export const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <HomeContainer id="home" theme={theme}>
      <Seo title="Home" />
      <User> {config.legalName} </User>
      <Subtitle> &#60; {config.role} &#47;&nbsp;&#62;</Subtitle>
    </HomeContainer>
  );
};
