import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
    const links = [
        { to: '/', label: 'Accueil' },
        { to: '/prestations', label: 'Prestations' },
        { to: '/formations', label: 'Formations' },
        { to: '/qui-sommes-nous', label: 'À propos' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <footer className="bg-neutral-900 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blush-300/5 blur-3xl"></div>

            <div className="container-lux py-16 md:py-20 relative z-10">
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <img src="/logo/ck.png" alt="CK Esthetik" className="h-16 w-auto object-contain mx-auto mb-4 brightness-0 invert" />
                    <div className="ornament max-w-xs mx-auto"></div>
                    <p className="font-montserrat text-sm text-neutral-400 mt-6 max-w-md mx-auto font-light tracking-wide">
                        L'art du soin d'exception. Une expertise de 25 années au service de votre bien-être et de votre beauté naturelle.
                    </p>
                </motion.div>

                {/* Links */}
                <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
                    {links.map((link, i) => (
                        <motion.div
                            key={link.to}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <Link
                                to={link.to}
                                className="text-xs leading-6 text-neutral-400 hover:text-gold-400 font-montserrat tracking-widest2 uppercase transition-colors duration-300 link-underline"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Social + contact */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/institutbeautedakar" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 border border-neutral-700 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 hover:scale-110">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/ck.esthetik/" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 border border-neutral-700 hover:bg-blush-400 hover:text-white hover:border-blush-400 transition-all duration-300 hover:scale-110">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <a href="tel:+33785153621" className="flex items-center gap-2 text-neutral-400 hover:text-gold-400 text-xs font-montserrat tracking-wider transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +33 785 153 621
                    </a>
                    <a href="mailto:karina.chirara@gmail.com" className="flex items-center gap-2 text-neutral-400 hover:text-gold-400 text-xs font-montserrat tracking-wider transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        karina.chirara@gmail.com
                    </a>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-neutral-800 text-center">
                    <p className="text-xs text-neutral-500 font-montserrat tracking-wider">
                        &copy; {new Date().getFullYear()} CK Esthetik — L'Art du Soin. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
