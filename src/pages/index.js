// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import Header from '../components/header';
import Layout from '../components/layout';
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
    <Layout>
      <SEO title="Home" />
      {/* <h1 className={classes.title}>
        Hi people
      </h1> */}
      <Header />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  );
};

export default IndexPage;
