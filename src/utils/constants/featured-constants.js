// External Dependencies
import React from 'react';

// Internal Dependencies
import PrestoJune2019Image from '../../components/images/presto-june-2019-image';
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
];
