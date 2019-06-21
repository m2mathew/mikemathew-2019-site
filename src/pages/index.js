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
    borderTop: `10px solid ${theme.palette.grey[500]}`,
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
      <div className={classes.bioContainer}>
        {getBioSegments(bioPhrases)}
      </div>
    </>
  );
};

export default IndexPage;
