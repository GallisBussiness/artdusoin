import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const photos = [
  "/carousel/1.jpeg",
  "/carousel/2.jpeg",
  "/carousel/3.jpeg",
  "/carousel/4.jpeg",
  "/carousel/5.jpeg",
  "/carousel/6.jpeg",
  "/carousel/7.jpeg",
  "/carousel/8.jpeg",
  "/carousel/9.jpeg",
  "/carousel/w15.jpeg",
  "/carousel/w16.jpeg",
  "/carousel/w17.jpeg",
  "/carousel/w4.jpeg",
  "/carousel/w8.jpeg",
  "/carousel/w9.jpeg",
  "/cadran/imgfleur.jpg",
  "/cadran/imgpied.jpg",
  "/cadran/imgsoins.jpg",
  "/cadran/imgvert.jpg",
  "/cadran/maquillage.jpeg",
  "/cadran/massage.webp",
  "/cadran/onglerie.jpg",
  "/diapo1.jpeg",
  "/diapo2.jpeg",
  "/diapo3.jpeg",
  "/diapo4.jpeg",
  "/diapo5.jpeg",
  "/diapo6.jpeg",
  "/diapo7.jpeg",
]

function Galerie() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % photos.length), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="container-lux pt-16 md:pt-20 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4 block">L'institut en images</span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">Notre Galerie</h2>
          <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
          <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mt-4 max-w-xl mx-auto">
            Découvrez l'univers CK Esthetik : nos soins, notre savoir-faire et l'ambiance de notre institut
          </p>
        </motion.div>
      </div>

      {/* Masonry grid */}
      <div className="container-lux pb-20 md:pb-28">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
          {photos.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full mb-4 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 break-inside-avoid"
            >
              <img
                src={src}
                alt={`CK Esthetik — photo ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-all duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-neutral-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </motion.button>
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
            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-neutral-900">Envie de vivre l'expérience ?</h3>
            <p className="font-montserrat text-sm text-neutral-600 max-w-md">Réservez votre soin en ligne ou contactez-nous pour plus d'informations.</p>
            <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="btn-primary">Réserver un soin</a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-neutral-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Fermer"
              className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Photo précédente"
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Photo suivante"
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={photos[lightboxIndex]}
              alt={`CK Esthetik — photo ${lightboxIndex + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-soft-xl"
            />

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white font-montserrat text-xs tracking-widest2">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Galerie
