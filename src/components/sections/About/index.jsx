import React from 'react';
import {
  Container,
  Title,
  Section,
  Icons,
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
        provides. It offers me a limitless opportunity for technical and
        artistic growth.
      </Section>

      <Section>
        As far back as I can remember, I have been passionate about art. I was
        always doodling, whether it was a logo for my non-existent hockey team
        or a sketch of my favorite animal.
      </Section>

      <Section>Well, it turns out I'm a lousy artist...</Section>

      <Section>So I decided to let the computer do the work for me.</Section>

      <Icons>🎨 &#8594; 💻</Icons>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face), but I have learned to embrace the adversity and use it as a
        catalyst for continuous improvement.
      </Section>

      <Section>
        When it comes to development, there is an endless supply of problems to
        solve, fresh ideas to explore and knowledge to absorb...
      </Section>

      <Section>It's truly a beautiful thing.</Section>

      <Section>
        While my journey feels like it has just begun, whenever I am working on
        a project I have found myself gravitating towards a few core concepts
        that resonate with me...
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
