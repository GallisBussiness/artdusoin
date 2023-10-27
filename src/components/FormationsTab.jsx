import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FormationCategorie from './FormationCategorie';


function FormationsTab() {
    return (
        <>
        <Tabs>
    <TabList>
      <Tab>Pedicure</Tab>
      <Tab>Manicure</Tab>
    </TabList>

    <TabPanel>
      <h2><FormationCategorie categorie="pedicure" /></h2>
    </TabPanel>
    <TabPanel>
      <h2><FormationCategorie categorie="manicure" /></h2>
    </TabPanel>
  </Tabs>
        </>
    )
}

export default FormationsTab
