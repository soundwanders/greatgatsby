import React from "react";
import { BlockContainer } from "components/common";
import { Copyright, Foot, Flex, FooterLinks } from "./style";
import socials from "./socials.json";

export const Footer = () => {
  return (
    <Foot>
      <Flex as={BlockContainer}>
        <Copyright>
          © All rights reserved | soundwanders {new Date().getFullYear()}
          {` `}
        </Copyright>

        <FooterLinks>
          {socials.map(({ id, name, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Check out my ${name}`}
            >
              <img width="28" src={icon} alt={name} />
            </a>
          ))}
        </FooterLinks>
      </Flex>
    </Foot>
  );
};
