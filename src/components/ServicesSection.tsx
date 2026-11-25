import { useState } from 'react'
import { ArrowUpRight, Check, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { serviceGroups } from '../data'

type Props = { selected: string[]; onToggle: (service: string) => void; onBook: () => void }

export default function ServicesSection({ selected, onToggle, onBook }: Props) {
  const [active, setActive] = useState<string>(serviceGroups[0].id)
  const group = serviceGroups.find((item) => item.id === active) ?? serviceGroups[0]

  return (
    <section id="services" className="services-section section-shell section-space">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="eyebrow-line" /> A MENU OF LITTLE RITUALS</p><h2>Beauty, <em>your</em> way.</h2></div>
        <p>From the first consultation to the final touch, every service is shaped around you.</p>
      </div>
      <div className="service-layout">
        <div className="service-sidebar">
          <div className="service-tabs" role="tablist" aria-label="Service categories">
            {serviceGroups.map((item, index) => (
              <button key={item.id} id={`tab-${item.id}`} role="tab" aria-selected={active === item.id} aria-controls="service-panel" className={`service-tab ${active === item.id ? 'active' : ''}`} onClick={() => setActive(item.id)}>
                <span>0{index + 1}</span>{item.label}<ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <div className="service-aside"><span className="aside-sparkle">✳</span><p>A good appointment<br />should feel like <em>your</em><br />time, entirely.</p><span>CUTS & CURVES, LUCKNOW</span></div>
        </div>
        <div className="service-panel" id="service-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
          <div className="service-panel-head"><div><span className="service-count">{group.services.length} SERVICES</span><h3>{group.label}</h3></div><p>Choose as many as you like<br />to add them to your inquiry.</p></div>
          <div className="service-list">
            {group.services.map((service, index) => {
              const isSelected = selected.includes(service)
              return (
                <motion.div className={`service-row ${isSelected ? 'selected' : ''}`} key={service} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.025 }}>
                  <span className="service-index">{String(index + 1).padStart(2, '0')}</span><span className="service-name">{service}</span>
                  <button className="service-add" onClick={() => onToggle(service)} aria-label={`${isSelected ? 'Remove' : 'Add'} ${service} ${isSelected ? 'from' : 'to'} booking`}>
                    {isSelected ? <><Check size={14} /> Added</> : <><Plus size={14} /> Select</>}
                  </button>
                </motion.div>
              )
            })}
          </div>
          {selected.length > 0 && <div className="service-selected-bar"><span>{selected.length} service{selected.length > 1 ? 's' : ''} in your inquiry</span><button className="text-link" onClick={onBook}>Continue to booking <ArrowUpRight size={15} /></button></div>}
        </div>
      </div>
    </section>
  )
}
