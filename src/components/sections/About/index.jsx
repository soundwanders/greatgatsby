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
        I fell in love with web development because of the creative outlet it
        provides. It offers me a limitless opportunity for technical and artistic growth.
      </Section>

      <Section>
        As far back as I can remember, I have been passionate about art. I was always doodling, 
        whether it was a logo for my non-existent hockey team or a sketch of my favorite animal.
      </Section>

      <Section>
        Well, it turns out I'm a lousy artist. So I decided to let the computer 
        do the work for me. 🎨
      </Section>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face, sometimes), but I have learned to embrace the adversity and use it as
        a catalyst for continuous improvement.
      </Section>

      <Section>
        There is never a shortage of problems to solve, ideas to explore and
        knowledge to absorb. It's truly a beautiful thing.
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
