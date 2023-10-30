/* eslint-disable jsx-a11y/alt-text */
import { BackgroundImage,Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <div className="bg-white">
  <BackgroundImage src="/pexel_visage.jpg" className="text-black font-lora bg-amber-50 opacity-70">
  <div className="container px-10 py-10 mx-auto flex flex-col-reverse md:flex-row-reverse flex-wrap justify-center">
    <div className="lg:w-2/5 md:w-full md:pr-16 lg:pr-0 pr-0 mb-8 mr-10 flex flex-col items-center justify-center">
    <img src="/logo.jpg" alt="centre de beauté" className="rounded-lg h-72 w-72 mb-4" />
      {/* <h1 className="text-5xl text-white uppercase">Ckesthetik</h1> */}
      <p className="leading-relaxed mt-4 text-lg font-bold text-white">
      CENTRE DE FORMATION
      AUX MÉTIERS DE LA BEAUTÉ</p>
    </div>
    <div className="lg:w-3/6 md:w-full rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
     <div className="flex items-center justify-center mr-20 space-x-1">
     {/* <img src="/pexel_visage.jpg" alt="centre de beauté" className="rounded-lg  h-60 w-full object-cover object-center" /> */}
     </div>
    </div>
  </div>
</BackgroundImage>
<section className="py-10 md:py-20 text-gray-700 bg-white bg font-lora">
  <div className="container px-5 md:px-40 items-center mx-auto">
  <div className="w-full">
  <h2 className="mb-4 text-3xl leading-tight tracking-tight sm:text-4xl font-heading text-gray-900">Notre Academie </h2>
     <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <img src="carina.jpeg" alt="centre de beauté" className="rounded-lg h-72 w-72 mb-4 object-contain" />
     
     <p className="mb-4 font-normal tracking-tight text-gray-900 xl:mb-6 text-justify ml-6">
                  Professionnelle de renommée internationale des métiers de l’esthétique,
      Mme CHIRARA Karina, Titulaire d’un CAP et d’un BP ESTHETIQUE-COSMETIQUE de l’école Fournier de VICHY,
      Riche de 25 années d’expériences,  en tant qu’esthéticienne spécialisée en audit d’institut et en tant que formatrice aux métiers de la beauté, aujourd’hui elle souhaite transmettre son savoir , sa passion et apporter son expertise aux professionnels de notre noble métier.
      Ayant déjà eu l'occasion de gérer de ré organisé plusieurs instituts et spa, , notamment dans la région de la Lorraine en France , puis au Grand-duché de Luxembourg , du Bénin , de Dakar…..
      Une expérience qu’elle met à la disposition de sa clientèle et de son équipe hautement qualifiée et dotée d’une technicité d’excellence qui satisferont vos besoins selon le concept
      « Des compétences au service d’une éthique ».
</p>
     </div>
     <div className="flex flex-col md:flex-row items-center justify-between md:mx-5 my-2">
      <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Un centre de bien-être </span>
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
              <span className="font-medium text-gray-800">Accompagement pour la creation d'un institue de beauté</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
              <span className="font-medium text-gray-800">Possibilité de stage en entreprise</span>
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
    </ul> 
<div className="w-2/3 mx-auto">
 <Carousel slideSize="80%" height={400} slideGap="md"  plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset} loop>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/bannerd3.jpg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/bannerd4.jpg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/bannerd5.jpg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/diapo2.jpeg"
    />
     </Carousel.Slide>
     <Carousel.Slide>
     <Image
      radius="md"
      className="h-full"
      src="/diapo3.jpeg"
    />
     </Carousel.Slide>
    </Carousel>
</div>
   
     </div>
            
    
    </div>
  </div>
</section>
<section className="mt-3 font-lora container space-y-2 md:space-y-0 mx-auto w-full md:w-full px-40">
 <div className="flex flex-col-reverse md:flex-row space-y-1 md:space-y-0 items-center">
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">SOINS VISAGES</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=soin-visage" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg font-bold mt-10 sm:mt-0">Nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/soin_visage.webp" alt="soin visage" className="h-60 w-60 rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">SOINS CORPS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=soin-corps" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg font-bold mt-10 sm:mt-0">Nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/massage.jpg" alt="soin visage" className="h-60 w-60 rounded-full object-cover" />
   </div>
 </div>
 <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 items-center">
 <div className="bg-white h-60 w-96 flex items-center justify-center">
 <img src="/makup.jpg" alt="makeup" className="h-60 w-60 rounded-full object-cover" />
   </div>
 <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">    
      <h1 className="text-2xl font-bold">MAQUILLAGE</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=maquillage" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg font-bold mt-10 sm:mt-0">Nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/rituel.jpg" alt="rituel" className="h-60 w-60 rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">  
      <h1 className="text-2xl font-bold">RITUELS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=rituel" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg font-bold mt-10 sm:mt-0">Nos tarifs</Link>
   </div>
 </div>
 <div className="flex flex-col-reverse md:flex-row space-y-1 md:space-y-0 items-center">
 <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
    
      <h1 className="text-2xl font-bold">EPILATIONS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=epilation" className="flex-shrink-0 text-white  border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg font-bold mt-10 sm:mt-0">Nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/EPILATION.jpg" alt="epilation" className="h-60 w-60 rounded-full object-cover" />
   </div>
   <div className="bg-black space-y-3 text-white font-semibold text-2xl h-60 w-96 flex flex-col items-center justify-center">
   
   <h1 className="text-2xl font-bold">MAINS ET PIEDS</h1>
      <hr className="w-10 h-1 bg-white" />
      <Link to="/prestations?q=pedicure-manicure" className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg font-bold mt-10 sm:mt-0">Nos tarifs</Link>
   </div>
   <div className="bg-white h-60 w-96 flex items-center justify-center">
   <img src="/onglerie.jpg" alt="pedicure manicure" className="h-60 w-60 rounded-full object-cover" />
   </div>
 </div>
</section>
 {/* <section className="mt-2 font-lora container px-5 md:px-40 mx-auto w-full md:w-full">
<Carousel autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                <div className="mx-auto w-full">
                    <img src="w1.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w2.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w4.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w5.jpeg" className="w-full h-110 object-cover object-bottom rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w6.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w7.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="bannerd1.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="bannerd2.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="bannerd3.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="bannerd4.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="bannerd5.jpg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w8.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w9.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w10.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
               
                <div className="mx-auto w-full">
                    <img src="w12.jpeg" className="w-full h-110 object-cover object-bottom rounded-lg" />
                </div>
                <div className="mx-auto w-full">
                    <img src="w13.jpeg" className="w-full h-110 object-cover rounded-lg" />
                </div>
               
            </Carousel>
</section>  */}
        </div>
    )
}

export default Home
