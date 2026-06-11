function SoinPediManu() {
    const onglerie = [
      { nom: "POSE FAUX ONGLES GEL FRENCH", duree: "1h 30min", prix: "60 \u20AC" },
      { nom: "POSE FAUX ONGLES GEL", duree: "1h 30min", prix: "55 \u20AC" },
      { nom: "CHABLON", duree: "1h 30min", prix: "65 \u20AC" },
      { nom: "ONGLE CASS\u00C9 HORS REMPLISSAGE", duree: "15min", prix: "5 \u20AC" },
      { nom: "ONGLE CASS\u00C9 EN REMPLISSAGE", duree: "1h", prix: "2 \u20AC" },
      { nom: "D\u00C9COR D'ONGLE", duree: "1h", prix: "2 \u20AC" },
      { nom: "SUPPL\u00C9MENT STRASS", duree: "1h", prix: "1 \u20AC" },
    ];

    const pediManu = [
      { nom: "MANUCURE", duree: "45 min", prix: "30 \u20AC" },
      { nom: "BEAUT\u00C9 DES PIEDS", duree: "1h", prix: "50 \u20AC" },
      { nom: "FORFAIT MAINS ET PIEDS", duree: "1h 30min", prix: "75 \u20AC" },
      { nom: "FORFAIT THERMAL (Masque + Massage)", duree: "30min", prix: "30 \u20AC" },
      { nom: "POSE VERNIS MAIN", duree: "30min", prix: "10 \u20AC" },
      { nom: "POSE VERNIS PERMANENT (mains ou pieds)", duree: "45min", prix: "28 \u20AC" },
      { nom: "D\u00C9POSE VERNIS PERMANENT", duree: "30min", prix: "10 \u20AC" },
      { nom: "FORFAIT POSE VERNIS PERMANENT (mains et pieds)", duree: "1h 15min", prix: "50 \u20AC" },
    ];

    const renderCard = (soin, i) => (
      <div key={i} className="border border-neutral-200 hover:border-black transition-colors duration-300 p-5">
        <div className="flex items-start justify-between">
          <span className="font-cormorant text-base text-black font-medium tracking-wider uppercase">{soin.nom}</span>
          <span className="font-cormorant text-lg text-black font-light ml-3 shrink-0">{soin.prix}</span>
        </div>
        <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mt-2">{soin.duree}</p>
      </div>
    );

    return (
      <div className="px-6 md:px-10 py-8 space-y-12">
        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Onglerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onglerie.map(renderCard)}
            <div className="flex items-center justify-center md:row-span-2">
              <img src="/onglerie.jpg" className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="image_pedicure_manicure" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">P&eacute;dicure - Manicure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pediManu.map(renderCard)}
          </div>
        </div>
      </div>
    )
}

export default SoinPediManu
