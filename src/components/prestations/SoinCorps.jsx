function SoinCorps() {
    const massages = [
      { nom: "MASSAGE SIGNATURE", duree: "1h 30 Min", prix: "90 \u20AC", desc: "Cocktail riche de plusieurs techniques de modelage du monde. Laissez-vous bercer par cette exp\u00E9rience sensorielle unique et profonde." },
      { nom: "MASSAGE RELAXANT", duree: "1h", prix: "65 \u20AC", desc: "Issu d\u2019une pratique ancestral de Bali, ce modelage consiste a retrouv\u00E9 l\u2019\u00E9quilibre entre l\u2019\u00E2me, le corps et l\u2019esprit." },
      { nom: "MASSAGE AUX PIERRES CHAUDES", duree: "1h 30 Min", prix: "80 \u20AC", desc: "Modelage mill\u00E9naire chinois qui permet \u00E0 l\u2019\u00E9nergie vital du corps de circuler pour relier les zones des diff\u00E9rents chackras. Retrouver un bien-\u00EAtre extr\u00E8me." },
      { nom: "MASSAGE LOMI LOMI", duree: "1h", prix: "70 \u20AC", desc: "Issu d\u2019une tradition hawa\u00EFenne soin authentique empreinte de sagesse traditionnelle permettant de r\u00E9\u00E9quilibrer l\u2019energie du corps et de l\u2019esprit." },
    ];

    const specifiques = [
      { nom: "SOIN DU BUSTE", duree: "1h", prix: "55 \u20AC", desc: "Sublimez votre poitrine gr\u00E2ce \u00E0 la richesse des oligo-\u00E9l\u00E9ments de notre soin de fermet\u00E9. Retrouver la volupt\u00E9 de votre buste." },
      { nom: "SOIN PRECIEUX DU DOS", duree: "1h", prix: "55 \u20AC", desc: "Apr\u00E8s une exfoliation des manoeuvres appuy\u00E9es et puissante d\u00E9lassent des muscles des \u00E9paules de la nuque et du dos suivi d\u2019un masque d\u00E9contractant et hydratant \u00E0 la boue marine et aux huiles essentielles." },
    ];

    const soinsCorps = [
      { nom: "GOMMAGE MINERAL", duree: "1h", prix: "45 \u20AC", desc: "Pour une peau douce et satin\u00E9e \u00E9liminant les impuret\u00E9s et les toxines. Parcourez notre bar \u00E0 gommage au parfum et textures gourmande pour sublimer votre peau.", extras: ["Gommage savon noir et huile d\u2019olive", "Gommage au sel min\u00E9raux et \u00E0 l\u2019huile chaude"] },
      { nom: "RITUEL D'ENVELOPPEMENT", duree: "1h", prix: "45 \u20AC", desc: "L\u2019enveloppement corporel est une technique de soin qui consiste \u00E0 lib\u00E9rer les tensions, \u00E9limine les toxines, hydrate la peau de notre corps en profondeur.", extras: ["Enveloppement \u00E0 la cr\u00E8me de rhassoul somptueux au miel, detoxifiant, purrifiant", "Enveloppement \u00E0 la poudre de gingembre hydratant et tonifiant"] },
    ];

    const renderCard = (soin, i) => (
      <div key={i} className="border border-neutral-200 hover:border-black transition-colors duration-300 p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="font-cormorant text-lg text-black font-medium tracking-wider uppercase">{soin.nom}</span>
          <span className="font-cormorant text-xl text-black font-light ml-4 shrink-0">{soin.prix}</span>
        </div>
        <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mb-3">{soin.duree}</p>
        <div className="w-8 h-px bg-gold mb-4"></div>
        <p className="font-montserrat text-sm text-neutral-600 leading-relaxed">{soin.desc}</p>
        {soin.extras && (
          <div className="mt-3 space-y-1">
            {soin.extras.map((extra, j) => (
              <p key={j} className="font-montserrat text-xs text-black font-medium">{extra}</p>
            ))}
          </div>
        )}
      </div>
    );

    return (
      <div className="px-6 md:px-10 py-8 space-y-12">
        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Massage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {massages.map(renderCard)}
          </div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Soins Sp&eacute;cifiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifiques.map(renderCard)}
            <div className="flex items-center justify-center">
              <img src="/pexel_visage.jpg" className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="image_soin_corps" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Soins Corps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soinsCorps.map(renderCard)}
          </div>
        </div>
      </div>
    )
}

export default SoinCorps
