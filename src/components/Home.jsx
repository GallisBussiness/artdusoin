import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import Presentation from './Presentation';
import Features from './Features';

/* ===== Decorative feminine SVG icons ===== */
const Petal = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C12 2 5 7 5 14c0 4.4 3.1 8 7 8s7-3.6 7-8c0-7-7-12-7-12z" opacity="0.9"/>
    <path d="M12 6v14" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
    <path d="M12 10c-1.8.5-3 2-3 4m6-4c1.8.5 3 2 3 4" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4"/>
  </svg>
)

const Sparkle = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
  </svg>
)

const Flower = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 11.5a2 2 0 110-4 2 2 0 010 4zm0 0c-2 0-4.5-2-4.5-4.5C7.5 4.5 9.5 3 12 3s4.5 1.5 4.5 4S14 11.5 12 11.5zm0 0c0 2 2 4.5 4.5 4.5C19 16 20.5 14 20.5 12S19 7.5 16.5 7.5 12 9.5 12 11.5zm0 0c0-2-2-4.5-4.5-4.5C5 7 3.5 9 3.5 11.5S5 16 7.5 16 12 13.5 12 11.5zm0 0a2 2 0 110 4 2 2 0 010-4z"/>
  </svg>
)

const LeafBranch = ({ className }) => (
  <svg viewBox="0 0 24 48" fill="currentColor" className={className}>
    <path d="M12 46C12 46 12 4 12 4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
    <path d="M12 40c-4-2-6-5-6-9 3 0 6 2 6 9zm0-9c4-2 6-5 6-9-3 0-6 2-6 9zm0-9c-4-2-6-5-6-9 3 0 6 2 6 9zm0-9c4-2 6-5 6-9-3 0-6 2-6 9z"/>
  </svg>
)

/* Floating decoration element */
const FloatEl = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, delay }}
    className={`absolute pointer-events-none ${className}`}
  >
    {children}
  </motion.div>
)

const services = [
  { title: "Soins Visages", image: "/cadran/imgsoins.jpg", link: "/prestations?q=soin-visage", desc: "Sublimez votre éclat" },
  { title: "Soins Corps", image: "/cadran/massage.webp", link: "/prestations?q=soin-corps", desc: "Détente & bien-être" },
  { title: "Maquillage", image: "/cadran/maquillage.jpeg", link: "/prestations?q=maquillage", desc: "Révélez votre beauté" },
  { title: "Rituels", image: "/cadran/imgfleur.jpg", link: "/prestations?q=rituel", desc: "Expérience sensorielle" },
  { title: "Épilations", image: "/EPILATION.jpg", link: "/prestations?q=epilation", desc: "Peau lisse & douce" },
  { title: "Mains & Pieds", image: "/cadran/imgpied.jpg", link: "/prestations?q=pedicure-manicure", desc: "Soin & précision" },
]

const galleryImages = [
  { src: "/carousel/1.jpeg", span: "md:col-span-2 md:row-span-2" },
  { src: "/carousel/2.jpeg", span: "" },
  { src: "/carousel/3.jpeg", span: "" },
  { src: "/carousel/w15.jpeg", span: "md:row-span-2" },
  { src: "/carousel/5.jpeg", span: "" },
  { src: "/carousel/6.jpeg", span: "" },
  { src: "/carousel/w16.jpeg", span: "md:col-span-2" },
  { src: "/carousel/8.jpeg", span: "" },
  { src: "/carousel/w17.jpeg", span: "" },
]

const marqueeWords = [
  "Soins Visage", "Soins Corps", "Massages", "Rituels d'Exception",
  "Épilations", "Maquillage", "Onglerie", "Mains & Pieds", "LPG", "Bien-être",
]

function Home() {
  return (
    <div className="bg-cream-50 overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[78vh] grid md:grid-cols-2 overflow-hidden">
        {/* Left: content */}
        <div className="relative flex flex-col justify-center items-center text-center px-8 md:px-12 py-10 md:py-14 order-2 md:order-1 bg-gradient-cream">
          {/* Floating feminine decorations */}
          <FloatEl delay={0.5} className="top-10 left-8 md:left-14 animate-petal">
            <Petal className="w-10 h-10 text-blush-300/70" />
          </FloatEl>
          <FloatEl delay={0.8} className="top-24 right-10 md:right-16 animate-petal-alt">
            <Petal className="w-7 h-7 text-gold-400/60 rotate-45" />
          </FloatEl>
          <FloatEl delay={1.1} className="bottom-16 left-12 animate-petal-alt">
            <Flower className="w-8 h-8 text-blush-400/50" />
          </FloatEl>
          <FloatEl delay={0.7} className="top-1/3 left-4 md:left-10 animate-twinkle">
            <Sparkle className="w-6 h-6 text-gold-500/70" />
          </FloatEl>
          <FloatEl delay={1.3} className="top-1/4 right-1/4 animate-twinkle" >
            <Sparkle className="w-5 h-5 text-blush-400/80" />
          </FloatEl>
          <FloatEl delay={1.6} className="bottom-1/4 right-8 md:right-14 animate-twinkle">
            <Sparkle className="w-7 h-7 text-gold-400/50" />
          </FloatEl>
          <FloatEl delay={1.4} className="bottom-24 right-1/3 animate-petal">
            <Petal className="w-5 h-5 text-gold-500/50 -rotate-12" />
          </FloatEl>
          <FloatEl delay={1.9} className="top-16 left-1/3 animate-twinkle">
            <Sparkle className="w-4 h-4 text-blush-500/60" />
          </FloatEl>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Rotating decorative ring behind logo */}
            <div className="absolute -inset-8 md:-inset-12 animate-spin-slow pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
                <circle cx="100" cy="100" r="96" fill="none" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="4 8" />
              </svg>
            </div>

            <motion.img
              src="/logo/cknb.png"
              alt="CK Esthetik"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-36 md:w-48 lg:w-56 h-auto object-contain mb-2 mx-auto"
            />
            <p className="font-montserrat text-xs md:text-sm font-light leading-relaxed text-neutral-600 max-w-md mx-auto">
              Institut d'esthétique — soins d'exception
              <br />pour sublimer votre beauté naturelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link to='/prestations' className="btn-primary">
                Nos Prestations
              </Link>
              <Link to='/formations' className="btn-outline">
                Nos Formations
              </Link>
            </div>
          </motion.div>

          {/* Contact + QR */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <a href="tel:+33785153621" className="flex items-center gap-2 text-neutral-500 hover:text-gold-600 text-xs font-montserrat tracking-wider transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              +33 785 153 621
            </a>
            <a href="mailto:karina.chirara@gmail.com" className="flex items-center gap-2 text-neutral-500 hover:text-gold-600 text-xs font-montserrat tracking-wider transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              karina.chirara@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-col items-center"
          >
            <div className="p-2 bg-white rounded-xl shadow-soft border border-neutral-100">
              <QRCodeSVG
                value="https://www.planity.com/lart-du-soin-57240-knutange"
                size={72}
                bgColor="#ffffff"
                fgColor="#1a1a1a"
                level="M"
              />
            </div>
            <p className="mt-2 text-xs font-montserrat text-neutral-500 tracking-wider">Scannez pour réserver</p>
          </motion.div>
        </div>

        {/* Right: visual */}
        <div className="relative overflow-hidden order-1 md:order-2 min-h-[40vh] md:min-h-full">
          <motion.img
            src="/bannner.png"
            alt="CK Esthetik — L'Art du Soin"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blush-400/20 via-transparent to-gold-500/15"></div>

          {/* Floating sparkles over image */}
          <FloatEl delay={1} className="top-16 right-10 animate-twinkle">
            <Sparkle className="w-9 h-9 text-white/80" />
          </FloatEl>
          <FloatEl delay={1.5} className="top-1/3 left-10 animate-twinkle">
            <Sparkle className="w-6 h-6 text-gold-300/90" />
          </FloatEl>
          <FloatEl delay={0.8} className="bottom-1/4 right-16 animate-petal">
            <Petal className="w-8 h-8 text-blush-200/70 rotate-12" />
          </FloatEl>
          <FloatEl delay={1.2} className="bottom-16 left-1/4 animate-twinkle">
            <Sparkle className="w-5 h-5 text-white/70" />
          </FloatEl>
        </div>
      </section>

      {/* ===== MARQUEE BAND ===== */}
      <div className="bg-neutral-900 py-4 overflow-hidden border-y border-gold-500/20">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-cormorant text-sm md:text-base font-light tracking-widest2 uppercase text-white/80 px-6">{word}</span>
              <Flower className="w-3 h-3 text-gold-500 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ===== SERVICES CIRCLES ===== */}
      <section className="section-pad bg-white relative overflow-hidden">
        {/* Soft decorative blobs */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blush-100/60 blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold-100/50 blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <FloatEl delay={0.5} className="top-16 left-10 animate-petal hidden lg:block">
          <LeafBranch className="w-12 h-24 text-gold-300/40" />
        </FloatEl>
        <FloatEl delay={0.8} className="bottom-20 right-12 animate-petal-alt hidden lg:block">
          <LeafBranch className="w-12 h-24 text-blush-300/40 -scale-x-100" />
        </FloatEl>

        <div className="container-lux relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow mb-4 block">Nos Soins</span>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">Une gamme complète</h2>
            <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
            <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mt-4">Des soins d'exception pour votre bien-être</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <Link to={service.link} className="group relative block">
                  {/* Rotating dashed ring */}
                  <div className="absolute -inset-2.5 animate-spin-slow pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <circle cx="50" cy="50" r="49" fill="none" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3 6" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Cercle image */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-soft-lg group-hover:shadow-soft-xl transition-all duration-500 group-hover:scale-105">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-neutral-900/30 group-hover:bg-neutral-900/10 transition-all duration-500"></div>
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/20 transition-all duration-700"></div>
                  </div>
                  {/* Anneau doré au hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500 scale-105 group-hover:scale-110"></div>
                  {/* Petit point doré en bas */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </Link>
                {/* Texte sous le cercle */}
                <div className="mt-5">
                  <h3 className="font-cormorant text-base md:text-lg font-light tracking-wider text-neutral-900 uppercase">{service.title}</h3>
                  <p className="font-montserrat text-xs text-neutral-400 tracking-wider mt-1">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRESENTATION ===== */}
      <section className="section-pad bg-gradient-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <Presentation
            title="Mme CHIRARA Karina"
            text="Professionnelle de renommée internationale des métiers de l'esthétique, Mme CHIRARA Karina, Titulaire d'un CAP et d'un BP ESTHETIQUE-COSMETIQUE de l'école Fournier de VICHY. Riche de 25 années d'expériences, en tant qu'esthéticienne spécialisée en audit d'institut et en tant que formatrice aux métiers de la beauté, aujourd'hui elle souhaite transmettre son savoir, sa passion et apporter son expertise aux professionnels de notre noble métier."
            image="carina2.jpeg"
          />
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <Features />

      {/* ===== GALLERY BENTO ===== */}
      <section className="section-pad bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blush-300/5 blur-3xl"></div>
        <FloatEl delay={0.5} className="top-20 right-16 animate-twinkle">
          <Sparkle className="w-7 h-7 text-gold-400/60" />
        </FloatEl>
        <FloatEl delay={1} className="bottom-24 left-12 animate-twinkle">
          <Sparkle className="w-6 h-6 text-blush-300/50" />
        </FloatEl>

        <div className="container-lux relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="eyebrow mb-4 block text-gold-400">Galerie</span>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-white uppercase">Notre Univers</h2>
            <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
            <p className="font-montserrat text-xs font-light text-neutral-400 tracking-widest uppercase mt-4">Quelques instants capturés dans notre institut</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative overflow-hidden cursor-pointer rounded-xl ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={`Galerie ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/0 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blush-100 via-cream-100 to-gold-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-blush-200/30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold-200/30 blur-3xl"></div>
        <FloatEl delay={0.6} className="top-14 left-1/4 animate-petal">
          <Petal className="w-8 h-8 text-blush-400/50 rotate-45" />
        </FloatEl>
        <FloatEl delay={1} className="bottom-16 right-1/4 animate-petal-alt">
          <Flower className="w-9 h-9 text-gold-400/40" />
        </FloatEl>
        <FloatEl delay={1.4} className="top-1/2 right-16 animate-twinkle">
          <Sparkle className="w-6 h-6 text-gold-500/60" />
        </FloatEl>
        <FloatEl delay={1.7} className="top-1/3 left-16 animate-twinkle">
          <Sparkle className="w-5 h-5 text-blush-500/60" />
        </FloatEl>

        <div className="container-lux relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-4 block">Réservation</span>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase mb-6">Offrez-vous un moment d'exception</h2>
            <div className="ornament mb-8 max-w-[200px] mx-auto"></div>
            <p className="font-montserrat text-sm md:text-base font-light text-neutral-600 max-w-lg mx-auto mb-10">
              Prenez rendez-vous dès aujourd'hui et laissez-nous révéler votre beauté naturelle dans un cadre zen et discret.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.planity.com/lart-du-soin-57240-knutange" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Réserver en ligne
              </a>
              <Link to='/contact' className="btn-outline">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
