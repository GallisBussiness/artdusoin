import { motion } from 'framer-motion'

function RituelMinceur() {
    const soins = [
      { nom: "Soin Cryogénique", duree: "1h", prix: "55 €", desc: "Un enveloppement cryothérapie qui traite les sensations d'inconfort et de fatigue dans les jambes. L'efficacité du complexe algal, enrichi en menthol et camphre, est largement approuvée. La sensation de fatigue s'estompe pour une silhouette affinée." },
      { nom: "Détox Minceur Légèreté", duree: "1h 30 min", prix: "70 €", desc: "Concentré de performance et d'efficacité, ce soin minceur sur mesure zone par zone : gommage ultra exfoliant, double enveloppement effet chaud-froid hautement actif associé à un massage spécifique pour remodeler visiblement votre silhouette." },
      { nom: "Rituel Minceur Traditionnel", duree: "30 min", prix: "35 €", desc: "Massage amincissant localisé sur le ventre et les cuisses pour affiner visiblement la silhouette." },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {soins.map((soin, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-2xl border border-neutral-100 hover:border-gold-300 hover:shadow-soft-lg transition-all duration-500 p-6 md:p-7 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">{soin.nom}</span>
              <span className="font-cormorant text-xl text-gold-600 font-light ml-4 shrink-0">{soin.prix}</span>
            </div>
            <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mb-3">{soin.duree}</p>
            <div className="w-10 h-[1px] bg-gold-400 mb-4 group-hover:w-16 transition-all duration-500"></div>
            <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">{soin.desc}</p>
            <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-montserrat tracking-widest2 uppercase text-gold-700 hover:text-gold-900 border-b border-gold-400 hover:border-gold-700 pb-1 transition-all duration-300">
              Réserver
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </motion.div>
        ))}
      </div>
    )
}

export default RituelMinceur
