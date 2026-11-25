import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { offerItems, openWhatsApp } from '../data'

export default function OffersSection() {
  const [failedImages, setFailedImages] = useState<string[]>([])

  const markFailed = (image: string) => {
    setFailedImages((current) => current.includes(image) ? current : [...current, image])
  }

  return (
    <section id="offers" className="offers-section section-shell section-space">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="eyebrow-line" /> A LITTLE SOMETHING EXTRA</p><h2>Notes from <em>the salon.</em></h2></div>
        <p>Take a look at a few of our offer artworks. Message us to check what&apos;s available now.</p>
      </div>
      <div className="offers-grid">
        {offerItems.map((offer) => (
          <article className={`offer-card ${failedImages.includes(offer.image) ? 'image-missing' : ''}`} key={offer.image}>
            {!failedImages.includes(offer.image) && <img src={offer.image} alt={offer.alt} loading="lazy" onError={() => markFailed(offer.image)} />}
          </article>
        ))}
      </div>
      <div className="offers-note">
        <p>These images may include past dates, prices or terms. Please ask our team for current offers and availability.</p>
        <button className="text-link" onClick={() => openWhatsApp('Hi Cuts and Curves, could you please share your current offers and availability?')}>Ask us on WhatsApp <ArrowUpRight size={15} /></button>
      </div>
    </section>
  )
}
