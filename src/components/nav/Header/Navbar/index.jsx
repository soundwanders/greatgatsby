import React from "react";
import { Link } from "gatsby";
import { BlockContainer } from "components/common";
import { Wrapper, Brand } from "./style";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
        <img
          src="https://res.cloudinary.com/cloudwanders/image/upload/v1631583260/circ_jsy2xb.png"
          alt="Circle Logo"
        />
      </Brand>

      <NavLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
