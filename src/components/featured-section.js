// External Dependencies
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies

// Local Variables
const useStyles = makeStyles(theme => ({
  buttonRoot: {
    color: theme.palette.common.white,
    margin: '10px 10px 10px 0',
  },
  containedPrimary: {
    background: `linear-gradient(160deg, rebeccapurple 30%, #280154 90%)`,
  },
  featuredBuiltTile: {
    fontWeight: 600,
    margin: '0.8rem 0',
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  featuredImageContainer: {
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
      marginTop: '2rem',
      width: '80%',
    },
    width: '60%',
  },
  featuredInfo: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginRight: '2.5rem',
    width: '33%',
  },
  featuredTitle: {
    fontWeight: 600,
    marginBottom: '1rem',
    textShadow: '1px 1px 2px pink',
    textTransform: 'uppercase',
  },
}));

// Component Definition
const FeaturedSection = (props) => {
  const {
    about,
    builtWith,
    image,
    link,
    title,
  } = props;
  const classes = useStyles(props);

  return (
    <div
      className={classes.root}
      id="featured-app"
    >
      <div className={classes.featuredInfo}>
        <Typography
          className={classes.featuredTitle}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography>
          {about}
        </Typography>
        <Button
          classes={{
            containedPrimary: classes.containedPrimary,
            root: classes.buttonRoot,
          }}
          color="primary"
          href={link}
          rel="noopener referrer"
          target="_blank"
          variant="contained"
        >
          Visit Website
        </Button>
        <Typography
          className={classes.featuredBuiltTile}
          variant="subtitle1"
        >
          Built With
        </Typography>
        <Typography>
          {builtWith.map((tech, index) => (
            <span key={tech}>
              {tech}{index < builtWith.length - 1 && ' / '}
            </span>
          ))}
        </Typography>
      </div>
      <div className={classes.featuredImageContainer}>
        {image}
      </div>
    </div>
  );
};

FeaturedSection.propTypes = {
  about: PropTypes.node.isRequired,
  builtWith: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  image: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeaturedSection;
