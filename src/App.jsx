import Header from './functionalities/header/Header'
import Footer from './functionalities/footer/Footer'
import ProduitsLanding from "./functionalities/produit/ProduitsLanding"
import SmoothScroll from "./shared/scroll/SmoothScroll"

function App() {
  return (
    <>
      <Header />
      <SmoothScroll
        lerp={0.04}
        wheelMultiplier={0.5}
        touchInertia={150}
        snapThreshold={0.30}
      >
        <div className="flex min-h-screen flex-col bg-slate-50 pt-36 text-slate-900 md:pt-28">
          <ProduitsLanding />
          <Footer />
        </div>
      </SmoothScroll>
    </>
  )
}

export default App
