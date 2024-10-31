import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ minHeight: '80vh', paddingTop: '2rem' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
