import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './style';

const NavLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#home">Home</AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </Wrapper>
  );
};
export default NavLinks;
