import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formationsData, formationKeyMap } from '../data/formations'

const formations = [
  {
    title: "Épilations",
    price: "990€",
    image: "EPILATION.jpg",
    link: "/formations/epilation",
    features: [
      "Matériel utilisé",
      "Théorie",
      "Règles d'hygiène",
      "Épilation jambes complètes et bras",
      "Épilation aisselles et maillot",
      "Épilation visage",
      "Pratique sur modèles réels",
    ],
  },
  {
    title: "Soins du Visage",
    price: "1590€",
    image: "SV.jpg",
    link: "/formations/soin-visage",
    features: [
      "Matériel utilisé",
      "Règles d'hygiène",
      "Anatomie de la peau / cosmétologie",
      "Déroulement d'un soin",
      "Les différents gestes techniques",
      "Différents types de peau",
      "Pratique sur modèles réels",
    ],
  },
  {
    title: "Massage & Soins Corps",
    price: "1390€",
    image: "massage.jpg",
    link: "/formations/soin-corps",
    features: [
      "Matériel utilisé",
      "Règles d'hygiène",
      "Déroulement d'un soin corps",
      "Gommage corps",
      "Enveloppement",
      "Massage",
      "Soins jambes lourdes",
      "Soin du buste / dos",
      "Pratique sur modèles réels",
    ],
  },
  {
    title: "Manucure & Pédicure",
    price: "990€",
    image: "MANU-PEDI.jpg",
    link: "/formations/pedicure-manicure",
    features: [
      "Matériel utilisé",
      "Règles d'hygiène",
      "Les ongles : nature et maladies",
      "Déroulement d'une manucure",
      "Déroulement d'une pédicure",
      "Pose vernis + vernis permanent",
      "Dépose vernis permanent",
      "Pratique sur modèles réels",
    ],
  },
  {
    title: "Onglerie",
    price: "1390€",
    image: "onglerie.jpg",
    link: "/formations/onglerie",
    features: [
      "Matériel utilisé",
      "Règles d'hygiène",
      "Pose capsule + limage",
      "Application du gel",
      "Les différentes French",
      "Décoration d'ongle",
      "Pose chablon",
      "Finition",
    ],
  },
  {
    title: "Maquillage",
    price: "1290€",
    image: "makup.jpg",
    link: "/formations/maquillage",
    features: [
      "Hygiène des produits et outils",
      "Morphologie d'un visage",
      "Colorimétrie",
      "Déroulement d'un maquillage",
      "Techniques : Jour / Cocktail / Soir / Mariée",
      "Pratique sur modèles réels",
    ],
  },
  // {
  //   title: "Accueil & Vente",
  //   price: "590€",
  //   image: "vente.jpg",
  //   link: null,
  //   features: [
  //     "Tenue professionnelle",
  //     "Prise de rendez-vous",
  //     "Accueil client",
  //     "Prise en charge de la cliente",
  //     "Fiche cliente",
  //     "Vente additionnelle",
  //     "Pratique en situation réelle",
  //   ],
  // },
  // {
  //   title: "Perfectionnement Excellence",
  //   price: "Sur devis",
  //   image: "formation_complete.png",
  //   link: null,
  //   featured: true,
  //   features: [
  //     "Formation Épilation",
  //     "Formation Soin du Visage",
  //     "Formation Soin du Corps",
  //     "Formation Manucure / Pédicure",
  //     "Formation Onglerie",
  //     "Formation Maquillage",
  //     "Formation Achat-Vente",
  //   ],
  // },
]

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 shrink-0 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const downloadPDF = (formation) => {
  const key = formationKeyMap[formation.title]
  const data = formationsData[key]
  if (!data) return

  const win = window.open('', '_blank')
  if (!win) return

  const daysHtml = data.days.map(day => {
    const sessionsHtml = day.sessions.map(session => {
      const itemsHtml = session.items.map(item => `<li>${item}</li>`).join('')
      return `<div class="session"><div class="time">${session.time}</div><ul>${itemsHtml}</ul></div>`
    }).join('')
    return `<div class="day"><h2>${day.title}</h2>${sessionsHtml}</div>`
  }).join('')

  win.document.write(`
    <html>
      <head>
        <title>Fiche Formation — ${data.title}</title>
        <meta charset="utf-8" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Montserrat', sans-serif; color: #1a1a1a; padding: 50px 40px; background: #faf8f5; }
          .header { text-align: center; border-bottom: 2px solid #c9a961; padding-bottom: 25px; margin-bottom: 30px; }
          .header h1 { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 300; letter-spacing: 3px; text-transform: uppercase; color: #1a1a1a; }
          .header .price { font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #c9a961; margin-top: 8px; }
          .header .brand { font-family: 'Cormorant Garamond', serif; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; color: #999; margin-bottom: 15px; }
          .objective { text-align: center; font-size: 14px; color: #555; margin-bottom: 30px; font-style: italic; max-width: 600px; margin-left: auto; margin-right: auto; }
          .day { margin-bottom: 25px; page-break-inside: avoid; }
          .day h2 { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: #fff; background: #1a1a1a; padding: 10px 16px; border-left: 4px solid #c9a961; }
          .session { margin: 12px 0 12px 20px; }
          .time { font-family: 'Cormorant Garamond', serif; font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #c9a961; margin-bottom: 6px; }
          ul { list-style: none; padding: 0; }
          li { padding: 5px 0; font-size: 13px; color: #444; padding-left: 16px; position: relative; }
          li:before { content: '•'; color: #c9a961; position: absolute; left: 0; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; font-size: 12px; color: #999; }
          .footer a { color: #c9a961; text-decoration: none; }
          @media print { body { padding: 20px; } .day { page-break-inside: avoid; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="brand">CK Esthetik — Institut d'esthétique</div>
          <h1>Plan de Formation — ${data.title}</h1>
          <div class="price">${data.price} — Durée : ${data.duration}</div>
        </div>
        <p class="objective">${data.objective}</p>
        ${daysHtml}
        <div class="footer">
          <p>CK Esthetik — L'Art du Soin</p>
          <p>Tél : +33 785 153 621 — Email : karina.chirara@gmail.com</p>
          <p><a href="https://www.planity.com/lart-du-soin-57240-knutange">Réserver en ligne via Planity</a></p>
        </div>
        <script>window.onload = function() { window.print(); }<` + `/script>
      </body>
    </html>
  `)
  win.document.close()
}

function Pricing() {
  return (
    <div className="bg-cream-50">
      <div className="container-lux py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-4 block">Catalogue</span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">Nos Formations</h2>
          <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
          <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mt-4 max-w-xl mx-auto">
            Choisissez un ou plusieurs modules pour devenir une professionnelle de la beauté
          </p>

          {/* Duration badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="font-montserrat text-xs text-neutral-600 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-soft">60h effectives</span>
            <span className="font-montserrat text-xs text-neutral-600 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-soft">32h avec professeur</span>
            <span className="font-montserrat text-xs text-neutral-600 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-soft">20h de pratique</span>
            <span className="font-montserrat text-xs text-neutral-600 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-soft">8h de DM</span>
            <span className="font-montserrat text-xs text-neutral-600 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-soft">Workshop</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-8">
          {formations.map((formation, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                formation.featured
                  ? 'bg-neutral-900 border border-gold-500/30 shadow-soft-lg hover:shadow-soft-xl'
                  : 'bg-white border border-neutral-100 shadow-soft hover:shadow-soft-lg'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className={`absolute inset-0 ${formation.featured ? 'bg-gradient-to-t from-neutral-900/80 to-transparent' : 'bg-gradient-to-t from-white/60 to-transparent'}`}></div>
                {formation.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-500 text-white text-xs font-montserrat tracking-wider uppercase">
                    Pack complet
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6">
                  <h3 className={`font-cormorant text-xl font-light tracking-wider uppercase ${formation.featured ? 'text-white' : 'text-neutral-900'}`}>
                    {formation.title}
                  </h3>
                  <span className={`font-cormorant text-xl font-light shrink-0 ml-4 ${formation.featured ? 'text-gold-400' : 'text-gold-600'}`}>
                    {formation.price}
                  </span>
                </div>

                <div className={`w-12 h-[1px] mb-6 ${formation.featured ? 'bg-gold-500' : 'bg-gold-400'}`}></div>

                <ul className="space-y-3 mb-8 flex-1">
                  {formation.features.map((feature, j) => (
                    <li key={j} className={`flex items-center text-sm font-montserrat font-light ${formation.featured ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                {formation.link ? (
                  <div className="flex gap-3">
                    <Link
                      to={formation.link}
                      className={formation.featured
                        ? "flex-1 inline-flex items-center justify-center gap-2 bg-gold-500 text-white font-montserrat text-xs tracking-widest2 uppercase py-4 px-6 rounded-full hover:bg-gold-600 transition-all duration-300 hover:-translate-y-0.5"
                        : "btn-outline flex-1"
                      }
                    >
                      Voir la fiche
                    </Link>
                    <button
                      onClick={() => downloadPDF(formation)}
                      className={formation.featured
                        ? "inline-flex items-center justify-center gap-2 border border-white/30 text-white font-montserrat text-xs tracking-widest2 uppercase py-4 px-4 rounded-full hover:bg-white/10 transition-all duration-300"
                        : "inline-flex items-center justify-center gap-2 border border-neutral-300 text-neutral-600 font-montserrat text-xs tracking-widest2 uppercase py-4 px-4 rounded-full hover:border-gold-500 hover:text-gold-700 transition-all duration-300"
                      }
                      aria-label="Télécharger la fiche en PDF"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/contact"
                    className={formation.featured
                      ? "w-full inline-flex items-center justify-center gap-2 bg-gold-500 text-white font-montserrat text-xs tracking-widest2 uppercase py-4 px-8 rounded-full hover:bg-gold-600 transition-all duration-300 hover:-translate-y-0.5"
                      : "btn-outline w-full"
                    }
                  >
                    Nous contacter
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-blush-50 to-gold-50 border border-gold-100">
            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-neutral-900">Une question sur nos formations ?</h3>
            <p className="font-montserrat text-sm text-neutral-600 max-w-md">Contactez-nous pour un accompagnement personnalisé dans votre projet professionnel.</p>
            <Link to='/contact' className="btn-primary">Nous contacter</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing
