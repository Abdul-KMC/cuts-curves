import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, Clock3, Plus, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { allServices, formatDate, openWhatsApp } from '../data'

type Props = { open: boolean; onClose: () => void; selected: string[]; onToggle: (service: string) => void }
const slots = ['10:30 AM', '2:00 PM', '5:00 PM', '7:00 PM']

export default function WhatsAppBookingModal({ open, onClose, selected, onToggle }: Props) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [customTime, setCustomTime] = useState('')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [query, setQuery] = useState('')
  const [showServices, setShowServices] = useState(false)
  const services = useMemo(() => allServices.filter((service) => service.toLowerCase().includes(query.toLowerCase())), [query])
  const selectedTime = customTime
    ? new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'UTC' }).format(new Date(`1970-01-01T${customTime}:00Z`))
    : time
  const message = useMemo(() => {
    const list = selected.length ? selected.join(' and ') : 'an appointment'
    const when = date ? ` on ${formatDate(date)}` : ''
    const timeText = selectedTime ? ` around ${selectedTime}` : ''
    return `Hi Cuts and Curves,${name ? ` this is ${name}.` : ''} I would like to book ${list}${when}${timeText}. Please confirm availability.${notes ? `\n\nA little note: ${notes}` : ''}`
  }, [date, name, notes, selected, selectedTime])

  return (
    <AnimatePresence>
      {open && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
        <motion.div className="booking-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="booking-title" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }}>
          <div className="modal-header"><div><span className="service-count">A FEW LITTLE DETAILS</span><h2 id="booking-title">Make it <em>yours.</em></h2></div><button className="icon-button" aria-label="Close booking" onClick={onClose}><X size={21} /></button></div>
          <div className="booking-form">
            <div className="field-label">What can we help you with?<div className="selected-tags">{selected.map((service) => <button key={service} className="selected-tag" onClick={() => onToggle(service)}>{service}<X size={12} /></button>)}<button className="add-service-trigger" onClick={() => setShowServices(!showServices)}><Plus size={14} /> Add a service</button></div></div>
            {showServices && <div className="service-picker"><input aria-label="Search services" placeholder="Find your service..." value={query} onChange={(event) => setQuery(event.target.value)} /><div className="service-picker-list">{services.map((service) => <button key={service} onClick={() => onToggle(service)}>{service}{selected.includes(service) && <Check size={14} />}</button>)}</div></div>}
            <div className="booking-two-col"><label className="field-label">A day that works<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><div className="field-label">A time that suits<div className="time-slots">{slots.map((slot) => <button key={slot} className={`time-slot ${time === slot && !customTime ? 'active' : ''}`} onClick={() => { setTime(time === slot && !customTime ? '' : slot); setCustomTime('') }}><Clock3 size={12} />{slot}</button>)}</div><input className="custom-time" aria-label="Custom time" type="time" value={customTime} onChange={(event) => { setCustomTime(event.target.value); setTime('') }} /></div></div>
            <label className="field-label">Your name <span className="optional">(optional)</span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" /></label>
            <label className="field-label">Anything else we should know? <span className="optional">(optional)</span><textarea rows={2} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="A little note for our team..." /></label>
            <div className="message-preview"><span>YOUR WHATSAPP NOTE</span><p>{message}</p></div>
            <button className="button button-dark modal-submit" onClick={() => { openWhatsApp(message); onClose() }}>Send on WhatsApp <ArrowUpRight size={17} /></button>
          </div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  )
}
