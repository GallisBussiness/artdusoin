import React from 'react'

function Contact() {
    return (
        <div className="bg-white">

<div className="py-20">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-black uppercase">Contact</h2>
      <div className="separator"></div>
      <p className="font-montserrat text-sm font-light text-neutral-500 tracking-wider">Nous serions ravis de vous entendre</p>
    </div>
    <div className="grid md:grid-cols-2 gap-16">
      <div className="space-y-10">
        <div>
          <h4 className="font-playfiar text-sm tracking-widest2 uppercase text-black mb-4">Email</h4>
          <a href="mailto:karina.chirara@gmail.com" className="font-montserrat text-sm text-neutral-600 hover:text-black transition-colors duration-300">
            karina.chirara@gmail.com
          </a>
        </div>
        <div>
          <h4 className="font-playfiar text-sm tracking-widest2 uppercase text-black mb-4">T&eacute;l&eacute;phone</h4>
          <a href="tel:+33785153621" className="font-montserrat text-sm text-neutral-600 hover:text-black transition-colors duration-300">
            +33 785 153 621
          </a>
        </div>
        <div>
          <h4 className="font-playfiar text-sm tracking-widest2 uppercase text-black mb-4">R&eacute;seaux sociaux</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/institutbeautedakar" className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/ck_esthetik" className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <form className="space-y-6">
        <input type="text" placeholder="Pr&eacute;nom et Nom" className="w-full text-black bg-transparent border-b border-neutral-300 py-3 px-0 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-300" />
        <input type="email" placeholder="Email" className="w-full text-black bg-transparent border-b border-neutral-300 py-3 px-0 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-300" />
        <input type="text" placeholder="Sujet" className="w-full text-black bg-transparent border-b border-neutral-300 py-3 px-0 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-300" />
        <textarea placeholder="Message" rows={5} className="w-full text-black bg-transparent border-b border-neutral-300 py-3 px-0 text-sm font-montserrat placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-300 resize-none" defaultValue={""} />
        <button type="button" className="btn-primary w-full">Envoyer</button>
      </form>
    </div>
  </div>
</div>

            {/* <section className="text-gray-900 font-lora">
  <div className="container px-2 py-24 mx-auto">
    <div className="bg-gray-300 rounded-lg overflow-hidden p-10 min-h-screen relative">
<div style={{overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '100%', height: 500}}><div id="gmap-canvas" style={{height: '100%', width: '100%', maxWidth: '100%'}}><iframe style={{height: '100%', width: '100%', border: 0}} frameBorder={0} src="https://www.google.com/maps/embed/v1/place?q=12+rue+de+la+ceca+57700+Hayange&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" /></div></div>
      <div className="w-full bg-white  absolute top-10 flex flex-wrap py-6 rounded shadow-md">
        <div className="w-full lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">ADDRESS</h2>
          <p className="mt-1">12 rue de la ceca 57700 Hayange </p>
          <h2 className=" mt-20 font-semibold text-gray-900 tracking-widest text-lg">Réseau sociaux</h2>
          <HStack>
  <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
    <a href="https://www.facebook.com/institutbeautedakar">
       Facebook
    </a>
  </Button>
  <Button colorScheme="telegram" leftIcon={<FaInstagram />}>
  <a href="https://www.instagram.com/ck_esthetik">
  Instagram
    </a>
  </Button>
</HStack>
        </div>
        <div className="w-full lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">EMAIL</h2>
          <a href="mailto:karina.chirara@gmail.com" className="text-indigo-500 leading-relaxed">karina.chirara@gmail.com  </a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mt-4">PHONE</h2>
          <p className="leading-relaxed">+33 785 15 36 21</p>
        </div>
      </div>
    </div>
    </div>
</section> */}
        </div>
    )
}

export default Contact
