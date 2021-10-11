import React from 'react';
import {
  Container,
  Title,
  Section,
  Concepts,
  DetailsA,
  DetailsB,
} from './style';

export const About = () => {
  return (
    <Container id="about">
      <Title>How's it going? 👋</Title>
      <Section>
        For as long as I can remember, I've been passionate about art.
      </Section>

      <Section>
        Whether that was designing a new logo for a hockey team, or writing
        songs for a band that never actually made it into existence, I was
        always creating something.
      </Section>

      <Section>
        Eventually, I decided to give web development a shot. A few poorly constructed
        static pages later, it clicked and I discovered how much I joy I find in
        building and designing for the web.
      </Section>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face), but I embrace the adversity and use it as a catalyst for
        continuous improvement.
      </Section>

      <Section>
        While my journey as a Developer has only just begun, there's a few core
        concepts that I try to adhere to whenever I'm working on a
        project...
      </Section>

      <Concepts>
        <DetailsA>Clean Code</DetailsA>
        <DetailsA>Creative Solutions</DetailsA>
        <DetailsA>Responsive Design</DetailsA>
        <DetailsB>Aesthetic & Engaging</DetailsB>
      </Concepts>
    </Container>
  );
};
