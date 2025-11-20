import { Menu, BookOpen, Stars } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-300 via-pink-200 to-violet-200 shadow-inner shadow-white/40 ring-1 ring-white/40 flex items-center justify-center">
            <Stars className="h-6 w-6 text-violet-700" />
          </div>
          <div className="leading-tight">
            <p className="font-black tracking-tight text-xl text-white">Lumos Books</p>
            <p className="text-xs text-white/70 -mt-1">Magical reads & curiosities</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#catalog" className="hover:text-white transition-colors">Catalog</a>
          <a href="#nooks" className="hover:text-white transition-colors">Reading Nooks</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
