// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  active: {
    borderBottom: '2px solid hotpink',
  },
  link: {
    '&:hover': {
      borderBottom: '1px solid pink',
    },
    color: theme.palette.common.black,
    paddingBottom: '0.25rem',
    textDecoration: 'none',
  },
  root: {
    paddingLeft: 32,
  },
}));

// Component Definition
function NavLink(props) {
  const {
    children,
    to,
  } = props;

  const classes = useStyles(props);

  return (
    <li className={classes.root}>
      <Link
        activeClassName={classes.active}
        className={classes.link}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

NavLink.propTypes = propTypes;

export default NavLink;
