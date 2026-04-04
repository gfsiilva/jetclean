import React from "react"

const Hero = () => {
    return (
        <main className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0">
                <img src="/image/inicial.png"
                    className="w-full h-full object-cover opacity-45"
                    alt="Carro Esportivo" />

                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black">
                </div>
            </div>

            <div className="relative z-10 text-center px-4">
                <h2 className="text-white text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
                    Seu carro limpo e <br /> brilhando como um novo
                </h2>


                <button className="mt-10 bg-indigo-800 hover:bg-indigo-700 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-2xl shadow-indigo-500/20 active:scale-95 cursor-pointer">
                    AGENDAR HORÁRIO
                </button>
            </div>

        </main>



    )
}

export default Hero