import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Formations from './components/Formations'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Quisommenous from './components/Quisommenous'
import Epilation from './components/fiches/Epilation'
import SoinVisage from './components/fiches/SoinVisage'
import SoinCorps from './components/fiches/SoinCorps'
import Pedimani from './components/fiches/pedimani'
import Maquillage from './components/fiches/maquillage'
import Onglerie from './components/fiches/onglerie'
import Prestations from './components/Prestations'
import Footer from './components/Footer';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Hero } from './components/Hero';

const theme = createTheme({
  fontFamily: '"Montserrat", sans-serif',
  headings: {
    fontFamily: '"Cormorant Garamond", serif',
  },
  primaryColor: 'dark',
  colors: {
    'gold': [
      "#fdf8ef",
      "#f5edd8",
      "#eddcb5",
      "#e4ca8e",
      "#d4bb8a",
      "#C9A96E",
      "#B8944F",
      "#a07e3e",
      "#886a32",
      "#705527"
    ],
  },
});

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/formations" element={<PageTransition><Formations /></PageTransition>} />
        <Route path="/qui-sommes-nous" element={<PageTransition><Quisommenous /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/prestations" element={<PageTransition><Prestations /></PageTransition>} />
        <Route path="/formations/epilation" element={<PageTransition><Epilation /></PageTransition>} />
        <Route path="/formations/soin-visage" element={<PageTransition><SoinVisage /></PageTransition>} />
        <Route path="/formations/soin-corps" element={<PageTransition><SoinCorps /></PageTransition>} />
        <Route path="/formations/pedicure-manicure" element={<PageTransition><Pedimani /></PageTransition>} />
        <Route path="/formations/maquillage" element={<PageTransition><Maquillage /></PageTransition>} />
        <Route path="/formations/onglerie" element={<PageTransition><Onglerie /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
 return (
    <MantineProvider theme={theme}>
      <Notifications />
      <BrowserRouter>
        <Hero />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </MantineProvider>
 );
}

export default App
