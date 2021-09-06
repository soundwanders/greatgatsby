import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      maxWidth: `100%`,
      padding: `0.75rem 1rem`,
      textAlign: `center`,
      background: `#037fb7`,
      color: `#fff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
