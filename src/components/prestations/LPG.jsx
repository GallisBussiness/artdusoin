import { motion } from 'framer-motion'

function LPG() {
    const soins = [
      { nom: "Éclat", duree: "20 min", prix: "35 €", desc: "Soin classique de 20 minutes." },
      { nom: "Détente", duree: "25 min", prix: "45 €", desc: "Soin classique de 25 minutes." },
      { nom: "Décolleté et Buste", duree: "30 min", prix: "55 €", desc: "Soin classique de 30 minutes." },
      { nom: "Anti-âge Repulpant", duree: "35 min", prix: "65 €", desc: "Soin classique de 35 minutes." },
      { nom: "Anti-âge Fermeté", duree: "35 min", prix: "65 €", desc: "Soin classique de 35 minutes." },
      { nom: "Anti-âge Affinant", duree: "35 min", prix: "65 €", desc: "Soin classique de 35 minutes." },
      { nom: "Sublime Regard & Lèvres", duree: "35 min", prix: "65 €", desc: "Ce soin anti-âge ciblé estompe les poches et les cernes, lisse les rides du contour des yeux et de la bouche, repulpe les lèvres et rehausse les paupières pour ouvrir et défatiguer le regard." },
      { nom: "Rénovateur Anti-âge", duree: "35 min", prix: "85 €", desc: "Ce soin exfolie la peau en douceur et stimule le renouvellement cellulaire pour lisser les ridules, resserrer le grain de peau, unifier le teint tout en estompant les taches pigmentaires et imperfections cutanées." },
      { nom: "Hydratation Booster", duree: "35 min", prix: "75 €", desc: "Ce soin stimule la production d'acide hyaluronique et relance la micro-circulation pour hydrater intensément, repulper et lisser la peau tout en la protégeant des agressions extérieures et du vieillissement cutané." },
      { nom: "Peau Neuve", duree: "35 min", prix: "95 €", desc: "Grâce à une double exfoliation mécanique et chimique du visage et du cou, ce soin nettoie en profondeur et draine les toxines pour retrouver une peau saine, uniforme, lumineuse et des traits reposés." },
      { nom: "Régénération Cellulaire", duree: "35 min", prix: "125 €", desc: "Ce grand soin anti-âge complet visage, cou et mains stimule les méridiens pour favoriser l'élimination des toxines et la circulation des flux énergétiques, exfolie la peau pour unifier et illuminer le teint et booste la régénération cellulaire pour combler les rides et raffermir la peau." },
      { nom: "Jeune Maman", duree: "35 min", prix: "60 €", desc: "Cible les zones critiques (ventre, taille, fesses, cuisses) pour retrouver une silhouette harmonieuse après l'arrivée de bébé et apporter une véritable sensation de bien-être." },
      { nom: "Anti-cellulite", duree: "35 min", prix: "65 €", desc: "Déstocke les graisses localisées, relance les échanges circulatoires et raffermit pour retrouver une peau plus lisse, plus ferme et un corps plus léger. Ce soin agit sur tous les types de cellulite (adipeuse, aqueuse et fibreuse)." },
      { nom: "Détox", duree: "35 min", prix: "75 €", desc: "Active les échanges circulatoires pour agir sur la rétention d'eau et drainer les toxines. La peau est ré-oxygénée pour une sensation de légèreté immédiate." },
      { nom: "Relaxation", duree: "35 min", prix: "60 €", desc: "Détend les zones de tensions musculaires, élimine le stress et apporte une profonde sensation de détente pour l'équilibre du corps et de l'esprit." },
      { nom: "Endermopuncture", duree: "35 min", prix: "100 €", desc: "Soin global de l'ensemble du corps qui affine les formes, estompe l'aspect « peau d'orange », raffermit la peau tout en activant les échanges circulatoires et en drainant les toxines." },
      { nom: "Vitalité - Stress - Sommeil", duree: "35 min", prix: "80 €", desc: "Ce soin de l'ensemble du corps diminue le stress, augmente la vitalité et améliore la qualité du sommeil pour apporter un mieux-être global tout en stimulant les défenses naturelles." },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {soins.map((soin, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
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

export default LPG
