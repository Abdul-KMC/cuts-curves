import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { salonImages } from '../data'

const looks = [
  ['01', 'A bride in her moment', salonImages.bridePortrait],
  ['02', 'The bridal glow', salonImages.bridal],
  ['03', 'Soft curls, softly styled', salonImages.curlsUpdo],
  ['04', 'A little golden hour', salonImages.curls],
  ['05', 'Wedding-day grooming', salonImages.groomStyling],
  ['06', 'Henna, drawn by hand', salonImages.henna],
] as const

function MarqueeCard({ item }: { item: typeof looks[number] }) {
  const [failed, setFailed] = useState(false)
  return (
    <a className={`marquee-card ${failed ? 'image-missing' : ''}`} href="#gallery">
      {!failed && <img src={item[2]} alt={item[1]} onError={() => setFailed(true)} />}
      <span className="marquee-shade" />
      <span className="marquee-caption"><small>{item[0]} / 06</small>{item[1]}<ArrowUpRight size={14} /></span>
    </a>
  )
}

export default function WorkMarquee() {
  return (
    <section className="marquee-section" aria-label="Salon transformations">
      <div className="marquee-track">
        {[...looks, ...looks].map((item, index) => <MarqueeCard key={`${item[0]}-${index}`} item={item} />)}
      </div>
    </section>
  )
}
