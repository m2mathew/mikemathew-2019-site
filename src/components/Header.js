// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'flex-end',
    display: 'flex',
    margin: '1.5rem 0',
    flexDirection: 'column',
  },
  subtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 22,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 28,
    },
    alignSelf: 'center',
    marginTop: 12,
  },
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
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h1"
      >
        Mike Mathew
      </Typography>
      <Typography
        className={classes.subtitle}
        component="h3"
        variant="h5"
      >
        front end web developer
      </Typography>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
};

export default Header;
