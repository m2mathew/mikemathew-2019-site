// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import BioSegment from '../components/bio-segment';
import Header from '../components/header';
import SEO from '../components/seo';
import Subtitle from '../components/subtitle';
import PrestoJune2019Image from '../components/images/presto-june-2019-image';
import { bioPhrases } from '../utils/constants/home-constants';

// Local Variables
const useStyles = makeStyles(theme => ({
  bioContainer: {
    borderBottom: `10px solid ${theme.palette.grey[500]}`,
    lineHeight: 3,
    marginBottom: 24,
    padding: '16px 0',
    textAlign: 'justify',
  },
  emoji: {
    fontSize: 24,
    display: 'inline-block',
    transform: 'rotate(15deg) translate(2px, 5px)',
  },
  featuredBuiltTile: {
    fontWeight: 600,
    margin: '0.8rem 0',
  },
  featuredContainer: {
    marginBottom: '2rem',
  },
  featuredImageContainer: {
    width: '50%',
  },
  featuredInfo: {
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
const IndexPage = (props) => {
  const classes = useStyles(props);

  function getBioSegments(bioPhrases) {
    return bioPhrases.map((phrase, index) => {
      return (
        <BioSegment
          dialogText={phrase.dialogText}
          image={phrase.image}
          isFirst={index === 0}
          key={`bio-${index}`}
          strong={index === 0 || (index === bioPhrases.length - 1)}
        >
          {phrase.text}
        </BioSegment>
      );
    });
  }

  return (
    <>
      <SEO title="Home" />
      <Header />
      <div className={classes.bioContainer}>
        {getBioSegments(bioPhrases)}
      </div>
      <Subtitle>Some of my work</Subtitle>
      <div
        className={classes.featuredContainer}
        id="featured-app"
      >
        <div className={classes.featuredInfo}>
          <Typography
            className={classes.featuredTitle}
            variant="h5"
          >
            Presto Assistant
          </Typography>
          <Typography>
            Presto is built to help fine arts teachers organize their administrative tasks. Parents, students, and administrators can also use Presto to access data about the programs, pay fees, submit forms, and more. This is built with <span className={classes.emoji}>❤️</span> for teachers to enable them to spend more time teaching!
          </Typography>
          <Typography
            className={classes.featuredBuiltTile}
            variant="subtitle1"
          >
            Built With
          </Typography>
          <Typography>
            ReactJS / node / Material-UI / PostgreSQL / Heroku / Netlify
          </Typography>
        </div>
        <div className={classes.featuredImageContainer}>
          <PrestoJune2019Image />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
