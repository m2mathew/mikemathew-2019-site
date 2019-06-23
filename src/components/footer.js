// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles({
  imageLinkContainer: {

  },
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
      <div className={classes.imageLinkContainer}>

      </div>
      <div>
        &copy; {new Date().getFullYear()}{' '}Mike Mathew
      </div>
    </footer>
  );
};

export default Footer;
