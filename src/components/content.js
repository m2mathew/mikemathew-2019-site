// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  StaticQuery,
  graphql,
} from 'gatsby';
import {
  makeStyles,
} from '@material-ui/styles';

// Internal Dependencies
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
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem auto 0',
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
        <main className={classes.container}>
          {children}
        </main>
      )}
    />
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
