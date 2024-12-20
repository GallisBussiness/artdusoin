/* eslint-disable jsx-a11y/alt-text */
import {Image} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import Presentation from './Presentation';
import Features from './Features';
import { Fade } from "react-awesome-reveal";

function Home() {

  const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <div className="bg-white">
      <section className="mt-3 font-lora container space-y-2 md:space-y-0 mx-auto w-full md:w-full px-40">
      <Fade cascade damping={0.3} duration={2000}>
 <div className="flex flex-col-reverse md:flex-row space-y-1 md:space-y-0 items-center">
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold font-playfiar">SOINS VISAGES</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=soin-visage" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none bg-[#fbe094cc] hover:text-gray-900 rounded text-lg font-bold font-playfiar mt-10 sm:mt-0">En savoir plus</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/cadran/imgsoins.jpg" alt="soin visage" className="h-60 w-60 rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold font-playfiar">SOINS CORPS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=soin-corps" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none bg-[#fbe094cc] hover:text-gray-900 rounded text-lg font-bold font-playfiar mt-10 sm:mt-0">En savoir plus</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/cadran/massage.webp" alt="soin visage" className="h-60 w-60 rounded-full object-cover" />
   </div>
 </div>

 <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 items-center">
 <div className="bg-white h-60 w-96 flex items-center justify-center">
 <img src="/cadran/maquillage.jpeg" alt="makeup" className="h-60 w-60 rounded-full object-cover" />
   </div>
 <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">    
      <h1 className="text-2xl font-bold font-playfiar">MAQUILLAGE</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=maquillage" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none bg-[#fbe094cc] hover:text-gray-900 rounded text-lg font-bold font-playfiar mt-10 sm:mt-0">En savoir plus</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/cadran/imgfleur.jpg" alt="rituel" className="h-60 w-60 rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">  
      <h1 className="text-2xl font-bold font-playfiar">RITUELS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=rituel" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none bg-[#fbe094cc] hover:text-gray-900 rounded text-lg font-bold font-playfiar mt-10 sm:mt-0">En savoir plus</Link>
   </div>
 </div>
 <div className="flex flex-col-reverse md:flex-row space-y-1 md:space-y-0 items-center">
 <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
    
      <h1 className="text-2xl font-bold font-playfiar">EPILATIONS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=epilation" className="flex-shrink-0 text-white  border-0 py-2 px-8 focus:outline-none bg-[#fbe094cc] hover:text-gray-900 rounded text-lg font-bold font-playfiar mt-10 sm:mt-0">En savoir plus</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/EPILATION.jpg" alt="epilation" className="h-60 w-60 rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
   
   <h1 className="text-2xl font-bold font-playfiar">MAINS ET PIEDS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=pedicure-manicure" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none bg-[#fbe094cc] hover:text-gray-900 rounded text-lg font-bold font-playfiar mt-10 sm:mt-0">En savoir plus</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/cadran/imgpied.jpg" alt="pedicure manicure" className="h-60 w-60 rounded-full object-cover" />
   </div>
 </div>
 </Fade>
</section>
<section className="py-10 md:py-20 text-gray-700 bg-white w-full font-lora">
  <div>
  <div className="w-full space-y-5">
     {/* <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <img src="carina2.jpeg" alt="centre de beauté" className="rounded-lg h-44 w-44 mb-4 object-contain" />
     
     <p className="mb-4 font-playfiar tracking-tight text-gray-900 xl:mb-6 text-justify ml-6">
                  Professionnelle de renommée internationale des métiers de l’esthétique,
      Mme CHIRARA Karina, Titulaire d’un CAP et d’un BP ESTHETIQUE-COSMETIQUE de l’école Fournier de VICHY,
      Riche de 25 années d’expériences,  en tant qu’esthéticienne spécialisée en audit d’institut et en tant que formatrice aux métiers de la beauté, aujourd’hui elle souhaite transmettre son savoir , sa passion et apporter son expertise aux professionnels de notre noble métier.
      Ayant déjà eu l'occasion de gérer de ré organisé plusieurs instituts et spa, , notamment dans la région de la Lorraine en France , puis au Grand-duché de Luxembourg , du Bénin , de Dakar…..
      Une expérience qu’elle met à la disposition de sa clientèle et de son équipe hautement qualifiée et dotée d’une technicité d’excellence qui satisferont vos besoins selon le concept
      « Des compétences au service d’une éthique ».
</p>
     </div> */}
     <Presentation title="Mme CHIRARA Karina" text="Professionnelle de renommée internationale des métiers de l’esthétique,
      Mme CHIRARA Karina, Titulaire d’un CAP et d’un BP ESTHETIQUE-COSMETIQUE de l’école Fournier de VICHY,
      Riche de 25 années d’expériences,  en tant qu’esthéticienne spécialisée en audit d’institut et en tant que formatrice aux métiers de la beauté, aujourd’hui elle souhaite transmettre son savoir , sa passion et apporter son expertise aux professionnels de notre noble métier.
      Ayant déjà eu l'occasion de gérer de ré organisé plusieurs instituts et spa, , notamment dans la région de la Lorraine en France , puis au Grand-duché de Luxembourg , du Bénin , de Dakar…..
      Une expérience qu’elle met à la disposition de sa clientèle et de son équipe hautement qualifiée et dotée d’une technicité d’excellence qui satisferont vos besoins selon le concept
      « Des compétences au service d’une éthique »." image="carina2.jpeg" />
      <Features />
     <div className="flex flex-col md:flex-row items-center justify-between md:mx-5 my-2">
      {/* <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Des Soins Haut de Gamme</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Des formations Personnalisées</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Accompagement pour la creation d'un institut de beauté</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Entrainement sur des modèles réels</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Audit d'institut de beauté</span>
            </li>
    </ul>  */}
<div className="w-2/3 mx-auto">
 <Carousel slideSize="80%" height={400} slideGap="md"  plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset} loop>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full object-cover"
      src="/carousel/1.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/2.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/3.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/4.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/5.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/6.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/7.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/8.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/carousel/9.jpeg"
    />
     </Carousel.Slide>
    </Carousel>

</div>
   
     </div>
            
    
    </div>
  </div>
</section>

        </div>
    )
}

export default Home
