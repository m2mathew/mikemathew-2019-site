// External Dependencies
import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles(theme => ({
  link: {
    color: 'lightcoral',
    fontWeight: 400,
    textDecoration: 'none',
  },
}));

// Component Definition
const Link = React.forwardRef(function Link(props, ref) {
  const classes = useStyles(props);
  return (
    <MuiLink
      className={classes.link}
      component={GatsbyLink}
      ref={ref}
      {...props}
    />
  );
});

export default Link;
