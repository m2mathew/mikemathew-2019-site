// External Dependencies
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

// Local Variables
const useStyles = makeStyles({
  past: {
    borderLeft: '4px solid navy',
  },
  recent: {
    borderLeft: '4px solid #FDD269',
  },
  root: {
    marginBottom: 24,
    width: '100%',
  },
  upcoming: {
    borderLeft: '4px solid #1AAC9F',
  },
});

// Component Definition
const SpeakingSection = (props) => {
  const { children, title } = props;
  const classes = useStyles(props);

  return (
    <Card
      className={
        clsx(
          classes.root,
          title === 'Past' && classes.past,
          title === 'Recent' && classes.recent,
          title === 'Upcoming' && classes.upcoming,
        )
      }
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default SpeakingSection;
