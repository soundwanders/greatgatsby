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
        Skip ahead a couple decades, I decided to take the leap into web development. 
        A few crudely constructed static sites later, it just clicked.
      </Section>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face), but I embrace the adversity and use it as a catalyst for
        continuous improvement.
      </Section>

      <Section>
        Some days I feel like the hare, but most days I feel more like the tortoise. <br/>
        It's all good, I've got my hiking boots on and I'm geared up for the long road ahead.
      </Section>

      <Concepts>
        <DetailsA>Clean Code</DetailsA>
        <Subtext>
          Error-free, maintainable code. I'm a big fan of 
          well-structured code. The only spaghetti I'm down with is served on a plate and it's covered in sauce.
        </Subtext>
        <DetailsA>Creative Solutions</DetailsA>
        <Subtext>
          Diving headfirst into exciting ideas, with the courage to fail and the
          perseverance to get back up and try again. Solving problems is
          the name of the game.
        </Subtext>
        <DetailsA>Responsive Design</DetailsA>
        <Subtext>
          Shout-out to the devs creating designs for devices of all shapes and sizes.
          Seamless transition from mobile to desktop is key, with an emphasis on
          user experience and accessibility.
        </Subtext>
        <DetailsB>Engaging Aesthetics</DetailsB>
        <Subtext>
          No squinting, no head tilting, and no questionable contrast.
          Intuitive site navigation, complimentary color schemes,
          and easy-to-digest content encourages users to stick around. 
        </Subtext>
      </Concepts>
    </Container>
  );
};
