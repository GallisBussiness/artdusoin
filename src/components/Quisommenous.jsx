import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Quisommenous() {
    const points = [
        { text: "Une large gamme de services esthétiques", icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
        { text: "Des formations professionnelles et techniques de beauté", icon: "M4.26 10.75a10.94 10.94 0 0 1 1.315-6.05L6.5 6.5l2.5-.5 1 2 2-1 .5 2.5 2 .5-.5 2.5 2 1-.5 2.5 2 .5v.5" },
        { text: "Accompagnement pour la création d'un institut de beauté", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75" },
        { text: "Possibilité de stage en entreprise", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.708c0-1.085-.787-2.036-1.872-2.18a48.4 48.4 0 0 0-3.44-.32" },
        { text: "Entraînement sur des modèles réels", icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.783-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766" },
        { text: "Gestion, ventes et conseils", icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" },
    ]

    const stats = [
        { value: "25", label: "Années d'expérience" },
        { value: "6", label: "Formations pro" },
        { value: "100%", label: "Modèles réels" },
        { value: "∞", label: "Passion" },
    ]

    return (
        <div className="bg-cream-50">
            {/* ===== HERO SECTION ===== */}
            <section className="section-pad">
                <div className="container-lux">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="eyebrow mb-6 block">À propos</span>
                            <h1 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-neutral-900 uppercase leading-[1.05]">
                                Qui<br />Sommes<br />
                                <span className="text-shimmer">Nous ?</span>
                            </h1>
                            <div className="w-16 h-[1px] bg-gold-500 my-8"></div>
                            <p className="font-montserrat text-sm md:text-base font-light leading-relaxed text-neutral-600">
                                Professionnelle de renommée internationale des métiers de l'esthétique,
                                Mme CHIRARA Karina, titulaire d'un CAP et d'un BP ESTHETIQUE-COSMETIQUE de l'école de VICHY,
                                riche de 25 années d'expériences en tant qu'esthéticienne spécialisée en audit d'institut
                                et en tant que formatrice aux métiers de la beauté.
                            </p>
                            <p className="font-montserrat text-sm md:text-base font-light leading-relaxed text-neutral-600 mt-4">
                                Notre centre vous accueille dans un cadre zen et discret. CK ESTHETIK se veut un centre
                                d'excellence au service de sa clientèle, proposant une gamme variée de formations et de soins
                                pour un public masculin et féminin.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold-200 to-blush-200 opacity-40 blur-2xl"></div>
                            <img
                                src="team1.jpeg"
                                className="relative w-full h-full max-h-[600px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-soft-lg"
                                alt="Qui sommes-nous ?"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-lg p-6 hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-cormorant text-2xl text-neutral-900 font-light">25 ans</p>
                                        <p className="font-montserrat text-xs text-neutral-500 tracking-wider uppercase">d'expertise</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className="py-12 md:py-16 bg-neutral-900 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/5 blur-3xl"></div>
                <div className="container-lux relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <p className="font-cormorant text-4xl md:text-5xl font-light text-gold-400">{stat.value}</p>
                                <p className="font-montserrat text-xs text-neutral-400 tracking-widest2 uppercase mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== POINTS ===== */}
            <section className="section-pad">
                <div className="container-lux">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="eyebrow mb-4 block">Nos atouts</span>
                        <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">Ce que nous offrons</h2>
                        <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 hover:border-gold-300 hover:shadow-soft transition-all duration-500"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={point.icon} />
                                    </svg>
                                </div>
                                <span className="font-montserrat text-sm font-light text-neutral-700 leading-relaxed pt-3">{point.text}</span>
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
                            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-neutral-900">Envie de découvrir nos services ?</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to='/prestations' className="btn-primary">Voir les prestations</Link>
                                <Link to='/formations' className="btn-outline">Découvrir les formations</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Quisommenous
