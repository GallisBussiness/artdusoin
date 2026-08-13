import { motion } from 'framer-motion'

function Maquillage() {
    const soins = [
      { nom: "Maquillage Jour", duree: "1h", prix: "25 €" },
      { nom: "Maquillage Soirée", duree: "45 min", prix: "30 €" },
      { nom: "Maquillage Mariée", duree: "1h 15 min", prix: "60 €" },
      { nom: "Essai Maquillage Mariée", duree: "1h", prix: "40 €" },
      { nom: "Cours d'Auto-Maquillage", duree: "1h", prix: "50 €" },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {soins.map((soin, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-white rounded-2xl border border-neutral-100 hover:border-gold-300 hover:shadow-soft-lg transition-all duration-500 p-6 md:p-7 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">{soin.nom}</span>
              <span className="font-cormorant text-xl text-gold-600 font-light ml-4 shrink-0">{soin.prix}</span>
            </div>
            <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase">{soin.duree}</p>
            <div className="w-10 h-[1px] bg-gold-400 mt-4 group-hover:w-16 transition-all duration-500"></div>
            <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-montserrat tracking-widest2 uppercase text-gold-700 hover:text-gold-900 border-b border-gold-400 hover:border-gold-700 pb-1 transition-all duration-300">
              Réserver
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </motion.div>
        ))}
      </div>
    )
}

export default Maquillage
