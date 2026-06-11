/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Presentation from './Presentation';
import Features from './Features';
import { Fade } from "react-awesome-reveal";
import { QRCodeSVG } from 'qrcode.react';

function Home() {
  const services = [
    { title: "Soins Visages", image: "/cadran/imgsoins.jpg", link: "/prestations?q=soin-visage" },
    { title: "Soins Corps", image: "/cadran/massage.webp", link: "/prestations?q=soin-corps" },
    { title: "Maquillage", image: "/cadran/maquillage.jpeg", link: "/prestations?q=maquillage" },
    { title: "Rituels", image: "/cadran/imgfleur.jpg", link: "/prestations?q=rituel" },
    { title: "Epilations", image: "/EPILATION.jpg", link: "/prestations?q=epilation" },
    { title: "Mains & Pieds", image: "/cadran/imgpied.jpg", link: "/prestations?q=pedicure-manicure" },
  ];

    return (
        <div className="bg-white">
           <div className="grid md:grid-cols-2 max-md:gap-0 min-h-[70vh]">
    <div className="flex flex-col justify-center items-center text-center px-8 md:px-16 py-16 md:py-24">
      <h1 className="font-cormorant font-light text-5xl md:text-7xl tracking-wider text-black leading-tight">
        L'ART DU SOIN
      </h1>
      <div className="separator"></div>
      <p className="font-montserrat text-sm md:text-base font-light leading-relaxed text-neutral-600 max-w-md mt-2">
        Des soins d'exception pour sublimer votre beauté naturelle. 
        Une expertise de 25 années au service de votre bien-être.
      </p>
      <Link to='/prestations' className="btn-primary mt-10">
        Nos Prestations
      </Link>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <a href="tel:+33785153621" className="flex items-center gap-2 text-neutral-500 hover:text-black text-xs font-montserrat tracking-wider transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          +33 785 153 621
        </a>
        <a href="mailto:karina.chirara@gmail.com" className="flex items-center gap-2 text-neutral-500 hover:text-black text-xs font-montserrat tracking-wider transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          karina.chirara@gmail.com
        </a>
      </div>
      {/* QR Code Réservation */}
      <div className="mt-8 flex flex-col items-center">
        <div className="p-3 bg-white border border-neutral-200 rounded-lg shadow-sm">
          <QRCodeSVG
            value="https://www.planity.com/lart-du-soin-57240-knutange"
            size={100}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
          />
        </div>
        <p className="mt-2 text-xs font-montserrat text-neutral-500 tracking-wider">Scannez pour réserver</p>
      </div>
    </div>
    <div className="relative bg-[#C4A77D] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#B8976D] opacity-20"></div>
      <div className="relative z-10 p-12">
        <img src="/logo.svg" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-neutral-700" alt="Art du Soin" />
      </div>
    </div>
  </div>
      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-black uppercase">Nos Soins</h2>
            <div className="separator"></div>
            <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider">Une gamme complète de soins pour votre bien-être</p>
          </div>
          <Fade cascade damping={0.1} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="group relative overflow-hidden aspect-[4/3] bg-black">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-white tracking-wider uppercase">{service.title}</h3>
                  <div className="w-12 h-[1px] bg-gold my-4"></div>
                  <span className="font-montserrat text-xs text-white tracking-widest2 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">Découvrir</span>
                </div>
              </Link>
            ))}
          </div>
          </Fade>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
     <Presentation title="Mme CHIRARA Karina" text="Professionnelle de renommée internationale des métiers de l’esthétique, Mme CHIRARA Karina, Titulaire d’un CAP et d’un BP ESTHETIQUE-COSMETIQUE de l’école Fournier de VICHY, Riche de 25 années d’expériences, en tant qu’esthéticienne spécialisée en audit d’institut et en tant que formatrice aux métiers de la beauté, aujourd’hui elle souhaite transmettre son savoir, sa passion et apporter son expertise aux professionnels de notre noble métier." image="carina2.jpeg" />
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Gallery Bento Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-white uppercase">Notre Galerie</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-4 mb-3"></div>
            <p className="font-montserrat text-xs font-light text-neutral-400 tracking-widest uppercase">Quelques instants capturés dans notre institut</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[180px] md:auto-rows-[220px]">
            {[
              { src: "/carousel/1.jpeg", span: "md:col-span-2 md:row-span-2" },
              { src: "/carousel/2.jpeg", span: "" },
              { src: "/carousel/3.jpeg", span: "" },
              { src: "/carousel/w15.jpeg", span: "md:row-span-2" },
              { src: "/carousel/5.jpeg", span: "" },
              { src: "/carousel/6.jpeg", span: "" },
              { src: "/carousel/w16.jpeg", span: "md:col-span-2" },
              { src: "/carousel/8.jpeg", span: "" },
              { src: "/carousel/w17.jpeg", span: "" },
            ].map((img, i) => (
              <div key={i} className={`group relative overflow-hidden cursor-pointer ${img.span}`}>
                <img
                  src={img.src}
                  alt={`Galerie ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

        </div>
    )
}

export default Home
