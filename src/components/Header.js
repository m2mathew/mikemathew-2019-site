// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles({
  title: {
    fontSize: '3.6rem',
    fontWeight: 100,
    textTransform: 'uppercase',
  },
});

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
}

export default Header;
