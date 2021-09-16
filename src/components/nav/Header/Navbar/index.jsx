import React from "react";
import { Link } from "gatsby";
import { BlockContainer } from "components/common";
import { Wrapper, Brand, Subcontainer } from "./style";
import NavLinks from "../NavLinks";

const Navbar = () => {
  return (
    <Wrapper as={BlockContainer}>
      <Brand as={Link} to="/">
          <img
            src="https://res.cloudinary.com/cloudwanders/image/upload/v1631676935/donatello_hd2jcj.svg"
            alt="Donatello Logo, Click to Return to top of Home page"
            width="100%"
          />
      </Brand>

      <NavLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
