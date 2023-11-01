import React from 'react'

function Maquillage() {
    return (
        <>
              <div className="px-10 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-10">
                <>
                    <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">MAQUILLAGE JOUR</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1 h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  25 €
                  </div>
                </div>
                 </div>
                </div> 
                </>
              
                <>
                     <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">MAQUILLAGE SOIRÉE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 45 MIN 
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  30 €
                  </div>
                </div>
                 </div>
                </div>
                </>  
               
                <>
                     <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">MAQUILLAGE MARIÉE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1h 15min
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  60 €
                  </div>
                </div>
                 </div>
                </div>
                </>
               
                <>
                  <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">ESSAI MAQUILLAGE MARIÉE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1 h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  40 €
                  </div>
                </div>
                 </div>
                </div>  
                </>
                
                <>
                   <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">COURS D'AUTO MAQUILLAGE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1 h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  50 €
                  </div>
                </div>
                 </div>
                </div> 
                </>
                

            </div>
        </div>
        </>
    )
}

export default Maquillage
