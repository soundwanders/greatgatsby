import React from 'react';
import { Header } from 'components/nav';
import { Footer } from 'components/nav';
import { Global } from './style';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <>
      <Global />
      <Header data />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
