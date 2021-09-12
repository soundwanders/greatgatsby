import React from "react";
import { ContactContainer, Wrapper, Details, Photo} from "./style";
import ContactForm from "./ContactForm";

export const Contact = () => (
  <Wrapper as={ContactContainer} id="contact">
    <Details>
      <h1>CONTACT</h1>
      <ContactForm />
    </Details>
    <Photo>
      <img src="https://res.cloudinary.com/cloudwanders/image/upload/v1631420037/contact_zbo6bv.svg" alt="Contact Form, Send me a message!" />
    </Photo>
  </Wrapper>
);
