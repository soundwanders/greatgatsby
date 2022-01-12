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
        I can't read binary and I'm not a programming wizard, but I care deeply about my work and I love what I do.
      </Section>
    
      <Section>
        In an effort towards constant improvement, the whole 'an object in motion' thing has really helped out. Thanks, Newton.
      </Section>
    
      <Section>
        Sometimes I feel like the hare, but most days I feel a lot more like the
        tortoise. Each day, I leave fresh footprints behind me,
        even if it's only a couple of steps.
      </Section>

      <Section>
        As I've made my way down this long and winding trail, I've picked up a few things I found along the way...
      </Section>

      <Concepts>
        <Woods
          alt="Woods Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635181706/woods_1_yvdbrs.png"
          aria-hidden="true"
        />

        <DetailsA>Clean Code</DetailsA>
        <Subtext>
          No needles, no haystacks. Error-free, maintainable code that is
          clear in its purpose and efficient in its execution makes me happy.
          The only spaghetti I enjoy is served on a plate and covered in sauce.
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
          Seamless transitions from mobile to desktop, emphasizing
          on adaptability and accessibility to accomodate all users.
        </Subtext>

        <Pathway
          alt="Trail Pathway Decorative Image"
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1635021849/pathwaytohezen.png"
          aria-hidden="true"
        />

        <DetailsB>Engaging Aesthetics</DetailsB>
        <Subtext>
          No squinting, no head tilting. Complimentary color schemes, easy-to-digest content and 
          user interfaces that make sense. No need to overcomplicate things. Mostly because they're already 
          complicated enough!
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
