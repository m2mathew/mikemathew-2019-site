// External Dependencies
import Divider from '@material-ui/core/Divider';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import NetlifyBlurbImage from '../components/images/netlify-blurb-image';
import NetlifyLogo from '../components/netlify-logo';
import NetlifyWoodyBuzzImage from '../components/images/netlify-woody-buzz-image';
import SEO from '../components/seo';
import YesBabyImage from '../components/images/yes-baby-image';

// Local Variables
const useStyles = makeStyles(theme => ({
  emphasis: {
    fontStyle: 'italic',
  },
  emphasizedParagraph: {
    fontStyle: 'italic',
    margin: '16px 0',
  },
  imageWrapper: {
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
    border: '2px solid darkgrey',
    borderRadius: 5,
  },
  netlifyHeader: {
    fontFamily: 'Rubik Mono One',
    margin: '64px 0',
  },
  paragraph: {
    margin: '16px 0',
  },
  purple: {
    color: 'rebeccapurple',
    fontWeight: 700,
  },
  story: {
    textAlign: 'left',
  },
  emoji: {
    display: 'inline-block',
    margin: '0 4px',
    transform: 'rotate(19deg) translateY(3px)',
  },
}));

// Component Definition
const NetlifyPage = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <SEO title="Netlify" />
      <NetlifyLogo />
      <Typography className={classes.netlifyHeader} variant="h3">
        Hey, Friends!
        <div className={classes.emoji}>👋</div>
      </Typography>
      <section className={classes.story}>
        <Typography className={classes.paragraph}>
          Oh, hello. I was just about to start telling a story. You are welcome to read along.
        </Typography>
        <Divider />
        <Typography className={classes.paragraph}>
          Long ago we built websites by putting our static files on a server. Sometimes it was a server that we owned, but most people found it easier to pay a hosting company to host the files. A webmaster would log in to the "cPanel" <span className={classes.emoji}>😫</span> to add more files or update the site.
        </Typography>
        <Typography className={classes.emphasizedParagraph}>
          <strong>We were truly living in dark times.</strong>
        </Typography>
        <Typography className={classes.paragraph}>
          But some very smart people figured out a way to make it easier to send files away to a far-away computer to make the website available very quickly. The webmaster's life would be so much easier henceforth.
        </Typography>
        <div className={classes.imageWrapper}>
          <NetlifyBlurbImage />
        </div>
        <Divider className={classes.paragraph} />
        <Typography className={classes.paragraph}>
          My name is Michael D. Mathew, but nearly everyone calls me Mike. In my journey along to path to front-end-enlightenment, I started the ReactJS Dallas User Group. About a year into our events I got word of a man named Brian Douglas coming through Dallas. He came to the offices where I work at Call-Em-All for our event one Tuesday evening. His presentation was funny, informative, and all about Netlify. Netlify had sent him out into the world to spread the good word to the four corners of the earth. Like many of the talks at meetups, I knew I had seen something useful, but I had no immediate need for it.
        </Typography>
        <Typography className={classes.paragraph}>
          Fast forward about a year. I am building a website for a client. The scope starts off small, but I become plagued with build errors as I added features. A little voice way back in my head whispers <span className={classes.emphasis}>"netlify"</span>. Lo, what is that. Oh yeah...my internet friend <a className="link" href="https://twitter.com/bdougieYO" target="_blank" rel="noreferer nopener">@bdougieYO</a> showed me what Netlify is. I made an account and had a test deploy running in a few minutes. The experience of using Netlify was top-notch. The site was beautiful—I love <span className={classes.purple}>purple</span> in any flavor! I was hooked and started telling everyone who would listen about Netlify.
        </Typography>
        <div className={classes.imageWrapper}>
          <NetlifyWoodyBuzzImage />
        </div>
        <Typography className={classes.paragraph}>
          Many moons after, one of our events for the ReactJS group was going to be hosted by Dialexa in a very hip part of Dallas called Deep Ellum. We had a dearth of speakers at that time. I presented a talk about "<a className="link" href="http://drumsensei.com/warehouse/gatsby-gotchas.pdf" target="_blank" rel="noreferer nopener">Gatsby Gotchas</a>" that included a slide about deploying your repo on Netlify. In the <a className="link" href="https://twitter.com/lesliecdubs/status/1039680957257854976" target="_blank" rel="noreferer nopener">front row</a> at this event was my friend Leslie Cohn-Wein, who is as jazzed about the JAMstack as your ol' pal Mike. I showed in one slide how to deploy a site on Netlify, and Leslie <a className="link" href="https://twitter.com/lesliecdubs/status/1039683592807493632" target="_blanK" rel="noreferer nopener">captured the moment!</a>
        </Typography>
        <Typography className={classes.paragraph}>
          All that being said, Netlify is one of the few gems on the interwebs where I feel like the people making the application really sweat the details. So much polish, it just feels right when using it. If I go to change something or find a setting, the feature not only exists, but I immediately understand what it does and how to use it. It's magical! <span className={classes.emoji}>✨</span>
        </Typography>
        <Typography className={classes.paragraph}>
          Later, Leslie ends up working at Netlify. I ask her from time to time about any front end positions open at Netlify. One day last week out of the blue she sends me a note about an open front end remote position.
        </Typography>
        <div className={classes.imageWrapper}>
          <YesBabyImage />
        </div>
        <Typography className={classes.paragraph}>
          I would love to chat with the Netlify team about what it takes to join this cabal of internet super-stars. I recently told a friend that I wanted to be like Sarah Drasner when I grow up. Working with her might help!
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="h6"
        >
          <strong>Thanks for your time, oh brilliant ones!</strong>
        </Typography>
      </section>
    </>
  );
};

export default NetlifyPage;
