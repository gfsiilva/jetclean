import React from "react"

// 🔹 Subcomponente reutilizável
const InfoItem = ({ icon, title, content }) => (
    <div className="flex gap-4">
        <div className="text-indigo-500 mt-1">
            <i className={`fas ${icon}`}></i>
        </div>

        <div className="text-zinc-300">
            <span className="text-white font-semibold block uppercase text-xs tracking-widest mb-1">
                {title}
            </span>

            <div className="text-sm md:text-base leading-relaxed">
                {content}
            </div>
        </div>
    </div>
);

const Services = () => {

    // 🔹 Dados centralizados (fácil manutenção)
    const infoData = [
        {
            icon: "fa-map-marker-alt",
            title: "Endereço",
            content: (
                <>
                    Rua das Estrelas, 1234 — <strong>Bairro do Horizonte</strong>, Recife, PE
                </>
            )
        },
        {
            icon: "fa-clock",
            title: "Atendimento",
            content: (
                <>
                    Estamos prontos! Nosso horário é de <strong>segunda a sábado</strong>, das <strong>8h às 18h</strong>.
                </>
            )
        },
        {
            icon: "fa-phone",
            title: "Contato",
            content: (
                <>
                    Fale conosco pelo WhatsApp e agende seu horário rapidamente.
                </>
            )
        }
    ];

    return (
        <section className="bg-black py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* IMAGEM */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative group max-w-lg lg:max-w-none">

                        <div className="absolute -inset-4 bg-indigo-900/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                        <img
                            src="/image/Serviços.png"
                            alt="Serviços de lavagem"
                            className="relative rounded-3xl md:rounded-[80px] w-full h-96 object-cover border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                        />
                    </div>
                </div>

                {/* TEXTIN */}
                <div className="w-full lg:w-1/2 space-y-8">

                    <header className="space-y-4">
                        <h2 className="text-white text-5xl md:text-6xl font-bold uppercase tracking-tighter">
                            Serviços
                        </h2>
                        <div className="w-20 h-1 bg-indigo-800" />
                    </header>

                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed border-l-4 border-indigo-900/50 pl-6">
                        Oferecemos uma limpeza completa para carros e motos, incluindo lavagem externa,
                        higienização interna, polimento, hidratação de bancos e aplicação de cera.
                    </p>

                    {/*LISTA DINÂMICA*/}
                    <div className="space-y-6 pt-4">
                        {infoData.map((item, index) => (
                            <InfoItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Services