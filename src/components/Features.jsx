import { Sparkles, BookOpenCheck, Candle, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur hover:bg-white/7.5">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_200px_at_var(--x,50%)_0%,rgba(255,255,255,0.15),transparent)]" />
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-200 via-pink-200 to-violet-200 ring-1 ring-white/50 flex items-center justify-center shadow-inner shadow-white/40">
          <Icon className="h-6 w-6 text-violet-700" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-white/70 text-sm mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="catalog" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Whimsical Wonders Await</h2>
          <p className="text-white/80 mt-3">Hand-drawn tomes, elusive grimoires, and familiar-friendly picture books. Every spine holds a spell.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Sparkles} title="Hand-Drawn Editions" desc="Sketchy, charming covers inked by cottage enchantresses. No two are the same." />
          <FeatureCard icon={Candle} title="Floating Candlelight" desc="Soft, levitating glow that follows you down the aisles like a loyal wisp." />
          <FeatureCard icon={BookOpenCheck} title="Staff Picks that Pick You" desc="Shelves gently nudge the stories you need into your hands. Consent-based magic, of course." />
          <FeatureCard icon={Coffee} title="Cozy Reading Nooks" desc="Plush armchairs, knit blankets, and cocoa that refills itself when chapters get good." />
          <FeatureCard icon={Sparkles} title="Secret Doorways" desc="Find hidden poetry behind moving portraits and whispering wallpapers." />
          <FeatureCard icon={Candle} title="Moonlit Storytime" desc="Weekend readings under a glass ceiling of stars and paper cranes." />
        </div>
      </div>
    </section>
  )
}

export default Features
