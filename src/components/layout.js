/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 // External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  StaticQuery,
  graphql,
} from 'gatsby';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import Header from './header';
import './layout.css';

// Local Variables
const useStyles = makeStyles({
  container: {
    margin: '4.5em auto 0 auto',
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  },
});

// Component Definition
const Layout = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={classes.container}>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}{' '}Mike Mathew
            </footer>
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
