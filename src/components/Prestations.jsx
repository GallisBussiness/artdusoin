import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import SoinVisage from './prestations/SoinVisage';
import SoinCorps from './prestations/SoinCorps';
import SoinPediManu from './prestations/SoinPediManu';
import Maquillage from './prestations/Maquillage';
import MaquillagePermanent from './prestations/MaquillagePermanent';
import Rituel from './prestations/Rituel';
import RituelMinceur from './prestations/RituelMinceur';
import Epilation from './prestations/Epilation';

const getIndexByParam = (text) => {
  switch (text) {
    case "soin-visage": return 0;
    case "soin-corps": return 1;
    case "epilation": return 2;
    case "pedicure-manicure": return 3;
    case "rituel": return 4;
    case "rituel-minceur": return 5;
    case "maquillage": return 6;
    case "maquillage-permanent": return 7;
    default: return 0;
  }
}

const tabLabels = [
  "Soins Visage",
  "Soins Corps",
  "Épilations",
  "Mains & Pieds",
  "Rituels",
  "Rituels Minceur",
  "Maquillage",
  "Maquillage Permanent",
]

function Prestations() {
  const [params] = useSearchParams()
  const i = getIndexByParam(params.get('q')) ?? 0

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="container-lux pt-16 md:pt-20 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4 block">Nos services</span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">Nos Prestations</h2>
          <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
          <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mt-4 max-w-xl mx-auto">
            Une gamme complète de soins d'exception pour sublimer votre beauté
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="container-lux pb-20 md:pb-28">
        <Tabs defaultIndex={i} className="font-montserrat" selectedTabClassName="!bg-neutral-900 !text-white !border-neutral-900">
          <TabList className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 border-0 bg-transparent">
            {tabLabels.map((label, idx) => (
              <Tab
                key={idx}
                className="px-5 py-3 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300 rounded-full bg-white shadow-soft select-none"
              >
                {label}
              </Tab>
            ))}
          </TabList>

          <TabPanel><SoinVisage /></TabPanel>
          <TabPanel><SoinCorps /></TabPanel>
          <TabPanel><Epilation /></TabPanel>
          <TabPanel><SoinPediManu /></TabPanel>
          <TabPanel><Rituel /></TabPanel>
          <TabPanel><RituelMinceur /></TabPanel>
          <TabPanel><Maquillage /></TabPanel>
          <TabPanel><MaquillagePermanent /></TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Prestations
