import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
    <div className="font-[sans-serif] relative before:absolute before:w-full before:h-1/2 max-lg:before:h-1/4 before:bg-white before:z-10">
  <div className="max-w-6xl max-md:max-w-xl mx-auto py-10 px-4 relative z-20">
   <section className="mx-10 py-8 leading-7 text-gray-900 bg-white sm:py-8 md:py-10 lg:py-16 font-lora">
    <div className="box-border mx-auto border-solid sm:px-6 md:px-6 lg:px-4 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border mb-4 text-xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-2xl md:text-3xl font-playfiar">
           FORMATION
            </h2>
            <h2 className="box-border mb-4 text-2xl font-semibold leading-tight tracking-tight text-gray-800 border-solid sm:text-lg md:text-xl">
            Choisissez un ou plusieurs modules 
            </h2>
            <div className="flex flex-col text-sm md:text-xl items-start text-justify">
            <h2 className="box-border mb-4 text-lg font-semibold leading-tight tracking-tight text-gray-800 border-solid sm:text-sm md:text-lg">
            La durée de chaque formation equivaut à 60 heures effectives de travail
            </h2>
            <h2 className="box-border font-semibold leading-tight tracking-tight text-gray-800">
            - 32 heures avec le professeur
            </h2>
            <h2 className="box-border font-semibold leading-tight tracking-tight text-gray-800">
            - 20 heures de pratique
            </h2>
            <h2 className="box-border font-semibold leading-tight tracking-tight text-gray-800 ">
            - 8 heures de DM
            </h2>
            <h2 className="box-border font-semibold leading-tight tracking-tight text-gray-800 ">
            - Workshop
            </h2>
            </div>
           
        </div>
    </div>
</section>
 <Fade cascade damping={0.3} duration={2000}>

 </Fade>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION EPILATIONS</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">990€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="EPILATION.jpg" alt="epilation"
             className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Théorie
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Epilation jambes complètes et bras
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Epilation aisselles et maillot
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Epilation visage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
          </ul>
          <Link type='button' to="/formations/epilation" className="w-full mt-8 flex items-start justify-center px-2 py-2 text-sm text-gray-800 rounded  border border-[#809C5C] bg-transparent hover:bg-[#809C5C] hover:text-white transition-all">Voir la fiche</Link>
        </div>
      </div>


      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-105">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION  SOINS DU VISAGE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">1590€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="SV.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Anatomie de la peau /cosmétologie
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Déroulement d’un soin
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Les différents  gestes technique
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Différents types de peau (Peau déshydratée,Peau grasse,Peau sensible,Peau mature,Peau mixte)
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
          </ul>
          <Link type='button' to="/formations/soin-visage" className="w-full mt-8 flex items-start justify-center px-2 py-2 text-sm text-gray-800 rounded  border border-[#809C5C] bg-transparent hover:bg-[#809C5C] hover:text-white transition-all">Voir la fiche</Link>
        </div>
      </div>
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION MASSAGE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">1390€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="massage.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Déroulement d’un soin corps
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Gommage corps
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Enveloppement
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Massage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Soins jambes lourdes
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Soin du buste/Dos
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
          </ul>
          <Link type='button' to="/formations/soin-corps" className="w-full mt-8 flex items-start justify-center px-2 py-2 text-sm text-gray-800 rounded  border border-[#809C5C] bg-transparent hover:bg-[#809C5C] hover:text-white transition-all">Voir la fiche</Link>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION MANUCURE PEDICURE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">990€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="MANU-PEDI.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Les ongles : nature et maladies
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Le déroulement d’une manucure
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Le déroulement d’une pédicure
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pose vernis + pose vernis permanent
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Dépose vernis permanent
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels   manucure pédicure
            </li>
          </ul>
          <Link type='button' to="/formations/pedicure-manicure" className="w-full mt-8 flex items-start justify-center px-2 py-2 text-sm text-gray-800 rounded  border border-[#809C5C] bg-transparent hover:bg-[#809C5C] hover:text-white transition-all">Voir la fiche</Link>
        </div>
      </div>


      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-105">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION ONGLERIE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">1390€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="onglerie.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Matériel utilisé
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Règles d’hygiène
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pose capsule + limage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Application du gel
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              les différentes French
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Décoration d’ongle
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pose chablon
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Finition
            </li>
          </ul>
          <Link type='button' to="/formations/onglerie" className="w-full mt-8 flex items-start justify-center px-2 py-2 text-sm text-gray-800 rounded  border border-[#809C5C] bg-transparent hover:bg-[#809C5C] hover:text-white transition-all">Voir la fiche</Link>
        </div>
      </div>
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION MAQUILLAGE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">1290€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="makup.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Connaissances et hygiène des produits et outils de maquillage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Morphologie d’un visage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Colorimétrie
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Déroulement d’un maquillage
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Les différentes techniques de maquillage :Jour /Cocktail/Soir/Mariée
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique sur modèles réels
            </li>
            
          </ul>
          <Link type='button' to="/formations/maquillage" className="w-full mt-8 flex items-start justify-center px-2 py-2 text-sm text-gray-800 rounded  border border-[#809C5C] bg-transparent hover:bg-[#809C5C] hover:text-white transition-all">Voir la fiche</Link>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">FORMATION ACCUEIL –VENTE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">590€</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="vente.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Tenue
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Prise de rendez-vous
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Accueil Client
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Prise en charge de la cliente
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Le déroulement d’une pédicure
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Fiche cliente
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Vente additionnelle
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Pratique en situation réelle
            </li>
          </ul>
        </div>
      </div>


      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-105">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-[#809C5C] pb-1">PERFECTIONNEMENT  EXCELLENCE</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">SUR DEVIS</h3>
          </div>
        </div>
        <div className="mt-8">
        <img src="formation_complete.png" alt="epilation" className="w-full h-48 rounded-lg object-cover object-center mb-4" />
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION EPILATION
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION SOIN DU VISAGE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION SOIN DU CORPS
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION MANUCURE PEDICURE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION ONGLERIE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              FORMATION MAQUILLAGE
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-[#809C5C] rounded-full fill-white" viewBox="0 0 24 24">
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