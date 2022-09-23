import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
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
  const { theme } = useContext(ThemeContext);

  return (
    <Container id="about">
      <Title>How's it going? 👋</Title>

      <Section>
        I'm not a programming wizard and I can't read binary, but I care deeply
        about my work and I love what I do.
      </Section>

      <Section>
        As I've made my way down this winding trail, I've picked up a few useful
        things I found along the way...
      </Section>

      <Concepts>
        <Woods
          alt="Woods Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635181706/woods_1_yvdbrs.png"
          aria-hidden="true"
        />

        <DetailsA theme={theme}>Clean Code</DetailsA>
        <Subtext>
          Code that is organized and executed with a clear purpose. Written for
          humans, by humans. The only spaghetti I enjoy is served on a plate.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsA theme={theme}>Creative Solutions</DetailsA>
        <Subtext>
          Mending broken browsers, squashing sneaky bugs and solving all the
          headache-inducing problems. If your brain doesn't hurt, are you even
          learning?
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635087492/pathwayright_pin3ne.png"
          aria-hidden="true"
        />

        <DetailsA theme={theme}>Responsive Design</DetailsA>
        <Subtext>
          Seamless transitions from mobile to desktop, utilizing common
          breakpoints to build flexible designs that fit devices of all shapes
          and sizes.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsB theme={theme}>Engaging Aesthetics</DetailsB>
        <Subtext>
          Carefully designing complimentary color schemes and easy-to-digest
          content to create a user experience that just plain makes sense. (To me, atleast 🤘)
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
