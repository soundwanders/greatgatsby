import React from 'react';
import { Container } from 'components/common';
import { Foot, Flex, Copyright } from './style';

export const Footer = () => {
  return (
    <Foot>
      <Flex as={Container}>
        <Copyright>
          © {new Date().getFullYear()} soundwanders All Rights Reserved
          {` `}
        </Copyright>
      </Flex>
    </Foot>
  );
};
