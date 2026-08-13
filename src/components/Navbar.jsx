import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [location.pathname])

    const navLinks = [
        { to: '/', label: 'Accueil' },
        { to: '/prestations', label: 'Prestations' },
        { to: '/formations', label: 'Formations' },
        { to: '/qui-sommes-nous', label: 'À propos' },
        { to: '/contact', label: 'Contact' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-white/80 backdrop-blur-sm py-5'
        }`}>
            <div className="container-lux flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center shrink-0 group">
                    <img src="/logo/ck.png" alt="CK Esthetik" className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`relative font-montserrat text-xs tracking-widest2 uppercase transition-colors duration-300 link-underline ${
                                isActive(link.to) ? 'text-gold-600' : 'text-neutral-700 hover:text-gold-600'
                            }`}
                        >
                            {link.label}
                            {isActive(link.to) && (
                                <motion.span
                                    layoutId="navIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold-500 rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop right actions */}
                <div className="hidden lg:flex items-center gap-5">
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/institutbeautedakar" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 hover:text-white hover:bg-neutral-900 hover:scale-110 transition-all duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/ck.esthetik/" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 hover:text-white hover:bg-blush-400 hover:scale-110 transition-all duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <a href="tel:+33785153621" className="flex items-center gap-2 text-neutral-700 hover:text-gold-600 text-xs font-montserrat tracking-wider transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +33 785 153 621
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
                    aria-label="Menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block h-[2px] bg-neutral-900 rounded-full" />
                        <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block h-[2px] bg-neutral-900 rounded-full" />
                        <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block h-[2px] bg-neutral-900 rounded-full" />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
                    >
                        <nav className="container-lux py-6 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.to}
                                        className={`block py-3 px-4 rounded-xl font-montserrat text-sm tracking-widest2 uppercase transition-colors duration-300 ${
                                            isActive(link.to)
                                                ? 'text-gold-600 bg-gold-50'
                                                : 'text-neutral-700 hover:bg-neutral-50 hover:text-gold-600'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="flex items-center gap-4 mt-4 px-4">
                                <a href="https://www.facebook.com/institutbeautedakar" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/ck.esthetik/" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 bg-neutral-100 hover:bg-blush-400 hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="tel:+33785153621" className="flex items-center gap-2 text-neutral-700 text-xs font-montserrat tracking-wider">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    +33 785 153 621
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
