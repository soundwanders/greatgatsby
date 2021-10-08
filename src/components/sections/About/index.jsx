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
      <Title>How's it going? 👋</Title>
      <Section>
        Growing up, I gravitated towards artistic outlets. I was constantly creating, whether it was a logo for
        my non-existent hockey team or writing songs for a band that never actually made it into existence.
      </Section>

      <Section>
      Well, as it turns out I'm kind of a lousy artist...
      </Section>

      <Section>
        The redeeming factor here is that I discovered my love of computers pretty early on.
      </Section>

      <Section>
        So, eventually I put down the paint brush and decided to let the computer do the work for me.
      </Section>

      <Icons>🤖 &#8594; 🎨 </Icons>

      <Section>
        I've stumbled plenty of times along the way (maybe even fell flat on my
        face), but I embrace the adversity and use it as a
        catalyst for continuous improvement.
      </Section>

      <Section>
        When I'm not coding, I also really enjoy hockey (Go
        Avs!), animals, art, music, ancient history, skateboarding, true crime
        &amp; unsolved mysteries.
      </Section>

      <Section>
        On a rainy day, you can find me reading some Kurt Vonnegut or
        listening to a Ram Dass talk. I'm a sucker for a good story.
      </Section>

      <Section>
        While my journey as a Developer feels like it has just begun, I continue to
        build a solid foundation that revolves around a few core concepts...
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
