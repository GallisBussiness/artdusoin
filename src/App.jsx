import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
  defaultGradient:{
    deg:45,
    from: 'blue',
    to: 'green'
  },
  colors: {
    'green': [
      "#f2faed",
      "#e6f1de",
      "#cbe1bb",
      "#afd095",
      "#96c275",
      "#87b962",
      "#7eb556",
      "#6ba045",
      "#5e8e3c",
      "#4e7b2e"
    ],
    'blue': [
      "#ebf7ff",
      "#d6ecfa",
      "#a7d9f7",
      "#77c4f5",
      "#55b2f4",
      "#43a7f4",
      "#3aa2f5",
      "#2e8dda",
      "#227ec3",
      "#016cac"
    ],
    'yellow':[
      "#fdfce5",
      "#f8f6d3",
      "#f0ecaa",
      "#e7e17c",
      "#e0d957",
      "#dbd33e",
      "#d9d02f",
      "#c0b820",
      "#aaa316",
      "#938c03"
    ]
  },
});

function App() {
 return (
          <MantineProvider theme={theme}>
          <Notifications />
       <BrowserRouter>
       <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/qui-sommes-nous" element={<Quisommenous />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/prestations" element={<Prestations />} />
      <Route path="/formations/epilation" element={<Epilation />} />
      <Route path="/formations/soin-visage" element={<SoinVisage />} />
      <Route path="/formations/soin-corps" element={<SoinCorps />} />
      <Route path="/formations/pedicure-manicure" element={<Pedimani />} />
      <Route path="/formations/maquillage" element={<Maquillage />} />
      <Route path="/formations/onglerie" element={<Onglerie />} />
    </Routes>
    <Footer />
    </BrowserRouter>
     </MantineProvider>
 );
}

export default App
