import { ArrowDown, ArrowUpRight, Sparkles, Star } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ onBook }: { onBook: () => void }) {
  const [imageFailed, setImageFailed] = useState(false)
  return (
    <section id="home" className="hero section-shell">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE LUXURY, A LOT OF YOU</p>
        <h1>Your most beautiful<br />self, <em>beautifully</em><br />brought to life.</h1>
        <p className="hero-intro">Bridal artistry, considered beauty and the little details that make a day yours. Lucknow has trusted our hands for over 15 years.</p>
        <div className="hero-actions">
          <button className="button button-dark" onClick={onBook}>Customize WhatsApp booking <ArrowUpRight size={17} /></button>
          <a className="text-link" href="#services">Explore services <ArrowDown size={15} /></a>
        </div>
        <div className="hero-footnote"><span><Sparkles size={14} /> Thoughtful beauty, made personal</span><span className="hero-footnote-rule" /><span>Rajendra Nagar, Lucknow</span></div>
      </motion.div>
      <motion.div className={`hero-visual ${imageFailed ? 'image-missing' : ''}`} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
        {!imageFailed && <img className="hero-image" src="/images/hero-bridal.jpg" alt="Bridal beauty and makeup by Cuts and Curves" onError={() => setImageFailed(true)} />}
        <div className="hero-image-label"><span>THE BRIDAL EDIT</span><span>VOL. 01 — LUCKNOW</span></div>
        <div className="rating-badge glass-card"><span className="rating-icon"><Star size={17} fill="currentColor" /></span><span><strong>4.9 <span>★</span></strong><small>5,000+ happy clients</small></span><i>Google</i></div>
        <div className="hero-stamp"><span>BEAUTY</span><span>WITH</span><span>INTENTION</span></div>
      </motion.div>
    </section>
  )
}
