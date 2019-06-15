// External Dependencies
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

// Component Definition
const NavLink = ({
  children,
  to,
}) => (
  <li
    style={{
      paddingLeft: 32,
    }}
  >
    <Link
      style={{
        textDecoration: 'none',
      }}
      to={to}
    >
      {children}
    </Link>
  </li>
);

NavLink.propTypes = propTypes;

export default NavLink;
