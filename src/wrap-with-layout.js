 // External Dependencies
import React from 'react';

// Internal Dependencies
import Layout from './layout';

// Component Definition
export default function wrapWithLayout({ element, props }) {
  console.log('Element', element);
  return <Layout {...props}>{element}</Layout>;
}
