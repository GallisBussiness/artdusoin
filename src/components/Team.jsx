
function Team() {
    const members = [
      { name: "Freddy Smith", role: "CEO & Fondateur", img: "https://cdn.devdojo.com/images/june2021/avt-03.jpg" },
      { name: "Carl Jones", role: "CTO & Co-fondateur", img: "https://cdn.devdojo.com/images/june2021/avt-07.jpg" },
      { name: "Susan Peterson", role: "Directrice Marketing", img: "https://cdn.devdojo.com/images/june2021/avt-20.jpg" },
    ];

    return (
        <>
         <section className="py-20 bg-neutral-50">
    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-3xl md:text-5xl font-light tracking-wider text-black uppercase">Notre &Eacute;quipe</h2>
          <div className="separator"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {members.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
                <div className="w-40 h-40 overflow-hidden">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={member.img} alt={member.name} />
                </div>
                <div className="mt-6 space-y-1">
                    <h3 className="font-cormorant text-xl font-medium text-black tracking-wider">{member.name}</h3>
                    <p className="font-montserrat text-xs text-neutral-500 tracking-widest2 uppercase">{member.role}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>   
        </>
    )
}

export default Team
