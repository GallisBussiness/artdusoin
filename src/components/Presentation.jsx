import React from 'react'

function Presentation({image,text,title}) {
  return (
    <>
    <div className="bg-gray-50 w-full rounded-lg font-[sans-serif] overflow-hidden max-w-5xl mx-auto">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center">
    <div className="lg:col-span-2 p-10">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="mt-4 text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
    <img src={image} className="w-full h-full object-cover shrink-0" />
  </div>
</div>

    </>
  )
}

export default Presentation