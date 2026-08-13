import { motion } from 'framer-motion'

function SoinCorps() {
    const massages = [
      { nom: "Massage Signature", duree: "1h 30 min", prix: "90 €", desc: "Cocktail riche de plusieurs techniques de modelage du monde. Laissez-vous bercer par cette expérience sensorielle unique et profonde." },
      { nom: "Massage Relaxant", duree: "1h", prix: "65 €", desc: "Issu d'une pratique ancestrale de Bali, ce modelage consiste à retrouver l'équilibre entre l'âme, le corps et l'esprit." },
      { nom: "Massage aux Pierres Chaudes", duree: "1h 30 min", prix: "80 €", desc: "Modelage millénaire chinois qui permet à l'énergie vitale du corps de circuler pour relier les zones des différents chakras. Retrouvez un bien-être extrême." },
    ]

    const specifiques = [
      { nom: "Soin du Buste", duree: "1h", prix: "55 €", desc: "Sublimez votre poitrine grâce à la richesse des oligo-éléments de notre soin de fermeté. Retrouvez la volupté de votre buste." },
      { nom: "Soin Précieux du Dos", duree: "1h", prix: "55 €", desc: "Après une exfoliation, des manœuvres appuyées et puissantes délassent les muscles des épaules, de la nuque et du dos, suivi d'un masque décontractant à la boue marine et aux huiles essentielles." },
    ]

    const soinsCorps = [
      { nom: "Gommage Minéral", duree: "1h", prix: "45 €", desc: "Pour une peau douce et satinée éliminant les impuretés et les toxines. Parcourez notre bar à gommage aux parfums et textures gourmands.", extras: ["Gommage savon noir et huile d'olive", "Gommage au sel minéral et à l'huile chaude"] },
      { nom: "Rituel d'Enveloppement", duree: "1h", prix: "45 €", desc: "L'enveloppement corporel libère les tensions, élimine les toxines et hydrate la peau en profondeur.", extras: ["Enveloppement à la crème de rhassoul au miel — détoxifiant", "Enveloppement à la poudre de gingembre — hydratant et tonifiant"] },
    ]

    const renderCard = (soin, i) => (
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
        <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mb-3">{soin.duree}</p>
        <div className="w-10 h-[1px] bg-gold-400 mb-4 group-hover:w-16 transition-all duration-500"></div>
        <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">{soin.desc}</p>
        {soin.extras && (
          <div className="mt-4 space-y-2">
            {soin.extras.map((extra, j) => (
              <div key={j} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blush-400 mt-2 shrink-0"></span>
                <p className="font-montserrat text-xs text-neutral-700 font-medium">{extra}</p>
              </div>
            ))}
          </div>
        )}
        <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-montserrat tracking-widest2 uppercase text-gold-700 hover:text-gold-900 border-b border-gold-400 hover:border-gold-700 pb-1 transition-all duration-300">
          Réserver
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </a>
      </motion.div>
    )

    return (
      <div className="space-y-12">
        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Massage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {massages.map(renderCard)}
          </div>
        </div>

        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Soins Spécifiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifiques.map(renderCard)}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-soft img-zoom h-64 lg:h-auto"
            >
              <img src="/pexel_visage.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Soin corps" />
            </motion.div>
          </div>
        </div>

        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Soins Corps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soinsCorps.map(renderCard)}
          </div>
        </div>
      </div>
    )
}

export default SoinCorps
