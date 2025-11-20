import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* dreamy Aurora gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,200,255,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(180,200,255,0.35),transparent_40%)]" />

      {/* star dust */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(1px 1px at 20% 30%,white,transparent),radial-gradient(1px 1px at 60% 70%,white,transparent),radial-gradient(1px 1px at 80% 20%,white,transparent)'}} />
      </div>

      {/* 3D Spline scene */}
      <div className="relative z-10 h-[60vh] md:h-[70vh] xl:h-[80vh]">
        <Spline scene="https://prod.spline.design/lsFGaFqoD7t-tmSb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Heading + CTA overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-auto text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_40px_rgba(255,255,255,0.25)]"
            >
              A Magical Bookstore for Dreamers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="pointer-events-auto mt-4 text-lg md:text-xl text-white/85"
            >
              Wander through whimsical shelves, floating candles, and cozy nooks where stories choose you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#catalog" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-white/30 hover:shadow-white/50 transition">Explore the Stacks</a>
              <a href="#nooks" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-400/30 to-pink-300/30 text-white ring-1 ring-white/40 backdrop-blur hover:from-purple-400/40 hover:to-pink-300/40 transition">Find a Reading Nook</a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-200px_200px_-100px_rgba(10,10,20,0.7)]" />
    </section>
  )
}

export default Hero
