import { ArrowUpRight, Star } from 'lucide-react'
import { openWhatsApp } from '../data'

export default function TopBanner() {
  return (
    <div className="top-banner">
      <p><Star size={12} fill="currentColor" /> Lucknow&apos;s Trusted Salon for 15+ Years <span className="banner-divider">·</span> Rated 4.9 by 5,000+ Clients</p>
      <button className="banner-book" onClick={() => openWhatsApp('Hi Cuts and Curves, I would love to book an appointment.')}>
        Book on WhatsApp <ArrowUpRight size={13} />
      </button>
    </div>
  )
}
