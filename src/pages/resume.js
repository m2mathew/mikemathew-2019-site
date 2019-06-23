// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import SEO from '../components/seo';
import ResumeSection from '../components/resume-section';
import ResumeSectionTitle from '../components/resume-section-title';
import Subtitle from '../components/subtitle';

// Local Variables
const useStyles = makeStyles({
  indent: {
    marginBottom: 12,
    paddingLeft: 24,
  },
  paragraph: {
    marginBottom: 12,
  },
  root: {
    margin: '16px 0',
    padding: '0 24px 16px',
    width: '100%',
  },
  subtitle: {
    fontWeight: 600,
    marginBottom: 12,
  },
});

// Component Definition
const Resume = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <SEO title="Resume" />
      <Subtitle>Résumé</Subtitle>
      <ResumeSectionTitle>Summary</ResumeSectionTitle>
      <ResumeSection>
        <Typography className={classes.paragraph}>
          My journey has taken me from leading young people and teaching bands and drum lines around Texas to making websites and web applications for everyone. As I continue to grow as a developer, I thrive when working alongside a collaborative team that values education, community, and excellence.
        </Typography>
        <Typography>
          In my previous positions, I was able to practice daily public speaking and leading groups of all sizes through a variety of projects. I remain excited about education and hope to use my influence to make my community a better place each day.
        </Typography>
      </ResumeSection>
      <ResumeSectionTitle>Specialties</ResumeSectionTitle>
      <ResumeSection>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Skills and Languages:
        </Typography>
        <Typography className={classes.indent}>
          JavaScript (including ES2015+), HTML5, CSS3, DOM, React, node, Material-UI, Gatsby, AWS, Netlify, Heroku, jQuery, Backbone, Web Applications, Web Development, Agile Methodology, API interaction
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Computer & Operating Systems:
        </Typography>
        <Typography className={classes.indent}>
          MacOS, iWork suite (Pages, Numbers, Keynote), MS Office (Word, Excel, PowerPoint), Visual Studio Code
        </Typography>
      </ResumeSection>
      <ResumeSectionTitle>Experience</ResumeSectionTitle>
      <ResumeSection>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Front End Developer (December 2015-present)
        </Typography>
        <Typography className={classes.indent}>
          Call-Em-All - Frisco, Texas
        </Typography>
        <Typography className={classes.indent}>
          Primarily work on engineering team to develop the next iteration of the desktop client application. Help solve customer support issues that arise on the technical level. Primarily using ReactJS, Material-UI, and node. All team members work to contribute to the entire customer experience. Spent time as Product Owner and Project Manager.
        </Typography>
      </ResumeSection>
      <ResumeSectionTitle>Education</ResumeSectionTitle>
      <ResumeSection>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          The Iron Yard - Austin, Texas
        </Typography>
        <Typography className={classes.indent}>
          Front End Engineering Certification (November 2015)
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Texas A&amp;M University-Commerce - Commerce, Texas
        </Typography>
        <Typography className={classes.indent}>
          Studies towards Master of Music Education (2009-2016)
        </Typography>
        <Typography className={classes.indent}>
          Bachelor of Science in Music Education (May 2002)
        </Typography>
      </ResumeSection>
      <ResumeSectionTitle>Projects</ResumeSectionTitle>
      <ResumeSection>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          ReactJS Dallas User Group
        </Typography>
        <Typography className={classes.indent}>
          Since February 2016, I have served as the main organizer for all of the ReactJS Dallas events. We meet in various venues around the Dallas area. I also organize speakers and sponsors and sometimes even give a talk myself. Attending React meetups consistently for three years is a great way to learn new things!
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Presto Assistant
        </Typography>
        <Typography className={classes.indent}>
          Presto is built to help fine arts teachers organize their administrative tasks. Parents, students, and administrators can also use Presto to access data about the programs, pay fees, submit forms, and more. We hope to bring some joy to teachers and enable them to spend more time teaching!
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Texas Music Administrators Conference
        </Typography>
        <Typography className={classes.indent}>
          I designed, built, and shipped a website for the TMAC organization. This group consists of the Fine Arts administrators across the state of Texas. The website was built using GatsbyJS, Firebase, Contentful, and Google Sheets API. The members of the group love it, and I still am their "webmaster" for the foreseeable future! <span>🤓</span>
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Drumsensei.com
        </Typography>
        <Typography className={classes.indent}>
          Personal blog site launched in June 2015. Rarely maintained, but a new version is "under construction". <span>😕</span>
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          Drumr
        </Typography>
        <Typography className={classes.indent}>
          Now defunct, alas. Drumr was my final project at The Iron Yard code school. It used React, Backbone, Parse, Sass, and Masonry. This app provided a searchable database for users to find drummers, add new drummers, or add existing drummers to a favorites list.
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="subtitle1"
        >
          The Mathew Group
        </Typography>
        <Typography className={classes.indent}>
          From 2005 to 2014, I designed and implemented websites for local high school band programs using Rapidweaver CMS and basic HTML and CSS. This is what got me hooked on making internet websites!
        </Typography>
      </ResumeSection>
    </>
  );
};

export default Resume;
