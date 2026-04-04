import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Carousel from "./components/Carousel"
import Portfolio from "./components/Portfolio"
import Location from "./components/Location"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {

  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <Carousel />
      <Portfolio />
      <Location />
      <Footer />
      <WhatsAppButton />


    </div>


  )
}

export default App
