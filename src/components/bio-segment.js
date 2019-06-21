// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies

// Local Variables
const propTypes = {
  children: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  strong: PropTypes.bool,
};

const defaultProps = {
  isFirst: false,
  strong: false,
};

const useStyles = makeStyles({
  bullet: {
    margin: '0 4px',
  },
  root: {
    textTransform: 'uppercase',
  },
  strong: {
    fontWeight: 600,
  },
});

// Component Definition
const BioSegment = (props) => {
  const {
    children,
    isFirst,
    strong,
  } = props;

  const classes = useStyles(props);

  return (
    <Typography
      className={
        clsx(
          classes.root,
          strong && classes.strong,
        )
      }
    >
      {!isFirst && <span className={classes.bullet}>&bull;</span>}
      {children}
    </Typography>
  );
};

BioSegment.propTypes = propTypes;
BioSegment.defaultProps = defaultProps;

export default BioSegment;
