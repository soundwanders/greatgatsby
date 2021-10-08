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
        Growing up, I was always passionate about and interested in all
        different forms of art. I was always creating, whether it was a logo for
        my non-existent hockey team or a sketch of an animal I just learned
        about.
      </Section>

      <Section>Well, it turns out I'm kind of a lousy artist...</Section>

      <Section>
        The redeeming factor in all of this was that I also love computers.{' '}
        <br />
        So, I decided to let the machines do the work for me.
      </Section>

      <Icons>🤖 &#8594; 🎨 </Icons>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face), but I have learned to embrace the adversity and use it as a
        catalyst for continuous improvement.
      </Section>

      <Section>
        When I'm not coding, I'd love to sit around and talk about hockey (Go
        Avs!), animals, skateboarding, art, music, ancient history, true crime
        &amp; unsolved mysteries.
      </Section>

      <Section>
        On a rainy day, you might find me reading some Kurt Vonnegut or
        listening to a Ram Dass talk. I'm a sucker for a good story.
      </Section>
      <Section>
        While my journey as a Developer feels like it has just begun, I am
        building a solid foundation that revolves around a few core concepts...
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
