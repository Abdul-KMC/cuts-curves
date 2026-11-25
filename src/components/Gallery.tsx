import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryItems } from '../data'

const filters = ['All', 'Bridal', 'Makeup', 'Hair', 'Skin & Nails']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [failed, setFailed] = useState<string[]>([])
  const items = galleryItems.filter((item) => filter === 'All' || item.category === filter)
  const active = lightbox === null ? null : items[lightbox]
  const markFailed = (filename: string) => setFailed((current) => current.includes(filename) ? current : [...current, filename])

  const changePhoto = (direction: number) => {
    if (lightbox === null) return
    setLightbox((lightbox + direction + items.length) % items.length)
  }

  return (
    <section id="gallery" className="gallery-section section-shell section-space">
      <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> LITTLE MOMENTS, BEAUTIFULLY MADE</p><h2>A lookbook of <em>you.</em></h2></div><p>Every face, every finish, every feeling —<br />a little glimpse of what we love to do.</p></div>
      <div className="gallery-toolbar"><div className="gallery-filters" role="group" aria-label="Filter portfolio">{filters.map((item) => <button key={item} className={`filter-pill ${filter === item ? 'active' : ''}`} onClick={() => { setFilter(item); setLightbox(null) }}>{item}</button>)}</div><span>{String(items.length).padStart(2, '0')} MOMENTS</span></div>
      <div className="gallery-grid">
        {items.map((item, index) => <motion.button layout key={`${item.image}-${item.title}`} className={`gallery-tile tile-${index % 4} tone-${item.tone} ${failed.includes(item.image) ? 'image-missing' : ''}`} onClick={() => setLightbox(index)}>
          {!failed.includes(item.image) && <img src={item.image} alt={item.title} onError={() => markFailed(item.image)} />}
          <span className="tile-gradient" /><span className="tile-text"><small>{item.category}</small><strong>{item.title}</strong></span><span className="tile-open"><ArrowUpRight size={16} /></span>
        </motion.button>)}
      </div>
      <p className="gallery-footnote">YOUR STORY COULD BE NEXT <span>✳</span> MADE WITH LOVE IN LUCKNOW</p>
      <AnimatePresence>{active && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setLightbox(null) }}>
        <button className="lightbox-close icon-button" aria-label="Close photo" onClick={() => setLightbox(null)}><X size={22} /></button>
        <button className="lightbox-arrow prev" aria-label="Previous photo" onClick={() => changePhoto(-1)}><ArrowLeft size={20} /></button>
        <div className={`lightbox-image tone-${active.tone} ${failed.includes(active.image) ? 'image-missing' : ''}`}>{!failed.includes(active.image) && <img src={active.image} alt={active.title} onError={() => markFailed(active.image)} />}<span>{active.category} <i>·</i> {active.title}</span></div>
        <button className="lightbox-arrow next" aria-label="Next photo" onClick={() => changePhoto(1)}><ArrowRight size={20} /></button>
      </motion.div>}</AnimatePresence>
    </section>
  )
}
