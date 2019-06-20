// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import Header from '../components/header';
import SEO from '../components/seo';

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
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </>
  );
};

export default IndexPage;
