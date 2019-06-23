// External Dependencies
import React from 'react';

// Internal Dependencies
import Content from './content';
import Footer from './footer';
import Header from './header';
import TopNav from './top-nav';

// Component Definition
export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
