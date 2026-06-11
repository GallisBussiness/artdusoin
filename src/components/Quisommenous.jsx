import React from 'react'

function Quisommenous() {
    const points = [
      "Une large gamme de services esth\u00e9tiques",
      "Des formations professionnelles et techniques de beaut\u00e9",
      "Accompagnement pour la cr\u00e9ation d\u2019un institut de beaut\u00e9",
      "Possibilit\u00e9 de stage en entreprise",
      "Entra\u00eenement sur des mod\u00e8les r\u00e9els",
      "Gestion, ventes et conseils",
    ];

    return (
        <div className="bg-white">
<section className="py-20 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h1 className="font-cormorant text-4xl md:text-6xl font-light tracking-wider text-black uppercase leading-tight">
                    Qui<br/>Sommes<br/>Nous&nbsp;?
                </h1>
                <div className="w-16 h-[1px] bg-gold my-8"></div>
                <p className="font-montserrat text-sm font-light leading-relaxed text-neutral-600">
                    Professionnelle de renomm&eacute;e internationale des m&eacute;tiers de l&apos;esth&eacute;tique,
                    Mme CHIRARA Karina, Titulaire d&apos;un CAP et d&apos;un BP ESTHETIQUE-COSMETIQUE de l&apos;&eacute;cole de VICHY,
                    riche de 25 ann&eacute;es d&apos;exp&eacute;riences en tant qu&apos;esth&eacute;ticienne sp&eacute;cialis&eacute;e en audit d&apos;institut
                    et en tant que formatrice aux m&eacute;tiers de la beaut&eacute;.
                </p>
                <p className="font-montserrat text-sm font-light leading-relaxed text-neutral-600 mt-4">
                    Notre centre vous accueille dans un cadre zen et discret. CK ESTHETIK se veut un centre
                    d&apos;excellence au service de sa client&egrave;le, proposant une gamme vari&eacute;e de formations et de soins
                    pour un public masculin et f&eacute;minin.
                </p>
            </div>
            <div className="relative">
                <img src="team1.jpeg" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="qui sommes-nous ?" />
            </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 py-4">
                <div className="w-1 h-1 bg-gold rounded-full mt-2 shrink-0"></div>
                <span className="font-montserrat text-sm font-light text-neutral-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Quisommenous
