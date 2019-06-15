import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: `#fafafa`,
      borderBottom: '1px solid #ddd',
      borderTop: '20px solid #454174',
      left: 0,
      margin: '0 auto',
      marginBottom: `1.45rem`,
      padding: '0 16px',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 250,
    }}
  >
    <div
      style={{
        display: 'flex',
      }}
    >
      <ul
        style={{
          display: 'flex',
          fontSize: '1.25rem',
          listStyle: 'none',
          margin: 0,
        }}
      >
        <li
          style={{
            paddingLeft: 8,
          }}
        >
          <Link to="/">home</Link>
        </li>
        <li
          style={{
            paddingLeft: 8,
          }}
        >
          <Link to="/resume/">resume</Link>
        </li>
        <li
          style={{
            paddingLeft: 8,
          }}
        >
          <Link to="/speaking/">speaking</Link>
        </li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
