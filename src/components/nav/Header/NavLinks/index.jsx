import React from 'react';
import { Link } from 'gatsby';
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
      <Link to="blog">Blog</Link>
      <Socials>
        {socialData.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Check out my ${name}`}
          >
            <img src={icon} alt={name} draggable="false" />
          </a>
        ))}
      </Socials>
    </Wrapper>
  );
};
export default NavLinks;
