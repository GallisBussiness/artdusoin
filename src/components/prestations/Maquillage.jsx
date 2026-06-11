function Maquillage() {
    const soins = [
      { nom: "MAQUILLAGE JOUR", duree: "1h", prix: "25 \u20AC" },
      { nom: "MAQUILLAGE SOIR\u00C9E", duree: "45 min", prix: "30 \u20AC" },
      { nom: "MAQUILLAGE MARI\u00C9E", duree: "1h 15min", prix: "60 \u20AC" },
      { nom: "ESSAI MAQUILLAGE MARI\u00C9E", duree: "1h", prix: "40 \u20AC" },
      { nom: "COURS D'AUTO MAQUILLAGE", duree: "1h", prix: "50 \u20AC" },
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
              <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase">{soin.duree}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Maquillage
