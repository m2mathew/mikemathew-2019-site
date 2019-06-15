// External Dependencies
import PropTypes from "prop-types"
import React from "react"

// Internal Dependencies
import NavLink from './nav-link';

// Component Definition
const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: `#fafafa`,
      borderBottom: '1px solid #ddd',
      borderTop: '20px solid #454174',
      boxSizing: 'border-box',
      left: 0,
      margin: '0 auto',
      marginBottom: `1.45rem`,
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 250,
    }}
  >
    <div
      style={{
        alignItems: 'flex-end',
        display: 'flex',
        height: 52,
      }}
    >
      <ul
        style={{
          display: 'flex',
          fontSize: '18px',
          listStyle: 'none',
          margin: 0,
        }}
      >
        <NavLink to="/">
          home
        </NavLink>
        <NavLink to="/resume/">
          resume
        </NavLink>
        <NavLink to="/speaking/">
          speaking
        </NavLink>
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
