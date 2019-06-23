// External Dependencies
import React from 'react';

// Internal Dependencies
import PrestoJune2019Image from '../../components/images/presto-june-2019-image';
import ReactUserGroupJune2019Image from '../../components/images/react-user-group-june-2019-image';
import TmacJune2019Image from '../../components/images/tmac-june-2019-image';

// Local Variables
export const featuredData = [
  {
    about: <span>Presto is built to help fine arts teachers organize their administrative tasks. Parents, students, and administrators can also use Presto to access data about the programs, pay fees, submit forms, and more. This is built with <span>❤️</span> for teachers to enable them to spend more time teaching!</span>,
    builtWith: [
      'ReactJS',
      'node',
      'Material-UI',
      'Netlify',
      'Heroku',
      'PostgreSQL',
    ],
    image: <PrestoJune2019Image />,
    link: 'https://www.presto-assistant.com/',
    title: 'Presto Assistant',
  },
  {
    about: <span>The TMAC website is built to present information about what the organization does and to provide members with a way to securely log in and pay dues. This Gatsby site is kept in sync with a Firebase Realtime database. That data store is synced to a several Google Sheets in a two-way sync. It's been really fun to build and useful to the members!</span>,
    builtWith: [
      'ReactJS',
      'GatsbyJS',
      'Material-UI',
      'Firebase',
      'Paypal',
      'Netlify',
      'Contentful',
      'Google Sheets API',
    ],
    image: <TmacJune2019Image />,
    link: 'https://www.texasmusicadmin.com/',
    title: 'Texas Music Administrators Conference',
  },
  {
    about: <span>The ReactJS Dallas User Group has been going strong since March 2016. For one of my talks about dealing with "Gatsby Gotchas", I spun up a Gatsby site and deployed it on Netlify in only a few minutes. It was magical! <span>🦄</span> The site is open-source under the ReactJS Dallas repository, so hopefully our community can help keep it running!</span>,
    builtWith: [
      'ReactJS',
      'GatsbyJS',
      'Material-UI',
      'Firebase',
      'Netlify',
    ],
    image: <ReactUserGroupJune2019Image />,
    link: 'https://www.reactjsdallas.com/',
    title: 'ReactJS Dallas User Group',
  },
];
