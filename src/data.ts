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

export const galleryItems = [
  { title: 'The bridal glow', category: 'Bridal', image: 'bridal-1.jpg', tone: 'rose' },
  { title: 'Soft glam, all day', category: 'Makeup', image: 'makeup-1.jpg', tone: 'peach' },
  { title: 'A little golden hour', category: 'Hair', image: 'hair-1.jpg', tone: 'sand' },
  { title: 'A moment for the eyes', category: 'Bridal', image: 'bridal-2.jpg', tone: 'plum' },
  { title: 'Healthy skin ritual', category: 'Skin & Nails', image: 'skin-1.jpg', tone: 'sage' },
  { title: 'The finishing touch', category: 'Makeup', image: 'makeup-2.jpg', tone: 'berry' },
  { title: 'Made for the aisle', category: 'Bridal', image: 'bridal-3.jpg', tone: 'gold' },
  { title: 'Shine, your way', category: 'Hair', image: 'hair-2.jpg', tone: 'cocoa' },
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
