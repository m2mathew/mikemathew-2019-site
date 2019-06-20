 // External Dependencies
import React from 'react';

// Internal Dependencies
import Layout from './components/layout';
import theme from './components/theme';

// Component Definition
export default function wrapWithLayout({ element, props }) {
  console.log('wrapWithLayout : Element :', element);
  return (
    <Layout
      theme={theme}
      {...props}
    >
      {element}
    </Layout>
  );
}
