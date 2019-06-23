// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  active: {
    borderBottom: '2px solid hotpink',
  },
  activeNetlify: {
    borderBottom: '2px solid #1AADA0',
  },
  link: {
    '&:hover': {
      borderBottom: '1px solid pink',
    },
    color: theme.palette.common.black,
    paddingBottom: '0.25rem',
    textDecoration: 'none',
  },
  netfliyLink: {
    '&:hover': {
      borderBottom: '1px solid #1AADA0',
    },
    color: '##A6149A',
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

  const isNetfilyLink = to === '/netlify/';

  return (
    <li
      className={
        clsx(
          classes.root,
        )
      }
    >
      <Link
        activeClassName={
          clsx(
            classes.active,
            isNetfilyLink && classes.activeNetlify,
          )
        }
        className={isNetfilyLink ? classes.netfliyLink : classes.link}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

NavLink.propTypes = propTypes;

export default NavLink;
