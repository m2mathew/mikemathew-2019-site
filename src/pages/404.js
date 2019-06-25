// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import NotQuiteMyTempoImage from '../components/images/not-quite-my-tempo-image';
import SEO from '../components/seo';

// Local Variables
const useStyles = makeStyles({
  imageContainer: {
    border: '2px solid darkgrey',
    borderRadius: 5,
    margin: '32px 0',
    width: '60%',
  },
});

// Component Definition
const NotFoundPage = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <SEO title="404: Not found" />
      <Typography variant="h1">
        404
      </Typography>
      <div className={classes.imageContainer}>
        <NotQuiteMyTempoImage />
      </div>
      <Typography>Keep practicing...use a metronome this time.</Typography>
    </>
  );
};

export default NotFoundPage;
