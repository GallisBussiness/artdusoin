import { motion } from 'framer-motion'

function SoinPediManu() {
    const onglerie = [
      { nom: "Pose Faux Ongles Gel French", duree: "1h 30 min", prix: "60 €" },
      { nom: "Pose Faux Ongles Gel", duree: "1h 30 min", prix: "55 €" },
      { nom: "Chablon", duree: "1h 30 min", prix: "65 €" },
      { nom: "Ongle Cassé Hors Remplissage", duree: "15 min", prix: "5 €" },
      { nom: "Ongle Cassé en Remplissage", duree: "1h", prix: "2 €" },
      { nom: "Décor d'Ongle", duree: "1h", prix: "2 €" },
      { nom: "Supplément Strass", duree: "1h", prix: "1 €" },
    ]

    const pediManu = [
      { nom: "Manucure", duree: "45 min", prix: "30 €" },
      { nom: "Beauté des Pieds", duree: "1h", prix: "50 €" },
      { nom: "Forfait Mains et Pieds", duree: "1h 30 min", prix: "75 €" },
      { nom: "Forfait Thermal (Masque + Massage)", duree: "30 min", prix: "30 €" },
      { nom: "Pose Vernis Main", duree: "30 min", prix: "10 €" },
      { nom: "Pose Vernis Permanent (mains ou pieds)", duree: "45 min", prix: "28 €" },
      { nom: "Dépose Vernis Permanent", duree: "30 min", prix: "10 €" },
      { nom: "Forfait Pose Vernis Permanent (mains et pieds)", duree: "1h 15 min", prix: "50 €" },
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
        <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mt-2">{soin.duree}</p>
        <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-montserrat tracking-widest2 uppercase text-gold-700 hover:text-gold-900 transition-all duration-300">
          Réserver
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </a>
      </motion.div>
    )

    return (
      <div className="space-y-12">
        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Onglerie
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onglerie.map(renderCard)}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-soft img-zoom h-64 md:row-span-2 md:h-auto"
            >
              <img src="/onglerie.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Onglerie" />
            </motion.div>
          </div>
        </div>

        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Pédicure - Manucure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pediManu.map(renderCard)}
          </div>
        </div>
      </div>
    )
}

export default SoinPediManu
