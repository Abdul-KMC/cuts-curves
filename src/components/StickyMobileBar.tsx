import { MessageCircle, Phone } from 'lucide-react'

export default function StickyMobileBar({ onBook }: { onBook: () => void }) {
  return <div className="sticky-mobile-bar"><button className="sticky-book" onClick={onBook}><MessageCircle size={17} /> WhatsApp book</button><a className="sticky-call" href="tel:+919044041213"><Phone size={16} /> Call now</a></div>
}
