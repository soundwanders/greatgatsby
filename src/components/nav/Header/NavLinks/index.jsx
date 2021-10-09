import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, Socials } from './style';
import socialData from './socials.json';

const NavLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#home">Home</AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <Socials>
        {socialData.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Check out my ${name}`}
          >
            <img width="36" src={icon} alt={name} />
          </a>
        ))}
      </Socials>
    </Wrapper>
  );
};
export default NavLinks;
