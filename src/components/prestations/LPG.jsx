import { motion } from 'framer-motion'

const PLANITY = "https://www.planity.com/lart-du-soin-57240-knutange"

const signatureVisage = [
  { nom: "Sublime Regard & Lèvres", duree: "30 min", prix: "65 €", desc: "Ce soin anti-âge ciblé estompe les poches et les cernes, lisse les rides du contour des yeux et de la bouche, repulpe les lèvres et rehausse les paupières pour ouvrir et défatiguer le regard." },
  { nom: "Rénovateur Anti-âge", duree: "50 min", prix: "85 €", desc: "Ce soin exfolie la peau en douceur et stimule le renouvellement cellulaire pour lisser les ridules, resserrer le grain de peau, unifier le teint tout en estompant les taches pigmentaires et imperfections cutanées." },
  { nom: "Hydratation Booster", duree: "50 min", prix: "75 €", desc: "Ce soin stimule la production d'acide hyaluronique et relance la micro-circulation pour hydrater intensément, repulper et lisser la peau tout en la protégeant des agressions extérieures et du vieillissement cutané." },
  { nom: "Peau Neuve", duree: "1h15", prix: "95 €", desc: "Grâce à une double exfoliation mécanique et chimique du visage et du cou, ce soin nettoie en profondeur et draine les toxines pour retrouver une peau saine, uniforme, lumineuse et des traits reposés." },
  { nom: "Régénération Cellulaire", duree: "1h25", prix: "125 €", desc: "Ce grand soin anti-âge complet visage, cou et mains stimule les méridiens pour favoriser l'élimination des toxines et la circulation des flux énergétiques, exfolie la peau pour unifier et illuminer le teint et booste la régénération cellulaire pour combler les rides et raffermir la peau." },
]

const signatureCorps = [
  { nom: "Détox", duree: "40 min", prix: "75 €", desc: "Active les échanges circulatoires pour agir sur la rétention d'eau et drainer les toxines. La peau est ré-oxygénée pour une sensation de légèreté immédiate." },
  { nom: "Relaxation", duree: "30 min", prix: "60 €", desc: "Détend les zones de tensions musculaires, élimine le stress et apporte une profonde sensation de détente pour l'équilibre du corps et de l'esprit." },
  { nom: "Endermopuncture", duree: "50 min", prix: "100 €", desc: "Soin global de l'ensemble du corps qui affine les formes, estompe l'aspect « peau d'orange », raffermit la peau tout en activant les échanges circulatoires et en drainant les toxines." },
  { nom: "Vitalité - Stress - Sommeil", duree: "40 min", prix: "80 €", desc: "Ce soin de l'ensemble du corps diminue le stress, augmente la vitalité et améliore la qualité du sommeil pour apporter un mieux-être global tout en stimulant les défenses naturelles." },
]

const cureVisage = [
  { nom: "Soin sur Mesure", duree: "10 à 40 min", prix: "35 à 65 €", desc: "Votre soin sur mesure : 1 à 9 zones au choix — front, regard anti-rides, regard poches et cernes, bouche, double menton, ovale, cou, décolleté, mains." },
  { nom: "Éclat", duree: "20 min", prix: "35 €", desc: "Soin classique de 20 minutes." },
  { nom: "Détente", duree: "25 min", prix: "45 €", desc: "Soin classique de 25 minutes." },
  { nom: "Décolleté et Buste", duree: "30 min", prix: "55 €", desc: "Soin classique de 30 minutes." },
  { nom: "Anti-âge Repulpant", duree: "35 min", prix: "65 €", desc: "Soin classique de 35 minutes." },
  { nom: "Anti-âge Fermeté", duree: "35 min", prix: "65 €", desc: "Soin classique de 35 minutes." },
  { nom: "Anti-âge Affinant", duree: "35 min", prix: "65 €", desc: "Soin classique de 35 minutes." },
]

const cureMinceur = [
  { nom: "Soin sur Mesure", duree: "10 à 40 min", prix: "35 à 65 €", desc: "Votre soin sur mesure : 1 à 11 zones au choix — bras, dos, taille, ventre, culotte de cheval, fesses, cuisses avant et arrière, intérieur cuisses, genoux, mollets." },
  { nom: "Jeune Maman", duree: "30 min", prix: "60 €", desc: "Cible les zones critiques (ventre, taille, fesses, cuisses) pour retrouver une silhouette harmonieuse après l'arrivée de bébé et apporter une véritable sensation de bien-être." },
  { nom: "Anti-cellulite", duree: "40 min", prix: "65 €", desc: "Déstocke les graisses localisées, relance les échanges circulatoires et raffermit pour retrouver une peau plus lisse, plus ferme et un corps plus léger. Ce soin agit sur tous les types de cellulite (adipeuse, aqueuse et fibreuse)." },
]

const optionsVisage = [
  { nom: "Double Nettoyage de Peau", duree: "10 min", prix: "10 €" },
  { nom: "Pose de Masque Visage", duree: "20 min", prix: "20 €" },
  { nom: "Pose de Masque Contour Yeux", duree: "12 min", prix: "12 €" },
]

function LPG() {
    const renderCard = (soin, i) => (
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
        <a href={PLANITY} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-montserrat tracking-widest2 uppercase text-gold-700 hover:text-gold-900 border-b border-gold-400 hover:border-gold-700 pb-1 transition-all duration-300">
          Réserver
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </a>
      </motion.div>
    )

    const renderOption = (opt, i) => (
      <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-white/60 last:border-b-0">
        <div>
          <p className="font-cormorant text-base text-neutral-900 font-medium tracking-wider uppercase">{opt.nom}</p>
          <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mt-0.5">{opt.duree}</p>
        </div>
        <span className="font-cormorant text-lg text-gold-600 font-light shrink-0">{opt.prix}</span>
      </div>
    )

    const renderForfaits = (cible) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-gold-50 to-blush-50 rounded-2xl border border-gold-200 p-6 md:p-8"
      >
        <p className="font-cormorant text-xl md:text-2xl text-neutral-900 font-light tracking-wider uppercase mb-1">Forfaits &amp; Cures</p>
        <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mb-6">Programmes endermologie® {cible}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white/70 rounded-xl p-5 border border-white">
            <p className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">Booster</p>
            <p className="font-montserrat text-xs text-gold-600 tracking-widest uppercase mt-1 mb-3">10 séances · 2 par semaine</p>
            <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">20 min : 470 € · 30 min : 670 € · 40 min : 870 €</p>
            <p className="font-montserrat text-xs text-neutral-400 mt-3 leading-relaxed">Offerts : bilan personnalisé initial, {cible === "visage" ? "kit endermologie® visage" : "tenue endermowear™"} et booster de vitalité.</p>
          </div>
          <div className="bg-white/70 rounded-xl p-5 border border-white">
            <p className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">Optimisation</p>
            <p className="font-montserrat text-xs text-gold-600 tracking-widest uppercase mt-1 mb-3">10 séances · maintien des résultats</p>
            <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">À partir de 940 €</p>
            <p className="font-montserrat text-xs text-neutral-400 mt-3 leading-relaxed">Offerts : bilan personnalisé intermédiaire et {cible === "visage" ? "soin visage Hydratation Booster" : "cosmétique endermologie® selon objectif"}.</p>
          </div>
          <div className="bg-white/70 rounded-xl p-5 border border-white">
            <p className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase">Réussite</p>
            <p className="font-montserrat text-xs text-gold-600 tracking-widest uppercase mt-1 mb-3">24 séances · booster + optimisation</p>
            <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">Sur devis — prise en charge complète</p>
            <p className="font-montserrat text-xs text-neutral-400 mt-3 leading-relaxed">Offerts : 4 séances endermologie®, bilan personnalisé initial et intermédiaire.</p>
          </div>
        </div>
      </motion.div>
    )

    const renderSection = (titre, soins) => (
      <div>
        <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-gold-500"></span>
          {titre}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soins.map(renderCard)}
        </div>
      </div>
    )

    return (
      <div className="space-y-14">
        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Soins Signature Visage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureVisage.slice(0, 4).map(renderCard)}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-soft img-zoom h-64 md:col-span-2 lg:col-span-1 lg:h-auto"
            >
              <img src="/lpg1.jpeg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Soins LPG Endermologie" />
            </motion.div>
            {signatureVisage.slice(4).map(renderCard)}
          </div>
        </div>
        {renderSection("Soins Signature Corps", signatureCorps)}

        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Soins Cure Visage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cureVisage.map(renderCard)}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blush-50 rounded-2xl border border-blush-200 p-6 md:p-7"
            >
              <p className="font-cormorant text-lg text-neutral-900 font-medium tracking-wider uppercase mb-1">Options</p>
              <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mb-3">Pour compléter votre soin</p>
              {optionsVisage.map(renderOption)}
            </motion.div>
            {renderForfaits("visage")}
          </div>
        </div>

        <div>
          <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-neutral-900 uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold-500"></span>
            Soins Cure Minceur
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cureMinceur.map(renderCard)}
            {renderForfaits("corps")}
          </div>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 text-center">
          <p className="font-cormorant text-lg md:text-xl text-gold-300 font-light tracking-wider uppercase mb-4">Avant toute cure</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-montserrat text-sm text-neutral-300">
            <span>Bilan personnalisé — 30 min : <span className="text-gold-400">60 €</span></span>
            <span>Kit Endermologie® visage : <span className="text-gold-400">25 €</span></span>
            <span>Tenue Endermowear™ : <span className="text-gold-400">25 €</span></span>
          </div>
          <p className="font-montserrat text-xs text-neutral-400 mt-5 leading-relaxed">Le nombre de séances nécessaires est déterminé par le bilan initial. Pour chaque soin, l'application des cosmétiques endermologie® est incluse.</p>
        </div>
      </div>
    )
}

export default LPG
