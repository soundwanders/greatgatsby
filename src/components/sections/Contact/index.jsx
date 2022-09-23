import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Title, Wrapper, Details, MailTime, Bird } from './style';
import MailTrail from './wingmail.png';
import ContactForm from './ContactForm';

export const Snail = 'Save the Snails 🐌';
export const Mail = 'E-mail Me Instead!';
  

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="contact" theme={theme}>
      <Details>
        <Title>{Snail}</Title>
        <Title>{Mail}</Title>
        <ContactForm />
      </Details>
      <MailTime>
        <img src={MailTrail} alt="Send me an E-Mail" aria-hidden="true" />
      </MailTime>
      <Bird>
        <img
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631420037/contact_zbo6bv.svg"
          alt="Bird Image Adjacent to Contact Form"
          aria-hidden="true"
        />
      </Bird>
    </Wrapper>
  )
};
