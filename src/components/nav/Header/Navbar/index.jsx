import React from "react";
import { Link } from "gatsby";
import { BlockContainer } from "components/common";
import { Wrapper, Brand, Circ } from "./style";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
        <img
          src="https://res.cloudinary.com/cloudwanders/image/upload/c_limit,h_42/v1631495024/circ_xbhmfo.png"
          alt="Circle Logo"
        />
      </Brand>

      <NavLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
