import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppConfig = {
  phone: "5511999999999", // Não esqueça de colocar o seu número real aqui!
  message: "Olá! Gostaria de mais informações.",
  styles: {
    base: "fixed bottom-6 right-6 z-50 flex items-center justify-center",
    ping: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75",
    button: "relative bg-[#25D366] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-whatsapp-bounce hover:animate-none"
  }
}

const WhatsAppButton = () => {
  const url = `https://wa.me/${WhatsAppConfig.phone}?text=${encodeURIComponent(WhatsAppConfig.message)}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={WhatsAppConfig.styles.base}>
      {/* O efeito de cor pulsante */}
      <span className={WhatsAppConfig.styles.ping}></span>
      
      
      <div className={WhatsAppConfig.styles.button}>
        <FaWhatsapp size={35} className="text-white" />
      </div>
    </a>
  )
}


export default WhatsAppButton