// External Dependencies
import React from 'react';

// Internal Dependencies
import Layout from './components/layout';

// Component Definition
export default function wrapWithLayout({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
