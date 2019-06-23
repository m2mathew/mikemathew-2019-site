// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles({
  root: {
    margin: '16px 0',
    padding: '0 24px 16px',
    width: '100%',
  },
});

// Component Definition
const ResumeSection = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default ResumeSection;
