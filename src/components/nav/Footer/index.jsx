import React from 'react';
import { BlockContainer } from 'components/common';
import { Foot, Flex, Copyright } from './style';

export const Footer = () => {
  return (
    <Foot>
      <Flex as={BlockContainer}>
        <Copyright>
          © {new Date().getFullYear()} | soundwanders | All Rights Reserved
          {` `}
        </Copyright>
      </Flex>
    </Foot>
  );
};
