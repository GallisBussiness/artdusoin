import { motion } from 'framer-motion'

function Presentation({ image, text, title }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8 md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-2 order-2 lg:order-1"
      >
        <span className="eyebrow mb-4 block">Fondatrice</span>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wider text-neutral-900">{title}</h2>
        <div className="w-12 h-[1px] bg-gold-500 my-6"></div>
        <p className="font-montserrat text-sm md:text-base font-light leading-relaxed text-neutral-600">{text}</p>
        <div className="flex gap-3 mt-8">
          <div className="px-5 py-3 rounded-full bg-gold-50 border border-gold-200">
            <span className="font-montserrat text-xs tracking-wider text-gold-700 uppercase">25 ans d'expérience</span>
          </div>
          <div className="px-5 py-3 rounded-full bg-blush-50 border border-blush-200">
            <span className="font-montserrat text-xs tracking-wider text-blush-700 uppercase">BP Esthétique</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative order-1 lg:order-2"
      >
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold-200 to-blush-200 opacity-40 blur-xl"></div>
        <img
          src={image}
          className="relative w-full h-full max-h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-soft-lg"
          alt={title}
        />
      </motion.div>
    </div>
  )
}

export default Presentation
