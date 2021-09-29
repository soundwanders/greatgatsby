import React from 'react';
import { Seo } from 'components/common';
import { HomeContainer, User, Subtitle, ArrowContainer, Arrow } from './style';
import config from 'data/config';

export const HomePage = () => {
  return (
    <HomeContainer id="home">
      <Seo title="Home" />
      <User> {config.legalName} </User>
      <Subtitle> &#60; {config.role} &#47;&nbsp;&#62;</Subtitle>
      <ArrowContainer>
        <Arrow
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1632876942/down_phgqsz.svg"
          alt="Click arrow to proceed to the next section"
        />
      </ArrowContainer>
    </HomeContainer>
  );
};
