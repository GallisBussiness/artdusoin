import React from 'react'

function Presentation({image,text,title}) {
  return (
    <>
    <div className="w-full overflow-hidden max-w-5xl mx-auto">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-0">
    <div className="lg:col-span-2 p-12 md:p-16">
      <h2 className="font-cormorant text-3xl md:text-4xl font-light tracking-wider text-black">{title}</h2>
      <div className="w-12 h-[1px] bg-gold my-6"></div>
      <p className="font-montserrat text-sm font-light leading-relaxed text-neutral-600">{text}</p>
    </div>
    <img src={image} className="w-full h-full object-cover shrink-0 grayscale hover:grayscale-0 transition-all duration-700" alt={title} />
  </div>
</div>

    </>
  )
}

export default Presentation