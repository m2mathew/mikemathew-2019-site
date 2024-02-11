// External Dependencies
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

// Local Variables

const useStyles = makeStyles({
  listItemText: {
    fontSize: 30,
  },
});

// Component Definition
const EnhancedListItemText = (props) => {
  const classes = useStyles(props);

  const { ...otherProps } = props;

  return <ListItemText classes={classes.listItemText} {...otherProps} />;
};

export default EnhancedListItemText;
