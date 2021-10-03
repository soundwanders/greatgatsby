import React from 'react';
import {
  Container,
  Title,
  Section,
  Concepts,
  DetailsTop,
  DetailsMid,
  DetailsBottom,
} from './style';

export const About = () => {
  return (
    <Container id="about">
      <Title>Hey there! 👋</Title>
      <Section>
        One reason I fell in love with web development is the creative outlet it
        provides. It offers me the opportunity for technical and artistic growth.
      </Section>

      <Section>
        There is never a shortage of problems to solve, ideas to explore and
        knowledge to absorb. It's a beautiful thing.
      </Section>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face, sometimes), but I have learned to embrace the adversity and use it as
        a catalyst for continuous improvement.
      </Section>

      <Section>
        While my journey as a Developer has just begun, I have found myself
        gravitating towards a few core concepts whenever I'm creating a project...
      </Section>

      <Concepts>
        <DetailsTop>Clean Code</DetailsTop>
        <DetailsMid>Aesthetic Appeal</DetailsMid>
        <DetailsMid>Creative Solutions</DetailsMid>
        <DetailsBottom>Responsive Design</DetailsBottom>
      </Concepts>
    </Container>
  );
};
