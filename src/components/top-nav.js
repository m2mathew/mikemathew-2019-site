// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import NavLink from './nav-link';

// Local Variables
const useStyles = makeStyles(theme => ({
  linkContainer: {
    [theme.breakpoints.down('sm')]: {
      height: 44,
    },
    alignItems: 'flex-end',
    display: 'flex',
    height: 52,
  },
  list: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    display: 'flex',
    fontSize: '18px',
    listStyle: 'none',
    margin: 0,
  },
  root: {
    background: '#F4F7FC',
    borderBottom: '1px solid #ddd',
    borderTop: '20px solid #454174',
    boxSizing: 'border-box',
    left: 0,
    margin: '0 auto',
    marginBottom: '1.45rem',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 250,
  },
}));

// Component Definition
const TopNav = (props) => {
  const classes = useStyles(props);
  return (
    <nav className={classes.root}>
      <div className={classes.linkContainer}>
        <ul className={classes.list}>
          <NavLink to="/">
            home
          </NavLink>
          <NavLink to="/resume/">
            resume
          </NavLink>
          <NavLink to="/speaking/">
            speaking
          </NavLink>
          <NavLink to="/netlify/">
            netlify is cool
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
