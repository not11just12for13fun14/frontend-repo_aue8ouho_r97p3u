import { motion } from 'framer-motion'

const nooks = [
  {
    title: 'Window Alcove',
    desc: 'Sun-dappled cushions and a view of drifting clouds in bottles.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Fireplace Den',
    desc: 'Crackling hearth, floating candles, and a sleepy cat-shaped shadow.',
    img: 'https://images.unsplash.com/photo-1507133750040-4a8f5702155a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Attic Hideaway',
    desc: 'Patchwork quilts, star maps, and the scent of old adventure.',
    img: 'https://images.unsplash.com/photo-1519681395259-df5286cf7c53?q=80&w=1400&auto=format&fit=crop',
  },
]

function Nooks() {
  return (
    <section id="nooks" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Cozy Corners to Get Lost In</h2>
          <p className="text-white/80 mt-3">Sink into soft fabrics while chapters unfurl like constellations overhead.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {nooks.map((nook, i) => (
            <motion.div
              key={nook.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={nook.img} alt="" className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 p-5">
                  <h3 className="text-white font-semibold text-lg">{nook.title}</h3>
                  <p className="text-white/75 text-sm">{nook.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nooks
