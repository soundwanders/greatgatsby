import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { SpansMaxWidth, Wrapper, Brand } from './style';
import NavLinks from '../NavLinks';

const Navbar = () => {
  return (
    <SpansMaxWidth>
      <Wrapper as={Container}>
        <Brand as={Link} to="/">
          <img
            src="https://res.cloudinary.com/cloudwanders/image/upload/v1633297909/glasses-with-mustache_qajfty.svg"
            alt="Click to return to top of page"
            title="Return to top of page"
            width="100%"
            draggable="false"
          />
        </Brand>
        <NavLinks desktop />
      </Wrapper>
    </SpansMaxWidth>
  );
};

export default Navbar;
