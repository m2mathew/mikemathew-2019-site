// External Dependencies
import React from 'react';

// Internal Dependencies
import Content from './content';
import Footer from './footer';
import TopNav from './top-nav';
// import Header from './header';

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
