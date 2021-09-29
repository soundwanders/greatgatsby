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
        One reason I fell in love with web development is the creative outlet it
        provides. It offers me the perfect opportunity to improve my artistic
        and technical skills.
      </Subtitle>
      <br />
      <Subtitle>
        There is never a shortage of problems to solve, ideas to explore,
        knowledge to absorb, and that's a beautiful thing.
      </Subtitle>
      <br />
      <Subtitle>
        I've stumbled a couple of times along the way (maybe even fell flat on
        my face, sometimes). I have learned to embrace the adversity and enjoy
        the growth that comes from it.
      </Subtitle>
      <br />
      <Subtitle>
        While my journey as a Developer is only beginning, I have noticed that I
        gravitate towards a few core concepts whenever I work on a new
        project...
      </Subtitle>

      <Content>
        <DetailsTop>Clean Code</DetailsTop>
        <DetailsMid>Aesthetic Appeal</DetailsMid>
        <DetailsMid>Creative Solutions</DetailsMid>
        <DetailsBottom>Responsive Design</DetailsBottom>
      </Content>
    </Container>
  );
};
