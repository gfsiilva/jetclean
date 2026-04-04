import React, { useState, useEffect } from "react"

const NavBar = () => {
    // Reação da barra quando o user descer a página.
    const [scrolled, setScrolled] = useState(false)

    // Um array de redes sociais.
    const socialLinks = [
        { icon: "fa-instagram", url: "#" },
        { icon: "fa-facebook", url: "#" },
        { icon: "fa-twitter", url: "#" }
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    // O return PRECISA estar aqui dentro, antes da última chave }
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md h-20" : "bg-transparent h-24"
            }`}>
            <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">

                {/* REDES SOCIAIS */}
                <div className="flex items-center gap-5 text-white">
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.url} className="text-xl hover:text-indigo-500 transition-colors">
                            <i className={`fab ${social.icon}`}></i>
                        </a>
                    ))}
                </div>

                {/* LOGO CENTRALIZADA */}
                <div className="absolute left-1/2 -translate-x-1/2 text-center">
                    <h1 className="text-white text-3xl md:text-5xl font-serif italic font-semibold tracking-tighter">
                        JetClean
                    </h1>
                </div>

                {/* BOTÃO CTA */}
                <div>
                    <button className="border border-white/50 text-white text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-white hover:text-black transition-all rounded-sm font-bold cursor-pointer active:scale-95">
                        AGENDAR HORÁRIO
                    </button>
                </div>
            </nav>
        </header>
    );
}; // Esta chave fecha o componente NavBar

export default NavBar