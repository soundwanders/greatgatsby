import React from 'react';
import {
  Container,
  Title,
  Section,
  Concepts,
  DetailsA,
  DetailsB,
  Subtext,
  TrailMarker,
  Pathway,
  Woods,
} from './style';

export const About = () => {
  return (
    <Container id="about">
      <Title>How's it going? 👋</Title>
      <Section>
        For as long as I can remember, I've been passionate about art.
      </Section>

      <Section>
        Whether that was designing new logos for my favorite sports teams or
        album covers for a band that never actually made it into existence, I
        was always busy creating something.
      </Section>

      <Section>
        Once I decided to take the leap into web development, I began building
        (crudely constructed) static pages and immediately it just clicked. 
      </Section>

      <Section>
      Each day I try to leave fresh footprints in the snow behind me, even if it's only a couple of steps. 
      Sometimes I feel like the hare, but most days I feel a lot more like the tortoise.
      </Section>

      <Section>
        As I've made my way down this long and winding trail,
        I'm grateful to pick up a few useful things I found along the way...
      </Section>

      <Concepts>
        <Woods
          alt="Woods Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635181706/woods_1_yvdbrs.png"
          aria-hidden="true"
        />

        <DetailsA>Clean Code</DetailsA>
        <Subtext>
          No needles, no haystacks. Error-free, easily maintainable code that is
          clear in its purpose and efficient in its execution makes me happy.
          The only spaghetti I'm down with is served on a plate and it's covered
          in sauce.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsA>Creative Solutions</DetailsA>
        <Subtext>
          Diving headfirst into exciting ideas, with the courage to fail
          miserably and the perseverance to get back up and try again. Solving
          problems is the name of the game.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635087492/pathwayright_pin3ne.png"
          aria-hidden="true"
        />

        <DetailsA>Responsive Design</DetailsA>
        <Subtext>
          Shout-out to the devs designing for devices of all shapes and sizes.
          Seamless transitions from mobile to desktop is key, with an emphasis
          on accessibility and lightning-fast load times.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsB>Engaging Aesthetics</DetailsB>
        <Subtext>
          No squinting, no head tilting, and no questionable contrast. Intuitive
          site navigation, complimentary color schemes, and easy-to-digest
          content to encourage users to stick around.
        </Subtext>

        <TrailMarker
          alt="Trail Marker Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635020052/sign-post_g43aif.png"
          aria-hidden="true"
        />
      </Concepts>
    </Container>
  );
};
