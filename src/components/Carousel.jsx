import React, { useRef } from 'react'

const Carousel = () => {
  const scrollRef = useRef(null)

  const servicos = [
    { id: 1, nome: "Higienização", desc: "Interior renovado.", img: "/image/Higienização.png" },
    { id: 2, nome: "Verificação", desc: "Segurança total.", img: "/image/Verificação.png" },
    { id: 3, nome: "Polimento", desc: "Brilho duradouro.", img: "/image/Polimento.png" },
    { id: 4, nome: "Couros", desc: "Acabamento impecável.", img: "/image/couro.png" },
  ];
//define como as coisas se movem
  const scroll = (direcao) => {
    if (scrollRef.current) {
      const scrollAmount = direcao === 'left' ? -350 : 350
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
//A partir daqui o react começa a constuir oq o user vê. já começa o HTML do React (container principal)
  return (
    <section className="bg-black py-16 px-4 relative group">
      
      <div //container do carrossel
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8"
      >
        {servicos.map((item) => ( //pega a linha 6 e transforma em html e ai acontece a multiplicação dos cards
          <div 
            key={item.id} 
            className="min-w-70 md:min-w-[320px] bg-[#d4d4d4] rounded-[45px] p-10 flex flex-col items-center text-center snap-center"
          >
            <img src={item.img} alt={item.nome} className="w-32 h-32 object-cover rounded-2xl mb-6 shadow-md" />
            <h3 className="text-black text-2xl font-black uppercase mb-2 tracking-tighter">{item.nome}</h3>
            <p className="text-zinc-600 text-sm mb-8">{item.desc}</p>
            <button className="mt-auto bg-black text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 transition-colors">
              Orçamento
            </button>
          </div>
        ))}
      </div>

      {/*Botão de navegação lateral*/}
      <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <i className="fas fa-chevron-right"></i>
      </button>

      {/*Esconder a barra de scroll é um css dentro do componente*/}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer */
          scrollbar-width: none;    /* Firefox */
        }
      `}} />
    </section>
  )
}

export default Carousel