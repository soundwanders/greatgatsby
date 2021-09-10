/**
 Queries for data with useStaticQuery: https://www.gatsbyjs.com/docs/use-static-query/
*/

import React from 'react';
import { Header } from 'components/content';
import { Footer } from 'components/content';
import { Global } from './style';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global />
      <Header siteTitle={data.site.siteMetadata?.title || ``} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};