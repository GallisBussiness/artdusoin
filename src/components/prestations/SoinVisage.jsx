import { motion } from 'framer-motion'

function SoinVisage() {
    const soins = [
      { nom: "Soin Pureté d'Orient", duree: "45 min", prix: "55 €", desc: "L'eau de rose est utilisée depuis l'antiquité pour ses vertus régénérantes et anti-bactériennes. Conseillé pour les peaux ternes, grasses et acnéiques." },
      { nom: "Soin Cocooning Douceur", duree: "1h", prix: "60 €", desc: "Ce soin est conseillé pour les peaux déshydratées et sensibles. Laissez-vous coconner à travers les vertus de l'aloe vera, retrouvez la douceur et l'énergie de votre peau." },
      { nom: "Soin Thalasso Minéral", duree: "1h", prix: "70 €", desc: "Confort et pureté, ce soin du visage se prodigue dans une découverte profonde de l'océan, recharge votre peau en oligo-éléments pour une hydratation intense." },
      { nom: "Soin SOS Oxygène", duree: "1h 15 min", prix: "80 €", desc: "Pour lui redonner lumière et souplesse, soin précieux revitalisant et anti-rides. Une véritable pépite d'or qui sublime votre beauté à travers ce soin d'exception." },
      { nom: "Soin Repulpant au Collagène", duree: "1h 30 min", prix: "90 €", desc: "Pour lutter contre les premiers signes de l'âge, ce soin professionnel gorge la peau de collagène marin natif, regonfle les rides et ridules. La peau intensément hydratée, repulpée et lissée." },
      { nom: "Soin d'Exception Fermeté", duree: "1h 30 min", prix: "110 €", desc: "Ce soin cellulaire sur mesure anti-aging de haute technologie se prodigue à tous les types de peau. Retrouvez une oxygénation cellulaire totale, éclat et luminosité." },
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

export default SoinVisage
