import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { salonImages } from '../data'

const looks = [
  ['01', 'Bridal HD makeovers', salonImages.bridal],
  ['02', 'Airbrush artistry', salonImages.hero],
  ['03', 'Balayage, beautifully', salonImages.bridal],
  ['04', 'Keratin shine', salonImages.hero],
  ['05', 'The bridal updo', salonImages.bridal],
  ['06', 'Soft-glam moments', salonImages.hero],
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
