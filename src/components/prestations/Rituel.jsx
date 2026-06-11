function Rituel() {
    const rituels = [
      { nom: "RITUEL PRESTIGE", duree: "1h 30min", prix: "70 \u20AC", desc: "Apr\u00E8s une exfoliation \u00E0 la pulpe de coco, Plonger au coeur du lagon pour un enveloppement aux senteurs de tiar\u00E9 paradisiaque et voyager \u00E0 travers les pressions lentes et harmonieuses d\u2019un massage drainant. Une sensation de d\u00E9tente et d\u2019\u00E9vasion vous envahit. Ce soin sera accompagn\u00E9 d\u2019un th\u00E9 chaud. Gommage-massage et th\u00E9." },
      { nom: "RITUEL THALASSO MINERAL", duree: "2h 30", prix: "145 \u20AC", desc: "Sous l\u2019effet conjugu\u00E9 des boues marines naturelles de la Mer et les sels marins. Ce soin original vous offre une exfoliation detoxifiant. Une hydratation profonde et une douceur extr\u00EAme. Retrouver la puret\u00E9 de votre corps et de votre visage, Naviguer \u00E0 travers les vagues par son massage relaxant. Gommage-enveloppement-soin visage-massage et th\u00E9." },
      { nom: "RITUEL ANCESTRAL", duree: "4h", prix: "270 \u20AC", desc: "Issu d\u2019une tradition ancestrale orientale, ce soin vous invite \u00E0 purifier votre corps en profondeur gr\u00E2ce aux vertus exfoliantes et naturelles du savon noir originaire de la ville d\u2019Essaouira au Maroc, envelopp\u00E9 par la douceur du rhassoul et de ses eaux florales. Voyager \u00E0 travers le temps par son massage unique. Gommage-enveloppement-massage et th\u00E9-soin visage-beaut\u00E9 des mains et pieds." },
    ];

    return (
      <div className="px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rituels.map((soin, i) => (
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

export default Rituel
