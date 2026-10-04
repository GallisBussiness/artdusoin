import { motion } from 'framer-motion'

function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="container-lux pt-16 md:pt-20 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4 block">{eyebrow}</span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">{title}</h2>
          <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
          {intro && (
            <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mt-4 max-w-xl mx-auto">{intro}</p>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-lux pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-100 shadow-soft p-6 md:p-8"
            >
              <h3 className="font-cormorant text-xl font-medium tracking-wider text-neutral-900 uppercase mb-4 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gold-500 shrink-0"></span>
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j} className="font-montserrat text-sm text-neutral-600 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LegalPage
