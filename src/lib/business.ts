export const business = {
  name: "Café Konstantina HB",
  tagline: "Bohemiskt café på Svartbäcksgatan",
  description:
    "Café Linné Konstantina på Svartbäcksgatan 24 — konditori/café med servering på två plan. Fikabröd, smörgåsar, sallader, pajer och glass. Kvällsöppet till åtminstone kl 22.",
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
  websiteUrl: null as string | null,
  facebookUrl: "https://www.facebook.com/115965315139860" as string | null,
  instagramUrl: null as string | null,
  owner: "Café Konstantina HB",
  rating: 3.3,
  reviewCount: 3,
  foundedYear: 1990,
  coordinates: { lat: 59.8614, lng: 17.6336 },
  hours: {
    note: "Öppettider enligt UNT Kafépatrullen (kan avvika).",
    regular: [
      { day: "Måndag", hours: "09:30 – 22:00" },
      { day: "Tisdag", hours: "09:30 – 22:00" },
      { day: "Onsdag", hours: "09:30 – 22:00" },
      { day: "Torsdag", hours: "09:30 – 22:00" },
      { day: "Fredag", hours: "09:30 – 22:00" },
      { day: "Lördag", hours: "10:00 – 22:00" },
      { day: "Söndag", hours: "11:00 – 22:00" },
    ],
  },
  usps: [
    {
      title: "Två våningar",
      description: "Servering på två plan med många sittplatser — enligt Cafekartan.se.",
    },
    {
      title: "Brett utbud",
      description: "Fikabröd, smörgåsar, sallader, pajer, glass och lunch.",
    },
    {
      title: "Kvällsöppet",
      description: "Öppet till åtminstone kl 22 — populärt bland studenter.",
    },
    {
      title: "3,3 på Reco",
      description: "3 omdömen på Reco.se.",
    },
  ],
  services: [
    {
      id: "kaffe-och-fika",
      name: "Kaffe och fika",
      description: "Brett utbud av kakor och bakelser i gammaldags miljö.",
      duration: "—",
      priceFrom: null,
      note: "Stor latte 32 kr enligt UNT.",
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Soppa, paj och varma mackor. Lunch 69 kr inkl. dryck, sallad och kaffe enligt UNT.",
      duration: "—",
      priceFrom: 69,
      note: "Källa: UNT Kafépatrullen.",
    },
    {
      id: "smorgasar",
      name: "Smörgåsar",
      description: "Varma och kalla mackor, t.ex. ciabatta och focaccia.",
      duration: "—",
      priceFrom: null,
      note: "Källa: UNT.",
    },
    {
      id: "bakverk",
      name: "Bakverk",
      description: "Citronmarängtårta, toscamazariner och linnébullar — signum enligt UNT.",
      duration: "—",
      priceFrom: null,
      note: "Källa: UNT.",
    },
    {
      id: "kvallsoppet",
      name: "Kvällsfika",
      description: "Öppet sent — studenter sitter och pluggar på övervåningen.",
      duration: "—",
      priceFrom: null,
      note: "Påtår ingår enligt UNT.",
    },
  ],
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.jpg",
  gallery: [
    { id: 1, label: "Café Linné Konstantina", image: "/images/hero.jpg" },
    { id: 2, label: "Interiör", image: "/images/gallery-1.jpg" },
    { id: 3, label: "Fika", image: "/images/gallery-2.jpg" },
    { id: 4, label: "Atmosfär", image: "/images/gallery-3.jpg" },
  ],
  about: {
    headline: "Café i Linnékvarteret",
    paragraphs: [
      "Café Linné Konstantina ligger på Svartbäcksgatan 24 i Uppsala — mitt i ett av stadens kafétätaste kvarter, mittemot Café Linné Hörnan.",
      "Konditori/café med servering på två plan. Fikabröd, smörgåsar, sallader, pajer, glass med mera. Kvällsöppet till åtminstone kl 22.",
      "Bohemisk, gammaldags atmosfär med trevlig övervåning — enligt UNT och Cafekartan.se. Ring 018-12 61 26.",
    ],
  },
  testimonials: [
    {
      text: "STÖRSTA SK*TEN! Kasst utbud, kasst kaffe och kass personal. Och priserna är inte nådiga. Man känner sig lurad och rånad efter man varit där och fikat. Hemsk miljö är det dessutom. Det sämsta cafét i hela uppsala måste jag säga. Och äckligt dryga, kaxiga ägare som tydligen inte klarar av att man ställer en enkel fråga. Nä, vilket j*vla sk*it!",
      author: "Alex P",
      source: "Reco.se",
      sourceUrl: "https://www.reco.se/r/768507",
      rating: 1,
      date: "2009-10-22",
    },
    {
      text: "Studentens bästa vänn i tentatider! Sätter man sig på övervåningen kommer ingen och hosar menande när man tar sin tredje påtår efter fyra timmars blockerande av ett helt bord med alla sina böcker. Blanda inte ihop med fusklinnes på andra sidan gatan!",
      author: "Anders E",
      source: "Reco.se",
      sourceUrl: "https://www.reco.se/r/766114",
      rating: 5,
      date: "2009-08-23",
    },
    {
      text: "Mycket trevligt fik med ett brett utbud av kakor och bakelser. Miljön är ganska gammaldags, vilket ger stället en mysig atmosfär. Personalen är alltid mycket trevlig.",
      author: "Max R",
      source: "Reco.se",
      sourceUrl: "https://www.reco.se/r/756545",
      rating: 4,
      date: "2009-03-31",
    },
  ],
  seoKeywords: [
    "kafé Svartbäcksgatan",
    "café centrum Uppsala",
    "fika Uppsala",
    "Café Linné Konstantina",
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
