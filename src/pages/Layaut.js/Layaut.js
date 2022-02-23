import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';
import { Footer } from '../../components';

const Layaut = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layaut;