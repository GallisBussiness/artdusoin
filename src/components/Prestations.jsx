import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSearchParams } from 'react-router-dom'
import SoinVisage from './prestations/SoinVisage';
import SoinCorps from './prestations/SoinCorps';
import SoinPediManu from './prestations/SoinPediManu';
import Maquillage from './prestations/Maquillage';
import MaquillagePermanent from './prestations/MaquillagePermanent';
import Rituel from './prestations/Rituel';
import RituelMinceur from './prestations/RituelMinceur';
import Epilation from './prestations/Epilation';

const getIndexByParam =  (text) => {
   switch (text) {
       case "soin-visage":
           return 0;
        case "soin-corps":
            return 1;
        case "pedicure-manicure":
            return 2;
        case "maquillage":
            return 3;
        case "rituel":
            return 5;
        case "epilation":
            return 7;
       default:
           return 0;
   }
}

function Prestations() {
   const [params] = useSearchParams()
   const i = getIndexByParam(params.get('q')) ?? 0
    return (
        <>
        <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-black uppercase">Nos Prestations</h2>
          <div className="separator"></div>
        </div>
        <Tabs defaultIndex={i} className="font-montserrat">
    <TabList className="flex flex-wrap justify-center gap-2 mb-10 border-b-0">
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Soins Visage</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Soins Corps</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Epilations</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Mains &amp; Pieds</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Rituels</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Rituels Minceurs</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Maquillage</Tab>
      <Tab className="px-4 py-2 text-xs tracking-widest2 uppercase cursor-pointer border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-all duration-300" selectedClassName="!bg-black !text-white !border-black">Maquillage Permanent</Tab>
    </TabList>

    <TabPanel>
    <SoinVisage />
    </TabPanel>
    <TabPanel>
      <SoinCorps />
    </TabPanel>
    <TabPanel>
    <Epilation />
    </TabPanel>
    <TabPanel>
    <SoinPediManu />
    </TabPanel>
    <TabPanel>
      <Rituel />
    </TabPanel>
    <TabPanel>
    <RituelMinceur />
    </TabPanel>
    <TabPanel>
    <Maquillage />
    </TabPanel>
    <TabPanel>
    <MaquillagePermanent />
    </TabPanel>
  </Tabs> 
        </div>
        </div>
      
        </>
    )
}

export default Prestations
