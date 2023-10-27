import React from 'react'
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
        <div className="px-2 my-5 font-lora bg-white">
        <h2 className="text-center box-border mb-4 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
            NOS PRESTATIONS 
            </h2>
        <Tabs defaultIndex={i}>
    <TabList>
      <Tab>SOINS VISAGE</Tab>
      <Tab>SOINS CORPS</Tab>
      <Tab>SOINS MAINS & PIEDS</Tab>
      <Tab>MAQUILLAGE</Tab>
      <Tab>MAQUILLAGE PERMANENT</Tab>
      <Tab>LES RITUELS</Tab>
      <Tab>RITUELS MINCEURS</Tab>
      <Tab>EPILATIONS</Tab>
    </TabList>

    <TabPanel>
    <SoinVisage />
    </TabPanel>
    <TabPanel>
      <SoinCorps />
    </TabPanel>
    <TabPanel>
      <SoinPediManu />
    </TabPanel>
    <TabPanel>
      <Maquillage />
    </TabPanel>
    <TabPanel>
      <MaquillagePermanent />
    </TabPanel>
    <TabPanel>
      <Rituel />
    </TabPanel>
    <TabPanel>
      <RituelMinceur />
    </TabPanel>
    <TabPanel>
      <Epilation />
    </TabPanel>
  </Tabs> 
        </div>
      
        </>
    )
}

export default Prestations
