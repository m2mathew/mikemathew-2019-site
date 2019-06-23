// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles(theme => ({
  subtitle: {
    marginBottom: '2rem',
  },
}));

// Component Definition
const Subtitle = (props) => {
  const classes = useStyles(props);
  const { children } = props;
  return (
    <Typography
      className={classes.subtitle}
      variant="h5"
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
