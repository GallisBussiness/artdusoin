import { motion } from 'framer-motion'

function Epilation() {
    const visage = [
      { nom: "Épilation Lèvre Supérieure", duree: "15 min", prix: "10 €" },
      { nom: "Épilation Menton", duree: "15 min", prix: "10 €" },
      { nom: "Épilation Sourcils", duree: "15 min", prix: "10 €" },
      { nom: "Épilation Joues", duree: "15 min", prix: "10 €" },
    ]

    const eyeBrow = [
      { nom: "Restructuration du Regard", duree: "15 min", prix: "15 €" },
      { nom: "Teinture Sourcils", duree: "30 min", prix: "15 €" },
      { nom: "Teinture Cils", duree: "30 min", prix: "15 €" },
    ]

    const corps = [
      { nom: "Épilation Bras", duree: "20 min", prix: "18 €" },
      { nom: "Épilation Aisselles", duree: "15 min", prix: "12 €" },
      { nom: "Épilation Maillot Échancré", duree: "20 min", prix: "18 €" },
      { nom: "Épilation Maillot Complet", duree: "30 min", prix: "28 €" },
      { nom: "Épilation Demi-Jambes ou Cuisse", duree: "30 min", prix: "18 €" },
      { nom: "Épilation Jambes Complètes", duree: "45 min", prix: "27 €" },
    ]

    const masculin = [
      { nom: "Sourcils", duree: "20 min", prix: "15 €" },
      { nom: "Sourcils et Ligne", duree: "20 min", prix: "20 €" },
      { nom: "Nez", duree: "15 min", prix: "8 €" },
      { nom: "Oreilles", duree: "15 min", prix: "8 €" },
      { nom: "Bras", duree: "30 min", prix: "22 €" },
      { nom: "Aisselles", duree: "20 min", prix: "18 €" },
      { nom: "Maillots", duree: "30 min", prix: "45 €" },
      { nom: "Jambe Complète", duree: "1h", prix: "35 €" },
      { nom: "Torse", duree: "30 min", prix: "25 €" },
      { nom: "Dos", duree: "30 min", prix: "25 €" },
      { nom: "Fesses", duree: "30 min", prix: "22 €" },
      { nom: "Forfaits", duree: "", prix: "sur devis" },
    ]

    const forfaits2 = [
      "Demi-jambe + Aisselles — 26€",
      "Demi-jambe + Maillot Intégral — 39€",
      "Jambe Complète + Maillot Intégral — 50€",
      "Sourcil + Lèvres — 18€",
    ]

    const forfaits3 = [
      "Demi-jambe + Maillot Échancré + Aisselles — 45€",
      "Jambe Complète + Maillot Intégral + Aisselles — 60€",
      "Sourcil + Lèvres + Menton — 25€",
    ]

    const renderCard = (soin, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="group bg-white rounded-xl border border-neutral-100 hover:border-gold-300 hover:shadow-soft transition-all duration-300 p-5 hover:-translate-y-0.5"
      >
        <div className="flex items-start justify-between">
          <span className="font-cormorant text-base text-neutral-900 font-medium tracking-wider uppercase">{soin.nom}</span>
          <span className="font-cormorant text-lg text-gold-600 font-light ml-3 shrink-0">{soin.prix}</span>
        </div>
        {soin.duree && <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mt-2">{soin.duree}</p>}
        <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-montserrat tracking-widest2 uppercase text-gold-700 hover:text-gold-900 transition-all duration-300">
          Réserver
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </a>
      </motion.div>
    )

    const SectionTitle = ({ children }) => (
      <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
        <span className="w-8 h-[1px] bg-gold-500"></span>
        {children}
      </h3>
    )

    return (
      <div className="space-y-12">
        <div>
          <SectionTitle>Épilations Visage</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{visage.map(renderCard)}</div>
        </div>

        <div>
          <SectionTitle>Eye Brow Bar</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{eyeBrow.map(renderCard)}</div>
        </div>

        <div>
          <SectionTitle>Épilation Corps</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{corps.map(renderCard)}</div>
        </div>

        <div>
          <SectionTitle>Épilation Masculin</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{masculin.map(renderCard)}</div>
        </div>

        <div>
          <SectionTitle>Forfaits Femmes</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-neutral-100 hover:border-gold-300 hover:shadow-soft-lg transition-all duration-500 p-6 md:p-8"
            >
              <span className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">Forfait 2 Zones</span>
              <div className="w-10 h-[1px] bg-gold-400 my-4"></div>
              <div className="space-y-3">
                {forfaits2.map((f, i) => (
                  <p key={i} className="font-montserrat text-sm text-neutral-600 py-2 border-b border-neutral-100 last:border-0">{f}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-neutral-100 hover:border-gold-300 hover:shadow-soft-lg transition-all duration-500 p-6 md:p-8"
            >
              <span className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">Forfait 3 Zones</span>
              <div className="w-10 h-[1px] bg-gold-400 my-4"></div>
              <div className="space-y-3">
                {forfaits3.map((f, i) => (
                  <p key={i} className="font-montserrat text-sm text-neutral-600 py-2 border-b border-neutral-100 last:border-0">{f}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
}

export default Epilation
