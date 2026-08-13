import { useState } from 'react'
import { motion } from 'framer-motion'
import { notifications } from '@mantine/notifications'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        notifications.show({
            title: 'Message envoyé',
            message: 'Nous vous répondrons dans les plus brefs délais.',
            color: 'gold',
            autoClose: 4000,
        })
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    const contactInfo = [
        {
            label: "Email",
            value: "karina.chirara@gmail.com",
            href: "mailto:karina.chirara@gmail.com",
            icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
        },
        {
            label: "Téléphone",
            value: "+33 785 153 621",
            href: "tel:+33785153621",
            icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
        },
        {
            label: "Réservation",
            value: "Réserver en ligne via Planity",
            href: "https://www.planity.com/lart-du-soin-57240-knutange",
            icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
        },
    ]

    return (
        <div className="bg-cream-50 min-h-screen">
            {/* Header */}
            <div className="container-lux pt-16 md:pt-20 pb-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="eyebrow mb-4 block">Échangeons</span>
                    <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-neutral-900 uppercase">Contact</h2>
                    <div className="ornament mt-6 max-w-[200px] mx-auto"></div>
                    <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mt-4 max-w-xl mx-auto">
                        Nous serions ravis de vous entendre et de répondre à toutes vos questions
                    </p>
                </motion.div>
            </div>

            {/* Content */}
            <div className="container-lux pb-20 md:pb-28">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-neutral-100 hover:border-gold-300 hover:shadow-soft transition-all duration-500"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-playfiar text-sm tracking-widest2 uppercase text-neutral-400 mb-1">{info.label}</h4>
                                        <p className="font-montserrat text-sm text-neutral-700 group-hover:text-gold-700 transition-colors duration-300">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-blush-50 to-gold-50 border border-gold-100">
                            <h4 className="font-playfiar text-sm tracking-widest2 uppercase text-neutral-900 mb-4">Suivez-nous</h4>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/institutbeautedakar" aria-label="Facebook" className="w-12 h-12 rounded-full flex items-center justify-center text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 hover:scale-110 shadow-soft">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/ck.esthetik/" aria-label="Instagram" className="w-12 h-12 rounded-full flex items-center justify-center text-neutral-700 bg-white border border-neutral-200 hover:bg-blush-400 hover:text-white hover:border-blush-400 transition-all duration-300 hover:scale-110 shadow-soft">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-soft border border-neutral-100 h-64">
                            <iframe
                                title="Localisation CK Esthetik"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.8689879!2d6.0733!3d49.3293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE5JzQ1LjQiTiA2wrAwNCcyMC4wIkU!5e0!3m2!1sfr!2sfr!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-8 md:p-10"
                    >
                        <h3 className="font-cormorant text-2xl font-light tracking-wider text-neutral-900 uppercase mb-2">Envoyez-nous un message</h3>
                        <div className="w-12 h-[1px] bg-gold-500 mb-8"></div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-montserrat text-xs tracking-widest2 uppercase text-neutral-500 mb-2">Prénom et Nom</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full text-neutral-900 bg-neutral-50 rounded-xl border border-neutral-200 py-4 px-5 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block font-montserrat text-xs tracking-widest2 uppercase text-neutral-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full text-neutral-900 bg-neutral-50 rounded-xl border border-neutral-200 py-4 px-5 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label className="block font-montserrat text-xs tracking-widest2 uppercase text-neutral-500 mb-2">Sujet</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full text-neutral-900 bg-neutral-50 rounded-xl border border-neutral-200 py-4 px-5 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                                    placeholder="Objet de votre message"
                                />
                            </div>
                            <div>
                                <label className="block font-montserrat text-xs tracking-widest2 uppercase text-neutral-500 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full text-neutral-900 bg-neutral-50 rounded-xl border border-neutral-200 py-4 px-5 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300 resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>
                            <button type="submit" className="btn-primary w-full">
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact
