// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles({
  root: {
  },
});

// Component Definition
const Footer = (props) => {
  const classes = useStyles(props);
  return (
    <footer>
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
