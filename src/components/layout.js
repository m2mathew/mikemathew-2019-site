// External Dependencies
import React from 'react';

// Internal Dependencies
import Content from './content';
import Footer from './footer';
import TopNav from './top-nav';

// Component Definition
export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
