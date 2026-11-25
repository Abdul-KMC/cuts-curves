import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  ['Gallery', '#gallery'],
  ['Services', '#services'],
  ['Offers', '#offers'],
  ['Bridal inquiry', '#bridal'],
  ['Reviews', '#reviews'],
  ['Location & hours', '#location'],
]

export default function Navbar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-name">Cuts <i>&</i> Curves</span>
          <span className="brand-place">L U C K N O W</span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <button className="nav-cta" onClick={onBook}>Book a visit <ArrowUpRight size={15} /></button>
        <button className="mobile-menu-toggle icon-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-drawer glass-card" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <button className="button button-dark drawer-book" onClick={() => { closeMenu(); onBook() }}>Customize your booking <ArrowUpRight size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
