// External Dependencies
import React from 'react';

// Internal Dependencies
import Content from './content';
// import Header from './header';
// import NProgressBar from './nprogress-bar';
import TopNav from './top-nav';
// import SkipNav from '../components/skip-nav';
// import Footer from './footer';

// Component Definition
export default function Layout({ children }) {
  return (
    <>
      {/* <NProgressBar /> */}
      {/* <SkipNav>Skip to content</SkipNav> */}
      <TopNav />
      <Content>{children}</Content>
      <footer>
        © {new Date().getFullYear()}{' '}Mike Mathew
      </footer>
      {/* <Footer /> */}
    </>
  );
}
