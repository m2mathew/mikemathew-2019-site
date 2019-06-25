// External Dependencies
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import SEO from '../components/seo';
import SpeakingSection from '../components/speaking-section';
import Subtitle from '../components/subtitle';

// Local Variables
const useStyles = makeStyles(theme => ({
  emoji: {
    display: 'inline-block',
    fontSize: 24,
    marginTop: 12,
    transform: 'rotate(15deg)',
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    width: '100%',
  },
}));

// Component Definition
const Speaking = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <SEO title="Speaking" />
      <Subtitle>Speaking</Subtitle>
      <SpeakingSection
        title="Upcoming"
      >
        Send me a note if you need a speaker who is engaging, informed, inclusive, has a cool backpack, and always travels with drumsticks at the ready.
        <div>
          <span className={classes.emoji}>🤓</span>
        </div>
      </SpeakingSection>
      <SpeakingSection
        title="Recent"
      >
        <List dense>
          <ListItem divider>
            <ListItemText
              primary="DevMountain Fireside Chat"
              secondary="June 2019, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"React 102", ReactJS Dallas @ Call-Em-All`}
              secondary="June 2019, Frisco, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"React 101", ReactJS Dallas @ DevMountain`}
              secondary="May 2019, Dallas, TX"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`"Material-UI Tips and Tricks", ReactJS Dallas @ Robert Half`}
              secondary="February 2019, Addison, TX"
            />
          </ListItem>
        </List>
      </SpeakingSection>
      <SpeakingSection
        title="Past"
      >
        <List dense>
          <ListItem divider>
            <ListItemText
              primary={`"Gatsby Gotchas", ReactJS Dallas @ Dialexa`}
              secondary="September 2018, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"React 101", ReactJS Dallas @ DevMountain`}
              secondary="July 2018, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"Shallow Dive into React 16.3", ReactJS Dallas @ Buchanan Technologies`}
              secondary="April 2018, Grapevine, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"Open Source Noobs Welcome", ReactJS Dallas @ TailLight`}
              secondary="December 2017, Addison, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"Intro to React 16", ReactJS Dallas @ Call-Em-All`}
              secondary="October 2017, Frisco, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary="TechTalentSouth, Guest Speaker"
              secondary="September 2017, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary="Richardson ISD Creative Coders Camp, Guest Careeer Speaker"
              secondary="June 2017, Richardson, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary="Guest Speaker, The Iron Yard-Dallas"
              secondary="May 2017, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"React 101", ReactJS Dallas @ Coding Dojo`}
              secondary="April 2017, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"React 101", ReactJS Dallas @ The Iron Yard`}
              secondary="January 2017, Dallas, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={`"JavaScript for Beginners", The Iron Yard-Dallas Abroad`}
              secondary="July 2016, McKinney, TX"
            />
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary="Richardson ISD Creative Coders Camp, Guest Career Speaker"
              secondary="June 2016, Richardson, TX"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="CANHacks High School Hackathon Adjudicator, Nod Coworking Space"
              secondary="July 2015, Dallas, TX"
            />
          </ListItem>
        </List>
      </SpeakingSection>
    </>
  );
};

export default Speaking;
