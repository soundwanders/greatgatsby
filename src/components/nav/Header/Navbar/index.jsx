import React from 'react';
import { Link } from 'gatsby';
import { BlockContainer } from 'components/common';
import { Wrapper, Brand } from './style';
import NavLinks from '../NavLinks';

const Navbar = () => {
  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
        <img
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1633297909/glasses-with-mustache_qajfty.svg"
          alt="Click to Return to top of Home page"
          width="100%"
        />
      </Brand>

      <NavLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
