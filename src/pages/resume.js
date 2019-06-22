// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import Header from '../components/header';
import SEO from '../components/seo';
import Subtitle from '../components/subtitle';

// Component Definition
const Resume = () => (
  <>
    <SEO title="Resume" />
    <Header />
    <Subtitle>Résumé</Subtitle>
  </>
);

export default Resume;
