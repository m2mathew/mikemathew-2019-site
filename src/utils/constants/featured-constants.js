// External Dependencies
import React from 'react';

// Internal Dependencies
import AboutPresto from '../../components/about-presto';
import PrestoJune2019Image from '../../components/images/presto-june-2019-image';

// Local Variables
export const featuredData = [
  {
    about: <AboutPresto />,
    builtWith: [
      'ReactJS',
      'node',
      'Material-UI',
      'Netlify',
      'Heroku',
      'PostgreSQL',
    ],
    image: <PrestoJune2019Image />,
    title: 'Presto Assistant',
  },
];
