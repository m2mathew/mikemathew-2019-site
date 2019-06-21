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

  return (
    <>
      <SEO title="Home" />
      <Header />
      <div className={classes.bioContainer}>
        <BioSegment
          isFirst
          strong
        >
          {bioPhrases[0]}
        </BioSegment>
        {
          bioPhrases.map((phrase, index) => {
            if (index === 0) {
              return null;
            }
            return (
              <BioSegment>
                {phrase}
              </BioSegment>
            );
          })
        }
      </div>
    </>
  );
};

export default IndexPage;
