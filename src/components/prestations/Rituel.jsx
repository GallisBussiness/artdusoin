import { motion } from 'framer-motion'

function Rituel() {
    const rituels = [
      { nom: "Rituel Prestige", duree: "1h 30 min", prix: "70 €", desc: "Après une exfoliation à la pulpe de coco, plongez au cœur du lagon pour un enveloppement aux senteurs de tiaré paradisiaque et voyagez à travers les pressions lentes et harmonieuses d'un massage drainant. Une sensation de détente et d'évasion vous envahit. Gommage, massage et thé." },
      { nom: "Rituel Thalasso Minéral", duree: "2h 30 min", prix: "145 €", desc: "Sous l'effet conjugué des boues marines naturelles et des sels marins, ce soin vous offre une exfoliation détoxifiante, une hydratation profonde et une douceur extrême. Retrouvez la pureté de votre corps et de votre visage. Gommage, enveloppement, soin visage, massage et thé." },
      { nom: "Rituel Ancestral", duree: "4h", prix: "270 €", desc: "Issu d'une tradition ancestrale orientale, ce soin vous invite à purifier votre corps en profondeur grâce aux vertus exfoliantes du savon noir d'Essaouira, enveloppé par la douceur du rhassoul et de ses eaux florales. Gommage, enveloppement, massage, thé, soin visage, beauté des mains et pieds." },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rituels.map((soin, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-gradient-to-br from-blush-50 to-cream-100 rounded-2xl border border-blush-100 hover:border-blush-300 hover:shadow-soft-lg transition-all duration-500 p-6 md:p-8 hover:-translate-y-1"
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

export default Rituel
