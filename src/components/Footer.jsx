function Footer() {
  return (
    <footer id="about" className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 text-white/80">
          <p>
            Lumos Books is a whimsical, independent bookstore celebrating cozy reads, gentle fantasy, and hand-drawn charm. Our shelves are curated with love and a little mischief.
          </p>
          <p className="mt-4 text-white/60 text-sm">Open daily • Candlelight hours on weekends • Cocoa refills are complimentary</p>
        </div>
        <p className="mt-8 text-center text-white/50 text-sm">© {new Date().getFullYear()} Lumos Books</p>
      </div>
    </footer>
  )
}

export default Footer
