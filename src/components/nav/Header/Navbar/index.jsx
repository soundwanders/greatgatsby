import React from "react";
import { Link } from "gatsby";
import NavLinks from "../NavLinks";
import { BlockContainer } from "components/common";
import { Wrapper, Brand } from "./style";

const Navbar = () => {
  const title = "JCOLETTA";

  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
        soundwanders
      </Brand>

      <h1
        style={{
          margin: 0,
          color: `black`,
          border: `2px solid green`,
          textDecoration: `none`,
        }}
      >
        {title}
      </h1>

      <NavLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
