import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const itens = [
        { src: "/image/trabalhoszin.png", speed: -0.05, rot: "rotate(-3deg)", pos: "left-4 md:left-10 top-32 w-48 md:w-72" },
        { src: "/image/trabalhos-3.png", speed: -0.02, rot: "rotate(3deg)", pos: "right-4 md:right-10 top-32 w-48 md:w-72" },
        { src: "/image/trabalhos-la.png", speed: -0.08, rot: "rotate(0deg)", pos: "z-20 w-48 md:w-[360px] top-28 shadow-2xl", isMain: true }
    ];

    return (
        <section className='bg-[#0a0c1a] py-32 px-6 overflow-hidden'>
            <div className='max-w-6xl mx-auto text-center relative z-30'>

                <h2 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                    SERVIÇOS REALIZADOS
                </h2>

                <p className='text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-20 leading-relaxed'>
                    Confira os últimos trabalhos realizados e veja como transformamos veículos em verdadeiras máquinas de brilho!
                </p>

                {/* Área das imagens com parallax */}
                <div className='relative h-96 md:h-128 w-full flex justify-center items-center'>
                    {itens.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute transition-transform duration-75 ease-out ${item.pos}`}
                            style={{ transform: `translateY(${scrollY * item.speed}px) ${item.rot}` }}
                        >
                            <img
                                src={item.src}
                                className='w-full h-full object-cover rounded-[3rem]'
                                alt="Trabalho"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;