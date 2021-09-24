import React from 'react';
import {
  Container,
  Title,
  Content,
  DetailsTop,
  DetailsMid,
  DetailsBottom,
} from './style';

export const About = () => {
  return (
    <Container id="about">
      <Title>Hey!</Title>
      <Title>I Build Things With...</Title>
      <Content>
        <DetailsTop>Passion</DetailsTop>

        <DetailsMid>Integrity</DetailsMid>

        <DetailsBottom>Creativity</DetailsBottom>
      </Content>
    </Container>
  );
};
