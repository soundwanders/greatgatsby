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
        I'm not a programming wizard and I can't read binary, but I care deeply
        about my work and I love what I do.
      </Section>

      <Section>
        In an effort towards constant improvement, that whole "an object in
        motion" thing has really helped me out. Thanks, Newton.
      </Section>

      <Section>
        As I've made my way down this winding trail, I've picked up a
        few useful things I found along the way...
      </Section>

      <Concepts>
        <Woods
          alt="Woods Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635181706/woods_1_yvdbrs.png"
          aria-hidden="true"
        />

        <DetailsA>Clean Code</DetailsA>
        <Subtext>
          Code that is clear in its purpose and efficient in its organization.
          The only spaghetti I enjoy is served on a plate and covered in sauce.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsA>Creative Solutions</DetailsA>
        <Subtext>
          Navigating through unfamiliar terrain, with the courage to fail
          miserably and the perseverance to get up and try again. Solving
          problems is the name of the game.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635087492/pathwayright_pin3ne.png"
          aria-hidden="true"
        />

        <DetailsA>Responsive Design</DetailsA>
        <Subtext>
          Seamless transitions from mobile to desktop, utilizing common
          breakpoints to create flexible designs that fit devices of all shapes
          and sizes.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsB>Engaging Aesthetics</DetailsB>
        <Subtext>
          No squinting, no tilting of the head or neck. Complimentary color
          schemes, easy-to-digest content and user interfaces that just plain
          make sense.
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
