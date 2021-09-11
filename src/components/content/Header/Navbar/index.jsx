import React from 'react';
import { Link } from 'gatsby';
import NavLinks from '../NavLinks';
import { BlockContainer } from 'components/common';
import { Wrapper, Brand } from './style';

const Navbar = () => {
  const siteTitle = "JCOLETTA";
  
  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
        soundwanders
      </Brand>

      <h1 style={{ 
        margin: 0,
        color: `black`,
        border: `2px solid green`,
        textDecoration: `none`,
      }}>
      { siteTitle }
      </h1>

      <NavLinks desktop />
    </Wrapper>
  )
};

export default Navbar;