import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, Phone } from 'lucide-react'

const address = 'Vidhayak Niwas, Basement Community Centre, Aishbagh Rd, Rajendra Nagar, Lucknow, Uttar Pradesh 226004'
const directions = 'https://www.google.com/maps/search/?api=1&query=Vidhayak+Niwas+Basement+Community+Centre+Aishbagh+Road+Rajendra+Nagar+Lucknow+226004'
const instagram = 'https://www.instagram.com/cutsandcurveslucknow?dmpr=M285M3BjZ3ZidXd6'
const facebook = 'https://www.facebook.com/share/1Eve7MJngr/'
const email = 'cutsandcurveslucknow@gmail.com'

export default function Footer() {
  return (
    <>
      <section id="location" className="location-section section-shell section-space">
        <div className="location-heading"><p className="eyebrow"><span className="eyebrow-line" /> A LITTLE PLACE IN LUCKNOW</p><h2>Come on <em>in.</em></h2><p>We&apos;ll have the good light on<br />and a cup of chai waiting.</p><a className="button button-dark directions-link" href={directions} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div>
        <div className="location-card"><iframe title="Cuts and Curves salon location map" src="https://maps.google.com/maps?q=Vidhayak%20Niwas%20Aishbagh%20Road%20Rajendra%20Nagar%20Lucknow%20226004&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-label"><MapPin size={15} /> RAJENDRA NAGAR, LUCKNOW</div></div>
        <div className="location-details">
          <div><span className="detail-icon"><MapPin size={16} /></span><span><small>FIND US</small><p>{address}</p></span></div>
          <div><span className="detail-icon"><Clock3 size={16} /></span><span><small>WHEN TO VISIT</small><p>Open daily<br />10:00 AM – 7:30 PM</p></span></div>
          <div><span className="detail-icon"><Phone size={16} /></span><span><small>GIVE US A RING</small><p><a href="tel:+919044041213">+91 90440 41213</a><br /><a href="https://wa.me/919044041213" target="_blank" rel="noreferrer">WhatsApp us</a></p></span></div>
          <div><span className="detail-icon"><Mail size={16} /></span><span><small>WRITE TO US</small><p><a href={`mailto:${email}`}>{email}</a></p></span></div>
        </div>
      </section>
      <footer className="footer">
        <div className="section-shell">
          <div className="footer-main">
            <a className="brand footer-brand" href="#home"><span className="brand-name">Cuts <i>&</i> Curves</span><span className="brand-place">L U C K N O W</span></a>
            <p>A little luxury, a lot of you.<br />Made with love in Lucknow.</p>
            <div className="footer-links"><a href="#gallery">Gallery</a><a href="#services">Services</a><a href="#bridal">Bridal inquiry</a><a href="#location">Find us</a></div>
            <div className="social-links"><a href={instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={17} /></a><a href={facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><span className="facebook-letter">f</span></a><a href={`mailto:${email}`} aria-label="Email Cuts and Curves"><Mail size={16} /></a><a href="https://www.google.com/search?q=Cuts+and+Curves+Lucknow+reviews" aria-label="Google reviews" target="_blank" rel="noreferrer"><span className="google-letter">G</span></a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Cuts and Curves. With love, Lucknow.</span><a href="#home">BACK TO THE TOP ↑</a></div>
        </div>
      </footer>
    </>
  )
}
