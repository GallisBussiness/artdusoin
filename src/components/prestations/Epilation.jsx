function Epilation() {
    const visage = [
      { nom: "EPILATION L\u00C8VRE SUP\u00C9RIEURE", duree: "15 Min", prix: "9 \u20AC" },
      { nom: "EPILATION MENTON", duree: "15 Min", prix: "9 \u20AC" },
      { nom: "EPILATION SOURCILS", duree: "15 Min", prix: "10 \u20AC" },
      { nom: "EPILATION JOUES", duree: "15 Min", prix: "9 \u20AC" },
    ];

    const eyeBrow = [
      { nom: "RESTRUCTURATION DU REGARD", duree: "15 Min", prix: "15 \u20AC" },
      { nom: "TEINTURE SOURCILS", duree: "30 Min", prix: "15 \u20AC" },
      { nom: "TEINTURE CILS", duree: "30 Min", prix: "15 \u20AC" },
      { nom: "POSE FAUX CILS", duree: "15 Min", prix: "20 \u20AC" },
    ];

    const corps = [
      { nom: "EPILATION BRAS", duree: "20 Min", prix: "18 \u20AC" },
      { nom: "EPILATION AISSELLES", duree: "15 Min", prix: "12 \u20AC" },
      { nom: "EPILATION MAILLOT \u00C9CHANCR\u00C9", duree: "20 min", prix: "18 \u20AC" },
      { nom: "EPILATION MAILLOT COMPLET", duree: "30 min", prix: "28 \u20AC" },
      { nom: "EPILATION DEMI JAMBES OU CUISSE", duree: "30 Min", prix: "18 \u20AC" },
      { nom: "EPILATION JAMBES COMPL\u00C8TES", duree: "45 Min", prix: "27 \u20AC" },
    ];

    const masculin = [
      { nom: "SOURCILS", duree: "20 min", prix: "15 \u20AC" },
      { nom: "SOURCILS ET LIGNE", duree: "20 min", prix: "20 \u20AC" },
      { nom: "NEZ", duree: "15 min", prix: "8 \u20AC" },
      { nom: "OREILLES", duree: "15 min", prix: "8 \u20AC" },
      { nom: "BRAS", duree: "30 min", prix: "22 \u20AC" },
      { nom: "AISSELLES", duree: "20 min", prix: "18 \u20AC" },
      { nom: "MAILLOTS", duree: "30 min", prix: "45 \u20AC" },
      { nom: "JAMBE COMPL\u00C8TE", duree: "1h", prix: "35 \u20AC" },
      { nom: "TORSE", duree: "30 min", prix: "25 \u20AC" },
      { nom: "DOS", duree: "30 min", prix: "25 \u20AC" },
      { nom: "FESSES", duree: "30 min", prix: "22 \u20AC" },
      { nom: "FORFAITS", duree: "", prix: "sur devis" },
    ];

    const forfaits2 = [
      "DEMI JAMBE + AISSELLES 26\u20AC",
      "DEMI JAMBE + MAILLOT INT\u00C9GRAL 39\u20AC",
      "JAMBE COMPL\u00C8TE + MAILLOT INT\u00C9GRAL 50\u20AC",
      "SOURCIL + L\u00C8VRES 16\u20AC",
    ];

    const forfaits3 = [
      "DEMI JAMBE + MAILLOT \u00C9CHANCR\u00C9 + AISSELLES 45\u20AC",
      "JAMBE COMPL\u00C8TE + MAILLOT INT\u00C9GRAL + AISSELLES 60\u20AC",
      "SOURCIL + L\u00C8VRES + MENTON 25\u20AC",
    ];

    const renderCard = (soin, i) => (
      <div key={i} className="border border-neutral-200 hover:border-black transition-colors duration-300 p-5">
        <div className="flex items-start justify-between">
          <span className="font-cormorant text-base text-black font-medium tracking-wider uppercase">{soin.nom}</span>
          <span className="font-cormorant text-lg text-black font-light ml-3 shrink-0">{soin.prix}</span>
        </div>
        {soin.duree && <p className="font-montserrat text-xs text-neutral-400 tracking-widest uppercase mt-2">{soin.duree}</p>}
      </div>
    );

    return (
      <div className="px-6 md:px-10 py-8 space-y-12">
        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Epilations Visage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{visage.map(renderCard)}</div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Eye Brow Bar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{eyeBrow.map(renderCard)}</div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Epilation Corps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{corps.map(renderCard)}</div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Epilation au Masculin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{masculin.map(renderCard)}</div>
        </div>

        <div>
          <h2 className="font-cormorant text-2xl font-light tracking-wider text-black uppercase mb-6">Forfaits Femmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-neutral-200 hover:border-black transition-colors duration-300 p-6">
              <span className="font-cormorant text-lg text-black font-medium tracking-wider uppercase">FORFAIT 2 ZONES</span>
              <div className="w-8 h-px bg-gold my-4"></div>
              <div className="space-y-2">
                {forfaits2.map((f, i) => (
                  <p key={i} className="font-montserrat text-sm text-neutral-600 py-1 border-b border-neutral-100 last:border-0">{f}</p>
                ))}
              </div>
            </div>
            <div className="border border-neutral-200 hover:border-black transition-colors duration-300 p-6">
              <span className="font-cormorant text-lg text-black font-medium tracking-wider uppercase">FORFAIT 3 ZONES</span>
              <div className="w-8 h-px bg-gold my-4"></div>
              <div className="space-y-2">
                {forfaits3.map((f, i) => (
                  <p key={i} className="font-montserrat text-sm text-neutral-600 py-1 border-b border-neutral-100 last:border-0">{f}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Epilation
