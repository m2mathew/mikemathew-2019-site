// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import BioSegment from '../components/bio-segment';
import FeaturedSection from '../components/featured-section';
import Header from '../components/header';
import SEO from '../components/seo';
import Subtitle from '../components/subtitle';
import { bioPhrases } from '../utils/constants/home-constants';
import { featuredData } from '../utils/constants/featured-constants';

// Local Variables
const useStyles = makeStyles(theme => ({
  bioContainer: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: 2.2,
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: 2.5,
    },
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
      {featuredData.map(app => (
        <FeaturedSection
          about={app.about}
          builtWith={app.builtWith}
          image={app.image}
          key={app.title}
          link={app.link}
          title={app.title}
        />
      ))}
    </>
  );
};

export default IndexPage;
