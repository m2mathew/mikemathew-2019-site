// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#D4D8EE',
    marginBottom: 16,
    textTransform: 'uppercase',
    width: '100%',
  },
}));

// Component Definition
const ResumeSection = (props) => {
  const classes = useStyles(props);
  const { children } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResumeSection;
