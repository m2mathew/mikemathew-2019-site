// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import GithubImage from '../components/images/github-image';
import LinkedInImage from '../components/images/linkedin-image';
import TwitterImage from '../components/images/twitter-image';

// Local Variables
const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('xs')]: {
      height: 20,
      margin: '0 8px',
      width: 20,
    },
    height: 32,
    margin: '0 12px',
    width: 32,
  },
  imageLinkContainer: {
    display: 'flex',
    marginBottom: 16,
  },
  root: {
    alignItems: 'center',
    backgroundColor: '#CCC4EA',
    borderTop: '5px solid #454174',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1rem 0 0',
    padding: '32px 0',
  },
}));

// Component Definition
const Footer = (props) => {
  const classes = useStyles(props);
  return (
    <footer className={classes.root}>
      <div className={classes.imageLinkContainer}>
        <div className={classes.image}>
          <a href="https://github.com/m2mathew">
            <GithubImage />
          </a>
        </div>
        <div className={classes.image}>
          <a href="https://www.linkedin.com/in/m2mathew/">
            <LinkedInImage />
          </a>
        </div>
        <div className={classes.image}>
          <a href="https://twitter.com/drumsensei/">
            <TwitterImage />
          </a>
        </div>
      </div>
      <div>
        &copy; {new Date().getFullYear()}{' '}Mike Mathew
      </div>
    </footer>
  );
};

export default Footer;
