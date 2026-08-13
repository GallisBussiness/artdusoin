import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function FicheLayout({ title, duration, objective, days, image, price }) {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden bg-neutral-900">
        {image && (
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/60"></div>
          </div>
        )}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blush-300/10 blur-3xl"></div>

        <div className="container-lux relative z-10 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/formations" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-xs font-montserrat tracking-widest2 uppercase mb-6 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Retour aux formations
            </Link>
            <span className="eyebrow mb-4 block text-gold-400">Plan de formation</span>
            <h1 className="font-cormorant text-3xl md:text-5xl lg:text-6xl font-light tracking-wider text-white uppercase">{title}</h1>
            <div className="ornament mt-6 max-w-[200px] mx-auto"></div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="font-montserrat text-xs tracking-wider text-white uppercase">Durée : {duration}</span>
              </div>
              {price && (
                <div className="px-5 py-3 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-500/30">
                  <span className="font-montserrat text-xs tracking-wider text-gold-300 uppercase">Tarif : {price}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Objective */}
      <div className="container-lux py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="eyebrow mb-4 block">Objectif</span>
          <p className="font-montserrat text-base md:text-lg font-light leading-relaxed text-neutral-700">{objective}</p>
          <div className="ornament mt-8 max-w-[150px] mx-auto"></div>
        </motion.div>
      </div>

      {/* Days */}
      <div className="container-lux pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto space-y-6">
          {days.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
            >
              {/* Day header */}
              <div className="flex items-center gap-4 p-6 md:p-8 bg-gradient-to-r from-neutral-900 to-neutral-800">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                  <span className="font-cormorant text-xl text-white font-light">{i + 1}</span>
                </div>
                <h2 className="font-cormorant text-xl md:text-2xl font-light tracking-wider text-white uppercase">{day.title}</h2>
              </div>

              {/* Sessions */}
              <div className="p-6 md:p-8 space-y-6">
                {day.sessions.map((session, j) => (
                  <div key={j} className="border-l-2 border-gold-300 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h5.5m5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                      <h3 className="font-playfiar text-sm md:text-base font-medium tracking-wider text-neutral-900 uppercase">{session.time}</h3>
                    </div>
                    <ul className="space-y-2">
                      {session.items.map((item, k) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-blush-400 mt-2.5 shrink-0"></span>
                          <span className="font-montserrat text-sm text-neutral-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-neutral-900">Prête à vous lancer ?</h3>
            <p className="font-montserrat text-sm text-neutral-600 max-w-md">Contactez-nous pour réserver votre place ou poser vos questions.</p>
            <Link to='/contact' className="btn-primary">Nous contacter</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FicheLayout
