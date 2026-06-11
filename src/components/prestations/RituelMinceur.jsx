function RituelMinceur() {
    const soins = [
      { nom: "SOINS CRYOG\u00C9NIQUE", duree: "1h", prix: "55 \u20AC", desc: "Un enveloppement - soin cryoth\u00E9rapie, qui traite les sensations d\u2019inconfort et de fatigue dans les jambes. Un traitement dont l\u2019efficacit\u00E9 du complexe algal, enrichi en menthol et camphre est tr\u00E8s largement approuv\u00E9e. La sensation de fatigue douloureuse des jambes s\u2019estompent pour une silhouette affin\u00E9e." },
      { nom: "DETOX MINCEUR L\u00C9G\u00C8RET\u00C9", duree: "1h 30 min", prix: "70 \u20AC", desc: "Concentr\u00E9 de performance et d\u2019efficacit\u00E9, ce soin minceur professionnel sur mesure zone \u00E0 zone, gommage ultra exfoliant, double enveloppement effet chaud froid hautement actif associ\u00E9es \u00E0 un massage sp\u00E9cifique pour remodeler visiblement votre silhouette. Gommage-enveloppement-massage-minceur localis\u00E9." },
      { nom: "RITUEL MINCEUR TRADITIONNEL", duree: "30 min", prix: "35 \u20AC", desc: "Massage amincissant localis\u00E9 sur le ventre, les cuisses pour affiner visiblement la silhouette." },
    ];

    return (
      <div className="px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soins.map((soin, i) => (
            <div key={i} className="border border-neutral-200 hover:border-black transition-colors duration-300 p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="font-cormorant text-lg text-black font-medium tracking-wider uppercase">{soin.nom}</span>
                <span className="font-cormorant text-xl text-black font-light ml-4 shrink-0">{soin.prix}</span>
              </div>
              <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mb-3">{soin.duree}</p>
              <div className="w-8 h-px bg-gold mb-4"></div>
              <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">{soin.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default RituelMinceur
