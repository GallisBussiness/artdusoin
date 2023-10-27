import React from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

function Formation({formation}) {
    return (
        <>
        <>
          <div className="w-full p-2 rounded-lg">
    <div className="">
      <img src={formation.id % 2 === 0 ? 'image1.jpg' : 'image2.jpg'} alt="imag" className="h-56 w-full object-cover rounded-lg" />
      <div className="text-lg font-lora float-left font-semibold my-2 p-1 text-white bg-pink-400 rounded-lg">{formation.title}</div>
      <div className="clear-both"></div>
      <div className="py-4 text-sm font-lora">
        {formation.description.substr(0,100)}
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="text-sm md:text-lg font-lora">{formation.duree} semaines</div>
        <div className="text-sm md:text-lg font-lora text-white p-1 rounded-lg bg-blue-500">{formation.prix} FCFA</div>
      </div>
      <Link to={`/formations/${formation.id}`}>
            <Button className="font-lora" rightIcon={<ArrowCircleRightIcon className="h-6 w-6"/>} colorScheme="pink" variant="link">En savoir plus</Button>
      </Link>
    </div>
  </div> 
        </>
      
        </>
    )
}

export default Formation
