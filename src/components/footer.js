// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles({
  root: {
    backgroundColor: '#CCC4EA',
    borderTop: '5px solid #454174',
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0 0',
    padding: '32px 0',
  },
});

// Component Definition
const Footer = (props) => {
  const classes = useStyles(props);
  return (
    <footer className={classes.root}>
      © {new Date().getFullYear()}{' '}Mike Mathew
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
};

export default Footer;
