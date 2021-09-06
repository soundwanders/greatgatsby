/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{

        }}
      >
        <main>{children}</main>

        <footer
          style={{
            display: `block`,
            position: `fixed`,
            bottom: `0`,
            margin: `0 auto`,
            width: `100%`,
            maxWidth: `100%`,
            padding: `0 auto`,
            textAlign: `center`,
            marginTop: `1rem`,
            background: `#037fb7`,
            color: `#fff`,
          }}
        >
          © soundwanders {new Date().getFullYear()}
          {` `}

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
