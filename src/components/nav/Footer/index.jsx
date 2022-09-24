import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Foot, Flex, Copyright } from './style';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Foot theme={theme}>
      <Flex as={Container}>
        <Copyright>
           Built with 🧡
          {` `}
        </Copyright>
      </Flex>
    </Foot>
  );
};
