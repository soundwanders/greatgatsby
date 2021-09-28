import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  Content,
  DetailsTop,
  DetailsMid,
  DetailsBottom,
} from './style';

export const About = () => {
  return (
    <Container id="about">
      <Title>Hey there! 👋 </Title>
      <Subtitle>
        A large part of why I fell in love with web development is that it offers me an artistic, creative outlet that also challenges me to constantly grow & improve.
        <br/><br/> 
There is never a shortage of problems to solve, ideas to explore and knowledge to gain.
        <br/><br/> 
I derive great satisfaction from overcoming adversity, and I am not afraid to fail (maybe even fall flat on my face, sometimes) because I believe that through friction comes growth.
        <br/><br/> 
While it feels like my journey as a developer is only beginning, I have found myself gravitating towards a few core concepts whenever I work on a project...
      </Subtitle>
      <Content>
        <DetailsTop>Clean Code</DetailsTop>
        <DetailsMid>Creative Solutions </DetailsMid>
        <DetailsBottom>Responsive Design</DetailsBottom>
      </Content>
    </Container>
  );
};
