import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: `#fafafa`,
      marginBottom: `1.45rem`,
      borderBottom: '1px solid #ddd',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      borderTop: '20px solid #454174',
      margin: '0 auto',
      padding: '0 16px',
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
