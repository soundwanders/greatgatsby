import React from "react";
import { Link } from "gatsby";
import { BlockContainer } from "components/common";
import { Wrapper, Brand } from "./style";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
        soundwanders
      </Brand>
      
      <NavLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
