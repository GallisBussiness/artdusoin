import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebook,FaInstagram } from 'react-icons/fa'

function Contact() {
    return (
        <div className="bg-white">
            <section className="text-gray-900 font-lora">
  <div className="container px-2 py-24 mx-auto">
    <div className="bg-gray-300 rounded-lg overflow-hidden p-10 min-h-screen relative">
      <iframe width="100%" height="100%" className="absolute inset-0" title="map"  src="https://maps.google.com/maps?q=Cit%C3%A9%20Isra%202-%20Hann%20Marinas-DAKAR&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
      <div className="w-full bg-white  absolute top-10 flex flex-wrap py-6 rounded shadow-md">
        <div className="w-full lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">ADDRESS</h2>
          <p className="mt-1">Cité Isra 2- Hann Marinas-DAKAR</p>
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
          <p className="leading-relaxed">+221 33 832 89 64</p>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mt-4">MOBILE</h2>
          <p className="leading-relaxed">+221 77 847 43 77</p>
        </div>
      </div>
    </div>
    </div>
</section>
        </div>
    )
}

export default Contact
