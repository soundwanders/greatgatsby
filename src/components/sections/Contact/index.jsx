import React from 'react';
import { Container } from 'components/common';
import { Title, Wrapper, Details, Bird } from './style';
import ContactForm from './ContactForm';

export const Snail = 'Save the Snails 🐌';
export const Mail = 'E-mail Me Instead!';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <Title>{Snail}</Title>
      <Title>{Mail}</Title>
      <ContactForm />
    </Details>
    <Bird>
      <img
        src="https://res.cloudinary.com/cloudwanders/image/upload/v1631420037/contact_zbo6bv.svg"
        alt="Contact Form to Send an Email"
        aria-hidden="true"
      />
    </Bird>
  </Wrapper>
);
