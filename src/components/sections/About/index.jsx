import React from 'react';
import {
  Container,
  Title,
  Section,
  Concepts,
  DetailsA,
  DetailsB,
  Subtext,
} from './style';

export const About = () => {
  return (
    <Container id="about">
      <Title>How's it going? 👋</Title>
      <Section>
        For as long as I can remember, I've been passionate about art.
      </Section>

      <Section>
        Whether that was designing a new logo for my favorite hockey team or
        writing songs for a band that never actually made it into existence, I
        was always creating something.
      </Section>

      <Section>
        After a number of generic career tests and even more soul searching, I decided to take the leap into web development. 
A few crudely constructed static sites later, something just clicked.
      </Section>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face), but I embrace the adversity and use it as a catalyst for
        continuous improvement. The goal is to take a tiny step forward each
        day.
      </Section>

      <Section>
        Some days I feel like the hare, but most days I feel more like the
        tortoise. That's alright with me though, I'm geared up for the long road ahead.
      </Section>

      <Concepts>
        <DetailsA>Clean Code</DetailsA>
        <Subtext>
          Error-free, organized and easily maintainable code. The only spaghetti
          I'm down with comes on a plate and it's covered in sauce.
        </Subtext>
        <DetailsA>Creative Solutions</DetailsA>
        <Subtext>
          Diving headfirst into new ideas, with the courage to fail and the
          perseverance to get right back up and try again. Solving problems is
          the name of the game.
        </Subtext>
        <DetailsA>Responsive Design</DetailsA>
        <Subtext>
          Shout-out to the devs creating designs for all shapes and sizes.
          Seamless transition from mobile to desktop is key, with an emphasis on
          user experience and accessibility.
        </Subtext>
        <DetailsB>Engaging Aesthetics</DetailsB>
        <Subtext>
          No squinting, shaking of the head, or questionable contrast between
          page elements. Intuitive site navigation, complimentary color schemes,
          and easily-digestible content.
        </Subtext>
      </Concepts>
    </Container>
  );
};
