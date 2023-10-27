import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import json from '../data.json'
function FormationDetails() {
    const { id } = useParams()
    const [formation,setFormation] = useState({})
    useEffect(() => {
        window.scrollTo({top: 0})
        const f = json.data.formations.find((f) => f.id === +id);
        setFormation(f)
        return () => {
            return null
        }
    }, [id,formation])
   
    return (
        <div className="font-lora container mx-auto px-12">
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <>
        <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="/image1.jpg" />
      </div>
      </>
      
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{formation?.title}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <div className="text-sm md:text-lg font-lora p-1 rounded-lg bg-pink-500 text-white my-2">{formation.duree} semaines</div>
        <div className="text-sm md:text-lg font-lora text-white p-1 rounded-lg bg-blue-500 my-2">{formation.prix} FCFA</div>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">{formation?.description}</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default FormationDetails
