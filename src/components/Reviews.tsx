import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useRef } from 'react'
import { reviews } from '../data'

export default function Reviews() {
  const track = useRef<HTMLDivElement>(null)
  const move = (direction: number) => track.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  return (
    <section id="reviews" className="reviews-section">
      <div className="section-shell reviews-inner">
        <div className="reviews-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> KIND WORDS, KEPT CLOSE</p><h2>We feel the <em>love.</em></h2><p className="reviews-subtitle">A little trust goes a long way. Thank you, Lucknow.</p></div><div className="reviews-rating"><span className="big-rating">4.9</span><span className="rating-stars">★★★★★</span><span>LOVED BY 5,000+ CLIENTS</span></div></div>
        <div className="review-controls"><span>NOTES FROM OUR CLIENTS</span><div><button aria-label="Previous reviews" onClick={() => move(-1)}><ArrowLeft size={16} /></button><button aria-label="Next reviews" onClick={() => move(1)}><ArrowRight size={16} /></button></div></div>
        <div className="review-track" ref={track}>
          {reviews.map((review) => <article className="review-card" key={review.name}><Quote className="quote-icon" size={22} /><div className="review-stars" aria-label="5 out of 5 stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div><p>{review.text}</p><div className="review-author"><span className="author-avatar">{review.initials}</span><span><strong>{review.name}</strong><small>{review.detail}</small></span><span className="verified-mark">✓</span></div></article>)}
        </div>
      </div>
    </section>
  )
}
