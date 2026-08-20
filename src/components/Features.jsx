  import { motion } from 'framer-motion'

const features = [
  {
    title: "Formations Personnalisées",
    desc: "Un accompagnement sur-mesure adapté à vos objectifs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.75a10.94 10.94 0 0 1 1.315-6.05L6.5 6.5l2.5-.5 1 2 2-1 .5 2.5 2 .5-.5 2.5 2 1-.5 2.5 2 .5v.5M19.5 14.5h-3.75l-1.5 3-3-6-1.5 3H5.25" />
      </svg>
    ),
  },
  {
    title: "Soins Haut de Gamme",
    desc: "Des produits d'exception pour des résultats d'exception",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Création d'Institut",
    desc: "Expertise et accompagnement pour votre projet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Modèles Réels",
    desc: "Pratique sur modèles pour une formation complète",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.783-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.144 6.144 0 0 1 3.73-5.63 6.136 6.136 0 0 1 3.7-.535m6.75 2.49v.008a3.75 3.75 0 0 1-3.75 3.75H9.75a3.75 3.75 0 0 1-3.75-3.75v-.008a3.75 3.75 0 0 1 3.75-3.75h3.75a3.75 3.75 0 0 1 3.75 3.75Z" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section className="section-pad bg-neutral-900 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blush-300/5 blur-3xl"></div>

      <div className="container-lux relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow mb-4 block text-gold-400">Nos Offres</span>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-white tracking-wider uppercase">Pourquoi nous choisir</h2>
          <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-md:max-w-lg mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 md:p-10 text-center rounded-2xl border border-neutral-800 hover:border-gold-500/50 bg-neutral-900/50 hover:bg-neutral-800/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/10 text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="font-cormorant text-lg font-light text-white tracking-wider uppercase mb-3">{feature.title}</h3>
              <p className="font-montserrat text-xs font-light text-neutral-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
