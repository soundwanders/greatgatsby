import React from 'react';
import { Title, Container, Wrapper, Details, Bird } from './style';
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
        src="https://res.cloudinary.com/cloudwanders/image/upload/v1633834888/lightcontact_tnmkrf.svg"
        alt="Contact Form to Send an Email"
        aria-label="Submit contact form button"
      />
    </Bird>
  </Wrapper>
);
