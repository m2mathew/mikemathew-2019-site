import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fafafa`,
      marginBottom: `1.45rem`,
      borderBottom: '1px solid lightgrey',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
    }}
  >
    <nav
      style={{
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
            listStyle: 'none',
          }}
        >
          <li
            style={{
              paddingLeft: 8,
            }}
          >
            <Link to="//">home</Link>
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
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
