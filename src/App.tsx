import { useState } from 'react'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import WorkMarquee from './components/WorkMarquee'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import BridalCard from './components/BridalCard'
import WhatsAppBookingModal from './components/WhatsAppBookingModal'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import StickyMobileBar from './components/StickyMobileBar'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    setSelectedServices((current) => current.includes(service)
      ? current.filter((item) => item !== service)
      : [...current, service])
  }
  const openBooking = () => setBookingOpen(true)

  return (
    <>
      <TopBanner />
      <Navbar onBook={openBooking} />
      <WorkMarquee />
      <main>
        <Hero onBook={openBooking} />
        <ServicesSection selected={selectedServices} onToggle={toggleService} onBook={openBooking} />
        <BridalCard />
        <Gallery />
        <Reviews />
        <Footer />
      </main>
      <StickyMobileBar onBook={openBooking} />
      <WhatsAppBookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} selected={selectedServices} onToggle={toggleService} />
    </>
  )
}
