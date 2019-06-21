// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import BioSegment from '../components/bio-segment';
import Header from '../components/header';
import SEO from '../components/seo';
import { bioPhrases } from '../utils/constants/home-constants';

// Local Variables
const useStyles = makeStyles({
  title: {
    color: 'rebeccapurple',
  },
});

// Component Definition
const IndexPage = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <SEO title="Home" />
      <Header />
      <div>
        <BioSegment
          isFirst
          strong
        >
          {bioPhrases[0]}
        </BioSegment>
      </div>
    </>
  );
};

export default IndexPage;
