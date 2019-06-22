// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import BioSegment from '../components/bio-segment';
import Header from '../components/header';
import SEO from '../components/seo';
import { bioPhrases } from '../utils/constants/home-constants';

// Local Variables
const useStyles = makeStyles(theme => ({
  bioContainer: {
    borderBottom: `10px solid ${theme.palette.grey[500]}`,
    lineHeight: 3,
    padding: '16px 0',
    textAlign: 'justify',
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
          strong={index === 0}
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
      <div>
        <svg viewBox="0 0 1440 64" width="100%">
          <path
            fill="rebeccapurple"
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
          />
        </svg>
      </div>
      <div className={classes.bioContainer}>
        {getBioSegments(bioPhrases)}
      </div>
    </>
  );
};

export default IndexPage;
