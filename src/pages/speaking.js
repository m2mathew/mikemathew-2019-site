// External Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import SEO from '../components/seo';
import SpeakingSection from '../components/speaking-section';
import Subtitle from '../components/subtitle';

// Local Variables
const useStyles = makeStyles({
  emoji: {
    fontSize: 24,
    display: 'inline-block',
    marginTop: 12,
    transform: 'rotate(15deg)',
  },
});

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
        <ul>
          <li>
            DevMountain Fireside Chat, June 2019, Dallas, TX
          </li>
          <li>
            ReactJS Dallas @ Call-Em-All, June 2019, Frisco, TX, "React 102"
          </li>
          <li>
            ReactJS Dallas @ DevMountain, May 2019, Dallas, TX, "React 101"
          </li>
        </ul>
      </SpeakingSection>
      <SpeakingSection
        title="Past"
      >
        <ul>
          <li>
            ReactJS Dallas @ TailLight, December 2017, Addison, TX, "Open Source Noobs Welcome"
          </li>
          <li>
            ReactJS Dallas @ Call-Em-All, October 2017, Frisco, TX, "Intro to React 16"
          </li>
          <li>
            TechTalentSouth, September 2017, Guest Speaker, Dallas, TX
          </li>
          <li>
            Richardson ISD Creative Coders Camp, June 2017, Guest Career Speaker, Richardson, TX
          </li>
          <li>
            The Iron Yard-Dallas, May 2017, Guest Speaker, Dallas, TX
          </li>
          <li>
            ReactJS Dallas @ Coding Dojo, April 2017, Speaker, Dallas, TX, "React 101"
          </li>
          <li>
            ReactJS Dallas @ The Iron Yard, January 2017, Speaker, Dallas, TX, "React 101"
          </li>
          <li>
            The Iron Yard-Dallas Abroad, July 2016, Speaker, McKinney, TX, "JavaScript for Beginners"
          </li>
          <li>
            Richardson ISD Creative Coders Camp, June 2016, Guest Career Speaker, Richardson, TX
          </li>
          <li>
            CANHacks High School Hackathon, July 2015, Judge, Dallas, TX
          </li>
        </ul>
      </SpeakingSection>
    </>
  );
};

export default Speaking;
