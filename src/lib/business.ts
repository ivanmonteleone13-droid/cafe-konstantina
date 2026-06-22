export const business = {
  name: "Café Konstantina HB",
  tagline: "Central café since 1990",
  description: "Central café on Svartbäcksgatan active since 1990 serving coffee and light meals.",
  category: "Café",
  address: {
    street: "Svartbäcksgatan 24",
    postalCode: "753 32",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-12 61 26",
  phoneLink: "tel:+4618126126",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "tel:+4618126126",
  bookingLabel: "Ring oss",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Café Konstantina",
  rating: 3.3,
  reviewCount: 3,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Hantverksbakat",
      description: "Färskt bröd och bakverk varje dag.",
    },
    {
      title: "Lokalt fika",
      description: "Ett av Uppsalas café på Svartbäcksgatan 24.",
    },
    {
      title: "Varm atmosfär",
      description: "Perfekt för fika, lunch eller en paus.",
    },
    {
      title: "Personlig service",
      description: "Välkommen in för kaffe och hembakat.",
    },
  ],
  services: [
    {
      id: "kaffe-och-fika",
      name: "Kaffe och fika",
      description: "Professionell kaffe och fika med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-ttare-lunch",
      name: "Lättare lunch",
      description: "Professionell lättare lunch med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sm-rg-sar",
      name: "Smörgåsar",
      description: "Professionell smörgåsar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "dagliga-specialer",
      name: "Dagliga specialer",
      description: "Professionell dagliga specialer med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "uteservering",
      name: "Uteservering",
      description: "Professionell uteservering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Café Konstantina HB. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Café Konstantina HB varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "kafé Svartbäcksgatan",
    "café centrum Uppsala",
    "fika Uppsala",
    "lunch Uppsala centrum",
  ],
  brandColors: {
    primary: "#6f4e37",
    secondary: "#d4a574",
    accent: "#faf7f2",
    dark: "#3d2914",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
