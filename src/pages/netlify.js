// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import NetlifyLogo from '../components/netlify-logo';
import SEO from '../components/seo';

// Local Variables
const useStyles = makeStyles(theme => ({
  netlifySection: {
  },
  // emoji: {
  //   fontSize: 24,
  //   display: 'inline-block',
  //   transform: 'rotate(15deg) translate(2px, 5px)',
  // },
}));

// Component Definition
const NetlifyPage = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <SEO title="Netlify" />
      <section className={classes.netlifySection}>
        <NetlifyLogo />
      </section>
    </>
  );
};

export default NetlifyPage;
