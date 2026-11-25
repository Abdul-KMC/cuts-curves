import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const looks = [
  ['01', 'Bridal HD makeovers', 'work-1.jpg'],
  ['02', 'Airbrush artistry', 'work-2.jpg'],
  ['03', 'Balayage, beautifully', 'work-3.jpg'],
  ['04', 'Keratin shine', 'work-4.jpg'],
  ['05', 'The bridal updo', 'work-5.jpg'],
  ['06', 'Soft-glam moments', 'work-6.jpg'],
]

function MarqueeCard({ item }: { item: typeof looks[number] }) {
  const [failed, setFailed] = useState(false)
  return (
    <a className={`marquee-card ${failed ? 'image-missing' : ''}`} href="#gallery">
      {!failed && <img src={`/images/marquee/${item[2]}`} alt={item[1]} onError={() => setFailed(true)} />}
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
