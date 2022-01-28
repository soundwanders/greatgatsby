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
          Maintainable code written with purpose and organized efficiently.
          The only spaghetti I enjoy is served on a plate.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsA>Creative Solutions</DetailsA>
        <Subtext>
          An open-minded approach to problem solving, with the 
          courage to go off the beaten path to get the job done.
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
          Carefully designing complimentary color
          schemes, easy-to-digest content and a user experience that just plain
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
