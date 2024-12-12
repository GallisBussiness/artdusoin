import React from 'react'

function Rituel() {
    return (
        <>
        <div className="px-10 py-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-10">
                <>
                   <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold font-playfiar text-gray-800 text-lg">RITUEL PRESTIGE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1 h 30min
                  </div>
                  <div className="text-2xl text-gray-600 font-bold font-playfiar">
                  70 €
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-x-2">
                <hr className="w-10 h-1 bg-black my-1" />
                   <div className="text-lg text-black text-justify">
                  Après une exfoliation à la pulpe de coco, Plonger au coeur du lagon pour un enveloppement aux senteurs de tiaré paradisiaque et voyager à travers les pressions lentes et harmonieuses d'un massage drainant.
                  Une sensation de détente et de d'évasion vous envahit. Ce soin sera accompagné d'un thé chand. Gommage-massage et thé
                 </div>
                 </div>
                 </div>
                </div> 
                </>
              

                <>
                      <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold font-playfiar text-gray-800 text-lg">RITUEL THALLOSSO MINERAL</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 2 h 30
                  </div>
                  <div className="text-2xl text-gray-600 font-bold font-playfiar">
                  145 €
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-x-2">
                <hr className="w-10 h-1 bg-black my-1" />
                   <div className="text-lg text-black ">
                  Sous l'effet conjugué des boues marines naturelles de la Mer et les sels marins. Ce soin original vous offre une exfoliation detoxifiant.
                  Une hydratation profonde et une douceur extrême. Retrouver la pureté de votre corps et de votre visage,
                  Naviguer à travers les vagues par son massage relaxant.
                  Gommage-enveloppement-soin visage-massage et thé.
                 </div>
                 </div>
                 </div>
                </div>
                </>

                <>
                      <div className="bg-white shadow-lg rounded-lg w-96 animate__animated animate__zoomIn">
                <div className="py-5 px-5">
                <span className="font-bold font-playfiar text-gray-800 text-lg">RITUEL ANCESTRAL</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 4 h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold font-playfiar">
                  270 €
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-x-2">
                <hr className="w-10 h-1 bg-black my-1" />
                   <div className="text-lg text-black">
                   Issu d'une tradition ancestrale oriantale, ce soin vous invite à purifier votre corps en profondeur grâce aux vertus exfoliantes et naturelles du savon noir originaire de la ville d'Essaouira au maroc, enveloppé par la douceur du rhassoul et de ses eaux florales.
                   Voyager à travers le temps par son massage unique. Gommage-enveloppement-massage et thé-soin visage-beauté des mains et pieds
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

export default Rituel
