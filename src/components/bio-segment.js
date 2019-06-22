// External Dependencies
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const propTypes = {
  children: PropTypes.string.isRequired,
  dialogText: PropTypes.string,
  image: PropTypes.element,
  isFirst: PropTypes.bool,
  strong: PropTypes.bool,
};

const defaultProps = {
  dialogText: null,
  image: null,
  isFirst: false,
  strong: false,
};

const useStyles = makeStyles({
  bullet: {
    margin: '0 10px',
  },
  dialogContent: {
    paddingTop: 24,
  },
  dialogText: {
    marginTop: 16,
  },
  root: {
    fontSize: 20,
    fontWeight: 200,
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
    dialogText,
    image,
    isFirst,
    strong,
  } = props;

  const classes = useStyles(props);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function toggleDialog() {
    return setIsDialogOpen(!isDialogOpen);
  }

  return (
    <Typography
      className={
        clsx(
          classes.root,
          strong && classes.strong,
        )
      }
      component="span"
    >
      {!isFirst && <span className={classes.bullet}>&bull;</span>}
      {image
        ? (
          <a href="#" onClick={toggleDialog}>
            {children}
          </a>
        )
        : children}
      {image && (
        <Dialog
          fullWidth
          maxWidth="sm"
          onClose={toggleDialog}
          open={isDialogOpen}
        >
          <DialogContent className={classes.dialogContent}>
            <div>
              {image}
            </div>
            <DialogContentText className={classes.dialogText}>
              {dialogText}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </Typography>
  );
};

BioSegment.propTypes = propTypes;
BioSegment.defaultProps = defaultProps;

export default BioSegment;
