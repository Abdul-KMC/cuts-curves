export const phone = '919044041213'

export const serviceGroups = [
  {
    id: 'bridal',
    label: 'Bridal & Party',
    services: [
      'Bridal services', 'Bridal make-up', 'Airbrush make-up', 'Eye make-up',
      'Make-up Artist', 'Make-up services', 'Make-up', 'Makeovers',
      'Fashion show makeup', 'Photography make-up', 'Private makeup lessons', 'Eyelashes',
    ],
  },
  {
    id: 'hair',
    label: 'Hair & Keratin',
    services: [
      'Bridal hair', 'Updos', 'Hairstyling', 'Keratin treatments', 'Hair straightening',
      'Hair colouring', 'Hair highlighting', 'Balayage', 'Ombre hair colour',
      'Hair extensions', 'Hair treatments', 'Haircut', 'Curly hair', 'Blow dry',
      'Shampoo & conditioning', 'Hairdresser', "Children's cuts",
    ],
  },
  {
    id: 'skin',
    label: 'Skin & Nails',
    services: [
      'HydraFacial', 'Anti-aging facial', 'Deep cleansing facial',
      'Pigmentation treatments', 'Acne treatments', 'Basic facial', 'Facials',
      'Facial Spa', 'Skin care', 'Manicure', 'Pedicure', 'Eyebrow threading',
      'Eyebrow beautification', 'Waxing', 'Body waxing', 'Brazilian waxing',
      'Tanning', 'Beauty Parlour',
    ],
  },
  {
    id: 'men',
    label: "Men's Grooming",
    services: [
      'Haircut', 'Shaving', 'Hair styling & blow dry', 'Hair colouring',
      'Keratin & hair treatments', 'Facials & de-tanning',
    ],
  },
] as const

export const allServices = [...new Set(serviceGroups.flatMap((group) => group.services))]

const galleryImage = (filename: string) => `/images/gallery/${encodeURIComponent(filename).replace(/%26/gi, '&')}`

export const salonImages = {
  hero: galleryImage('cuts&curves hero_image.jpeg'),
  bridal: galleryImage('bride work.jpeg'),
  bridePortrait: galleryImage('bride.png'),
  curlsUpdo: galleryImage('curls (2).png'),
  curls: galleryImage('curls.png'),
  groomStyling: galleryImage('gorrm_grooming.png'),
  henna: galleryImage('henna design.png'),
  hairOffer: galleryImage('cuts&curves offer.jpeg'),
  offer: galleryImage('discount.jpeg'),
  skinOffer: galleryImage("mother's day skin offer.jpeg"),
}

export const galleryItems = [
  { title: 'A bride in her moment', category: 'Bridal', image: salonImages.bridePortrait, tone: 'rose' },
  { title: 'The bridal glow', category: 'Makeup', image: salonImages.bridal, tone: 'peach' },
  { title: 'A little golden hour', category: 'Hair', image: salonImages.curls, tone: 'sand' },
  { title: 'Soft curls, softly styled', category: 'Hair', image: salonImages.curlsUpdo, tone: 'plum' },
  { title: 'Wedding-day grooming', category: 'Hair', image: salonImages.groomStyling, tone: 'cocoa' },
  { title: 'Henna, drawn by hand', category: 'Bridal', image: salonImages.henna, tone: 'gold' },
] as const

export const offerItems = [
  { title: 'Hair care & styling', image: salonImages.hairOffer, alt: 'Cuts and Curves hair offer artwork' },
  { title: 'Salon favourites', image: salonImages.offer, alt: 'Cuts and Curves special offer artwork' },
  { title: 'Skin care', image: salonImages.skinOffer, alt: 'Cuts and Curves skin offer artwork' },
] as const

export const reviews = [
  { name: 'Ananya S.', detail: 'Bridal makeup · Lucknow', text: 'They understood exactly what I wanted for my wedding day. My makeup felt like me, only more radiant. The whole team was so warm and thoughtful.', initials: 'AS' },
  { name: 'Mehak K.', detail: 'Airbrush bridal · Gomti Nagar', text: 'From the trial to the final look, everything was seamless. My makeup lasted through every ceremony and every happy tear!', initials: 'MK' },
  { name: 'Pooja V.', detail: 'Hair & skin · Rajendra Nagar', text: 'A lovely salon with genuinely talented people. I come in for my regular facials and left feeling cared for every single time.', initials: 'PV' },
  { name: 'Ritika M.', detail: 'Balayage · Aishbagh', text: 'Finally found a stylist who listens. My colour looks beautiful and natural, and the team made the whole visit feel special.', initials: 'RM' },
]

export function whatsappUrl(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
}

export function formatDate(date: string) {
  if (!date) return ''
  const formatted = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).formatToParts(new Date(`${date}T12:00:00`))
  const weekday = formatted.find((part) => part.type === 'weekday')?.value ?? ''
  const day = Number(formatted.find((part) => part.type === 'day')?.value ?? 0)
  const month = formatted.find((part) => part.type === 'month')?.value ?? ''
  const ordinal = day % 100 >= 11 && day % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[day % 10] ?? 'th'
  return `${weekday}, ${day}${ordinal} ${month}`
}
