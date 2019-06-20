 // External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  StaticQuery,
  graphql,
} from 'gatsby';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/styles';

// Internal Dependencies
import TopNav from './TopNav';
import './layout.css';

// Local Variables
const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    margin: '4.5em auto 0 auto',
    // width: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  },
}));

// Component Definition
const Content = (props) => {
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
          <ThemeProvider theme={createMuiTheme()}>
            <TopNav siteTitle={data.site.siteMetadata.title} />
            <div className={classes.container}>
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}{' '}Mike Mathew
              </footer>
            </div>
          </ThemeProvider>
        </>
      )}
    />
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content;
