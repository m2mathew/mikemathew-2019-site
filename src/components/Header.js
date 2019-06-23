// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '1.5rem 0 1rem',
    width: '100%',
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
    margin: '1.5rem 0 2rem',
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
  wave: {
    width: '100%',
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
      <div className={classes.wave}>
        <svg viewBox="0 0 1440 64" width="100%">
          <path
            fill="rebeccapurple"
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
