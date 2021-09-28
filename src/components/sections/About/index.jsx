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
      <Subtitle>Let's Bring Your Big Idea to Life.</Subtitle>
      <Content>
        <DetailsTop>Creative Solutions</DetailsTop>
        <DetailsMid>Passion & Creativity</DetailsMid>
        <DetailsBottom>Open Communications</DetailsBottom>
      </Content>
    </Container>
  );
};
