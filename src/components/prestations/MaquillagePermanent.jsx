function MaquillagePermanent() {
    const soins = [
      { nom: "SOURCILS", duree: "1h 30min", prix: "290 \u20AC" },
      { nom: "L\u00C8VRES", duree: "1h 30min", prix: "290 \u20AC" },
      { nom: "EYE LINER", duree: "1h 30min", prix: "290 \u20AC" },
      { nom: "RETOUCHE", duree: "1h", prix: "145 \u20AC" },
      { nom: "GRAINS DE BEAUT\u00C9", duree: "20min", prix: "50 \u20AC" },
      { nom: "TATOUAGE PERSONALIS\u00C9", duree: "20min", prix: "50 \u20AC" },
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

export default MaquillagePermanent
