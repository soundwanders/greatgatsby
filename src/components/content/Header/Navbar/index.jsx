import React from 'react';
import { Link } from 'gatsby';
import NavLinks from '../NavLinks';
import { Container } from 'components/common';
import { Wrapper, Brand } from './style';

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        soundwanders
      </Brand>
      <NavLinks desktop />
    </Wrapper>
  )
};

export default Navbar;