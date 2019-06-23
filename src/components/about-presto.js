// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
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
const AboutPresto = (props) => {
  const classes = useStyles(props);
  return (
    <Typography>
      Presto is built to help fine arts teachers organize their administrative tasks. Parents, students, and administrators can also use Presto to access data about the programs, pay fees, submit forms, and more. This is built with <span className={classes.emoji}>❤️</span> for teachers to enable them to spend more time teaching!
    </Typography>
  );
};

export default AboutPresto;
