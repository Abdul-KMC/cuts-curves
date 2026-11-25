import { useState } from 'react'
import { ArrowUpRight, CalendarDays, MapPin, Sparkles } from 'lucide-react'
import { openWhatsApp } from '../data'

const makeupTypes = ['HD Bridal Makeup', 'Airbrush Bridal Makeup', 'Engagement / Reception', 'Party Makeup']

export default function BridalCard() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [makeup, setMakeup] = useState(makeupTypes[0])
  const [venue, setVenue] = useState('In-salon')

  const submit = () => {
    const message = `Hi Cuts and Curves, I'd love to enquire about bridal makeup.${name ? `\nBride's name: ${name}` : ''}${date ? `\nWedding / event date: ${date}` : ''}\nMakeup: ${makeup}\nLocation: ${venue}.\nPlease share availability and details.`
    openWhatsApp(message)
  }

  return (
    <section id="bridal" className="bridal-section section-shell">
      <div className="bridal-intro"><p className="eyebrow"><span className="eyebrow-line" /> FOR YOUR ONCE-IN-A-LIFETIME</p><h2>Your day.<br />Your <em>kind</em> of magic.</h2><p>We'd love to hear what you're dreaming of. Tell us a little about your day and our bridal team will take it from here.</p><div className="bridal-note"><Sparkles size={16} /><span>Personal consultations, thoughtful trials<br />and a look that still feels like you.</span></div></div>
      <div className="bridal-card glass-card">
        <div className="bridal-card-heading"><div><span className="service-count">LET'S BEGIN</span><h3>A note for our bridal team</h3></div><span className="bridal-card-icon"><Sparkles size={20} /></span></div>
        <label className="field-label">Bride&apos;s name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="What may we call you?" /></label>
        <label className="field-label">Wedding / event date<span className="input-icon"><CalendarDays size={16} /><input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></span></label>
        <div className="field-label">The look you have in mind<div className="makeup-pills">{makeupTypes.map((type) => <button key={type} className={`choice-pill ${makeup === type ? 'active' : ''}`} onClick={() => setMakeup(type)}>{type}</button>)}</div></div>
        <div className="field-label">Where shall we meet?<div className="venue-options">{['In-salon', 'At my venue'].map((option) => <button key={option} className={`venue-option ${venue === option ? 'active' : ''}`} onClick={() => setVenue(option)}><MapPin size={14} />{option}</button>)}</div></div>
        <button className="button button-dark bridal-submit" onClick={submit}>Send bridal inquiry on WhatsApp <ArrowUpRight size={17} /></button>
        <p className="form-footnote">No pressure, just a lovely place to start.</p>
      </div>
    </section>
  )
}
