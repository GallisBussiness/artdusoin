/* eslint-disable no-irregular-whitespace */
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
    <div className="bg-white">
  <div className="max-w-7xl mx-auto py-20 px-6">
   <section className="mb-16">
    <div className="text-center">
        <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-black uppercase">Formations</h2>
        <div className="separator"></div>
        <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider mb-8">Choisissez un ou plusieurs modules</p>
        <div className="max-w-md mx-auto text-left space-y-2">
          <p className="font-montserrat text-sm text-neutral-700">Durée : 60 heures effectives de travail</p>
          <div className="flex flex-wrap gap-4 mt-3">
            <span className="font-montserrat text-xs text-neutral-500 border border-neutral-200 px-3 py-1">32h avec le professeur</span>
            <span className="font-montserrat text-xs text-neutral-500 border border-neutral-200 px-3 py-1">20h de pratique</span>
            <span className="font-montserrat text-xs text-neutral-500 border border-neutral-200 px-3 py-1">8h de DM</span>
            <span className="font-montserrat text-xs text-neutral-500 border border-neutral-200 px-3 py-1">Workshop</span>
          </div>
        </div>
    </div>
</section>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION EPILATIONS</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">990€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="EPILATION.jpg" alt="epilation"
             className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Théorie
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Epilation jambes complètes et bras
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Epilation aisselles et maillot
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Epilation visage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
          </ul>
          <Link type='button' to="/formations/epilation" className="btn-outline w-full mt-8 flex items-center justify-center">Voir la fiche</Link>
        </div>
      </div>


      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION  SOINS DU VISAGE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">1590€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="SV.jpg" alt="epilation" className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Anatomie de la peau /cosmétologie
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Déroulement d’un soin
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Les différents  gestes technique
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Différents types de peau (Peau déshydratée,Peau grasse,Peau sensible,Peau mature,Peau mixte)
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
          </ul>
          <Link type='button' to="/formations/soin-visage" className="btn-outline w-full mt-8 flex items-center justify-center">Voir la fiche</Link>
        </div>
      </div>
      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION MASSAGE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">1390€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="massage.jpg" alt="epilation" className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Déroulement d’un soin corps
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Gommage corps
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Enveloppement
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Massage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Soins jambes lourdes
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Soin du buste/Dos
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
          </ul>
          <Link type='button' to="/formations/soin-corps" className="btn-outline w-full mt-8 flex items-center justify-center">Voir la fiche</Link>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION MANUCURE PEDICURE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">990€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="MANU-PEDI.jpg" alt="epilation" className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Les ongles : nature et maladies
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Le déroulement d’une manucure
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Le déroulement d’une pédicure
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pose vernis + pose vernis permanent
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Dépose vernis permanent
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels   manucure pédicure
            </li>
          </ul>
          <Link type='button' to="/formations/pedicure-manicure" className="btn-outline w-full mt-8 flex items-center justify-center">Voir la fiche</Link>
        </div>
      </div>


      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION ONGLERIE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">1390€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="onglerie.jpg" alt="epilation" className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pose capsule + limage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Application du gel
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              les différentes French
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Décoration d’ongle
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pose chablon
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Finition
            </li>
          </ul>
          <Link type='button' to="/formations/onglerie" className="btn-outline w-full mt-8 flex items-center justify-center">Voir la fiche</Link>
        </div>
      </div>
      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION MAQUILLAGE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">1290€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="makup.jpg" alt="epilation" className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Connaissances et hygiène des produits et outils de maquillage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Morphologie d’un visage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Colorimétrie
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Déroulement d’un maquillage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Les différentes techniques de maquillage :Jour /Cocktail/Soir/Mariée
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
            
          </ul>
          <Link type='button' to="/formations/maquillage" className="btn-outline w-full mt-8 flex items-center justify-center">Voir la fiche</Link>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">FORMATION ACCUEIL –VENTE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">590€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="vente.jpg" alt="epilation" className="w-full h-48 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Tenue
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Prise de rendez-vous
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Accueil Client
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Prise en charge de la cliente
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Le déroulement d’une pédicure
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Fiche cliente
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Vente additionnelle
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique en situation réelle
            </li>
          </ul>
        </div>
      </div>


      <div className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors duration-300">
        <div className="flex items-start">
          <h3 className="font-cormorant text-xl text-black font-light tracking-wider uppercase border-b border-gold pb-2">PERFECTIONNEMENT  EXCELLENCE</h3>
          <div className="ml-auto">
            <h3 className="font-cormorant text-xl text-black font-light">SUR DEVIS</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="formation_complete.png" alt="epilation" className="w-full h-48 object-cover object-center mb-6 grayscale hover:grayscale-0 transition-all duration-500" />
          <ul className="space-y-3 text-neutral-600 font-montserrat">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION EPILATION
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION SOIN DU VISAGE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION SOIN DU CORPS
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION MANUCURE PEDICURE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION ONGLERIE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION MAQUILLAGE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-3 p-[2px] bg-black rounded-full fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION ACHAT-VENTE
            </li> 
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Pricing