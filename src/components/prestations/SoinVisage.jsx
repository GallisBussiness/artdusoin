function SoinVisage() {
    const soins = [
      { nom: "SOIN PURET\u00C9 D'ORIENT", duree: "45min", prix: "55 \u20AC", desc: "L\u2019eau de rose est utilis\u00E9 depuis l\u2019antiquit\u00E9 pour ses vertus r\u00E9g\u00E9n\u00E9rant et anti bact\u00E9riennes. Conseiller pour les peaux ternes, grasses et acn\u00E9iques." },
      { nom: "SOIN COCOONING DOUCEUR", duree: "1h", prix: "60 \u20AC", desc: "Ce soin est conseill\u00E9 pour les peaux d\u00E9hydrat\u00E9s et sensibles. Laissez-vous coconnez \u00E0 travers les vertus de l\u2019aleovera, retrouver la douceur et l\u2019\u00E9nergie de votre peau." },
      { nom: "SOIN THALASSO MINERAL", duree: "1h", prix: "70 \u20AC", desc: "Confort et puret\u00E9, ce soin du visage se prodigue dans une d\u00E9couverte profonde de l\u2019oc\u00E9an, recharge votre peau en oligo-\u00E9l\u00E9ment qui permet une hydratation intense." },
      { nom: "SOIN SOS OXYG\u00C8NE", duree: "1h 15 min", prix: "80 \u20AC", desc: "Pour lui redonner lumi\u00E8re et souplesse, soin pr\u00E9cieux revatilisant et anti-rides. Ce soin est une v\u00E9ritable p\u00E9pite d\u2019or sublime, votre beaut\u00E9 \u00E0 travers ce d\u2019exception." },
      { nom: "SOIN REPULPANT AU COLLAG\u00C8NE", duree: "1h 30 min", prix: "90 \u20AC", desc: "Pour lutter contre les premiers signes de l\u2019\u00E2ge, ce soin professionnel unique, gorge la peau de collag\u00E8ne marin natif, dont les mol\u00E9cules originelles, \u00E0 la biodisponibilit\u00E9 incomparable, regonflent les rides et ridules. La peau intens\u00E9ment hydrat\u00E9e, repulp\u00E9e et liss\u00E9e." },
      { nom: "SOIN D'EXCEPTION FERMET\u00C9", duree: "1h 30 min", prix: "110 \u20AC", desc: "Ce soin cellulaire sur mesure anti-aging de haute technologie se prodigue \u00E0 tous les types de peau. D\u00E9couvrez le r\u00E9sultat optimal et pr\u00E9server leurs effet dans le temps, retrouver une oxyg\u00E9nation cellulaire total de votre peau \u00E9clat et luminosit\u00E9." },
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

export default SoinVisage
