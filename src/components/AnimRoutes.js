import React from 'react';

//Import pages
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import About from '../pages/About'
// Importing Routes Route and useLocation from react-router-dom
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// import Animate Presence from framer motion



const AnimRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname}  location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
};

export default AnimRoutes;
