import React from 'react'

function Pricing() {
  return (
    <>
    <div className="font-[sans-serif] relative before:absolute before:w-full before:h-1/2 max-lg:before:h-1/4 before:bg-white before:z-10">
  <div className="max-w-6xl max-md:max-w-xl mx-auto py-10 px-4 relative z-20">
   <section className="mx-10 py-8 leading-7 text-gray-900 bg-white sm:py-8 md:py-10 lg:py-16 font-lora">
    <div className="box-border mx-auto border-solid sm:px-6 md:px-6 lg:px-4 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border mb-4 text-xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-2xl md:text-3xl font-playfiar">
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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-amber-600 pb-1">Starter</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">Free</h3>
            <p className="text-xs text-gray-600 mt-1">Free Sign Up</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-base text-gray-800 font-bold mb-4">Plan Includes</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              50 Image generations
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              500 Credits
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Monthly 100 Credits Free
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Customer Support
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Dedicated Server
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Priority Generations
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              50GB Cloud Storage
            </li>
          </ul>
          <button type="button" className="w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded  border border-amber-600 bg-transparent hover:bg-amber-600 hover:text-white transition-all">Get Started</button>
        </div>
      </div>
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-105">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-amber-600 pb-1">Business</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">$45.00/Mon</h3>
            <p className="text-xs text-gray-600 mt-1">7-Day Free Trial</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-base text-gray-800 font-bold mb-4">Plan Includes</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              600 Image generations
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              4000 Credits
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Monthly 2000 Credits Free
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Customer Support
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Dedicated Server
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Priority Generations
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              1000GB Cloud Storage
            </li>
          </ul>
          <button type="button" className="w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded  border border-amber-600 bg-transparent hover:bg-amber-600 hover:text-white transition-all">Get Started</button>
        </div>
      </div>
      <div className="bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 lg:scale-95">
        <div className="flex items-start">
          <h3 className="text-lg text-gray-800 font-bold border-b-2 border-amber-600 pb-1">Pro</h3>
          <div className="ml-auto">
            <h3 className="text-gray-800 text-lg font-bold">$20.00/Mon</h3>
            <p className="text-xs text-gray-600 mt-1">7-Day Free Trial</p>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-base text-gray-800 font-bold mb-4">Plan Includes</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              300 Image generations
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              2000 Credits
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Monthly 1000 Credits Free
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Customer Support
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Dedicated Server
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              Priority Generations
            </li>
            <li className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-3 p-[3px] bg-amber-500 rounded-full fill-white" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
              </svg>
              500GB Cloud Storage
            </li>
          </ul>
          <button type="button" className="w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded  border border-amber-600 bg-transparent hover:bg-amber-600 hover:text-white transition-all">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Pricing