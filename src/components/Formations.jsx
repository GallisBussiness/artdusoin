import React from 'react'
import { Link } from 'react-router-dom';

function Formations() {
    return (
        <div className="bg-white">

<section className="mx-10 py-8 leading-7 text-gray-900 bg-white sm:py-8 md:py-10 lg:py-16 font-lora">
    <div className="box-border mx-auto border-solid sm:px-6 md:px-6 lg:px-4 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border mb-4 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl font-playfiar">
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
            </div>
           
        </div>
    </div>
</section>
<section className="py-3 leading-7 text-gray-900 bg-white sm:py-3 md:py-3 lg:py-3 font-lora">
<div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-4 lg:grid-cols-3">
            <div 
            className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
        
            <img src="EPILATION.jpg" alt="epilation"
             className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl font-playfiar">
                FORMATION <br/>
                EPILATIONS
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        990
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Théorie
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Epilation jambes complètes et bras
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Epilation aisselles et maillot
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Epilation visage
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
                <Link to="/formations/epilation" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Voir la fiche</Link>
            </div>
            <div 
             className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0  rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                
            <img src="SV.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl font-playfiar">
                FORMATION <br/>
                SOINS DU VISAGE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        1590
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Anatomie de la peau /cosmétologie
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Déroulement d’un soin
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Les différents  gestes technique
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Différents types de peau (Peau déshydratée,Peau grasse,Peau sensible,Peau mature,Peau mixte)
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
                <Link to="/formations/soin-visage" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Voir la fiche</Link>
            </div>
            <div 
                       className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">                
            <img src="massage.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl font-playfiar">
                FORMATION <br/>
                MASSAGE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                      1390
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Déroulement d’un soin corps
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Gommage corps
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Enveloppement
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Massage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Soins jambes lourdes
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Soin du buste/Dos
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
                <Link to="/formations/soin-corps" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Voir la fiche</Link>

            </div>
        </div>
</section>
<section className="py-6 leading-7 text-gray-900 bg-white sm:py-6 md:py-6 lg:py-6 font-lora">
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <div
            className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">            
            <img src="MANU-PEDI.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl font-playfiar">
                FORMATION <br/>
                MANUCURE PEDICURE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        990
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                         Les ongles : nature et maladies
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                         Le déroulement d’une manucure
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Le déroulement d’une pédicure
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pose vernis + pose vernis permanent
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Dépose vernis permanent
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels   manucure pédicure
                    </li>
                </ul>
                <Link to="/formations/pedicure-manicure" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Voir la fiche</Link>

            </div>
            <div 
                        className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <img src="onglerie.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl font-playfiar">
                FORMATION <br/>
                ONGLERIE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        1390
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pose capsule + limage
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Application du gel
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        les différentes French
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Décoration d’ongle
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pose chablon
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Finition
                    </li>
                </ul>
                <Link to="/formations/onglerie" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Voir la fiche</Link>

            </div>
            <div 
                        className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <img src="makup.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl font-playfiar">
                FORMATION <br/>
                MAQUILLAGE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        1290
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Connaissances et hygiène des produits et outils de maquillage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Morphologie d’un visage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Colorimétrie
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Déroulement d’un maquillage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Les différentes techniques de maquillage :Jour /Cocktail/Soir/Mariée
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
                <Link to="/formations/maquillage" className="flex-shrink-0 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg mt-10 sm:mt-0">Voir la fiche</Link>

            </div>
        </div>
</section>
<section className="py-6 leading-7 text-gray-900 bg-white sm:py-6 md:py-6 lg:py-6 font-lora">
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900  sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <img src="vente.jpg" alt="epilation" className="w-full h-48 rounded-lg object-cover mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                FORMATION <br/>
                ACCUEIL –VENTE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        590
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        €
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Tenue
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Prise de rendez-vous 
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Accueil Client
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Prise en charge de la cliente 
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Fiche cliente
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Vente additionnelle
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique en situation réelle
                    </li>
                </ul>
            </div>
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <img src="formation_complete.png" alt="epilation" className="w-full h-48 rounded-lg object-cover object-center mb-4" />
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                PERFECTIONNEMENT <br/>
                EXCELLENCE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-3xl font-semibold leading-none border-solid">
                        SUR DEVIS
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION EPILATION
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION SOIN DU VISAGE
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION SOIN DU CORPS
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION MANUCURE PEDICURE
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION ONGLERIE
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION MAQUILLAGE
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-gray-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        FORMATION ACHAT-VENTE
                    </li>
                </ul>
            </div>
        </div>
</section>
        </div>
    )
}

export default Formations
