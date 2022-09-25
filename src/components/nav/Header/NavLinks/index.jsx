import React, {useContext} from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ToggleTheme from 'components/nav/Header/ToggleTheme';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Socials } from './style';
import socialData from './socials.json';

const NavLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#home">Home</AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
      {/* <AnchorLink href="#projects">Projects</AnchorLink> */}
      <AnchorLink href="#contact">Contact</AnchorLink>
      <Link to="blog">Blog</Link>

      <Socials theme={theme}>
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

        <ToggleTheme />
      </Socials>
    </Wrapper>
  );
};
export default NavLinks;
