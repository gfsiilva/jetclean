import React from "react"

const Location = () => {

    const phone = "54865316556";
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.13456789!2d-34.877!3d-8.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDMnMDAuMCJTIDM0wrA1MiczNy4yIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890";

    return (
        <section className="bg-[#0a0c1a] py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center">
                    <h2 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-3">
                        VENHA CONHECER
                    </h2>

                    <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-16 rounded-b-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                </div>

                <div className="relative w-full h-88 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5 group">

                    <iframe
                        title="Localização JetClean"
                        src={mapUrl}
                        className="w-full h-full grayscale invert contrast-110 brightness-75 opacity-90 transition-all duration-700 group-hover:brightness-100 group-hover:grayscale-0"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                    />

                </div>

            </div>
        </section>
    );
};

export default Location