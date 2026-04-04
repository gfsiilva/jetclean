import React from "react";

const socialLinks = [
    { icon: "ri-instagram-line", url: "#" },
    { icon: "ri-facebook-circle-fill", url: "#" },
    { icon: "ri-twitter-x-line", url: "#" },
]

const SocialLink = ({ iconClass, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir a rede social"
        className="text-white opacity-40 hover:opacity-100 hover:scale-125 transition-all duration-300"
    >
        <i className={`${iconClass} text-2xl md:text-3xl`}></i>
    </a>
)

const FooterMessage = ({ children, className = "" }) => (
    <div className={`max-w-3xl text-center ${className}`}>
        <p className="text-zinc-600 text-[9px] md:text-[11px] uppercase tracking-[0.4em] leading-loose font-medium opacity-80">
            {children}
        </p>
    </div>
)

const Footer = () => {
    return (
        <footer className="bg-[#0a0c1a] pt-24 pb-12 px-6 flex flex-col items-center">

            <div className="flex gap-10 mb-20">
                {socialLinks.map((item) => (
                    <SocialLink key={item.icon} iconClass={item.icon} href={item.url} />
                ))}
            </div>

            <div className="w-full text-center mb-24 select-none">
                <h1 className="
                    text-white
                    text-[clamp(2rem,10vw,10rem)]
                    font-serif italic
                    tracking-tight
                    leading-none
                    transition-all duration-500 ease-out
                    hover:tracking-[0.15em] md:hover:tracking-[0.25em]
                    hover:scale-105">
                    JetClean
                </h1>
            </div>

            <FooterMessage>
                Obrigado por visitar nosso site! Estamos prontos <br className="hidden md:block" />
                para cuidar do seu veículo. Volte sempre!
            </FooterMessage>

        </footer>
    )
}

export default Footer