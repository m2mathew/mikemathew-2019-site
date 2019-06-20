// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 65,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 110,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 150,
    },
    fontWeight: 100,
    textTransform: 'uppercase',
  },
}));

// Component Definition
const Header = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <h1 className={classes.title}>Mike Mathew</h1>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
};

export default Header;
