import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NastavniBlok1Prikaz from './pages/nastavni-blok-1';
import NastavniBlok2Prikaz from './pages/nastavni-blok-2';
import NastavniBlokUcionice1Prikaz from './pages/nastavni-blok-ucionice-1';
import NastavniBlokUcionice2Prikaz from './pages/nastavni-blok-ucionice-2';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/nastavniblok/1" element={<NastavniBlok1Prikaz />} />
      <Route path="/nastavniblok/2" element={<NastavniBlok2Prikaz />} />
      <Route path="/nastavniblok/ucionice/1" element={<NastavniBlokUcionice1Prikaz />} />
      <Route path="/nastavniblok/ucionice/2" element={<NastavniBlokUcionice2Prikaz />} />
    </Routes>
  );
};

export default AppRoutes;
