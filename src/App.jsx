import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Nooks from './components/Nooks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background tapestry */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,176,189,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.25),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(2px_2px_at_10%_20%,rgba(255,255,255,0.6),transparent),radial-gradient(2px_2px_at_70%_60%,rgba(255,255,255,0.6),transparent),radial-gradient(1px_1px_at_90%_30%,rgba(255,255,255,0.5),transparent)'}} />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Nooks />
      <Footer />
    </div>
  )
}

export default App
