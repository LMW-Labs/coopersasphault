// Cooper Generations Asphalt Company - Site Constants

export const COMPANY = {
  name: "Cooper Generations Asphalt Company",
  tagline: "Family Owned & Operated for 35+ Years",
  description: "Professional asphalt paving services in Ada, Oklahoma and surrounding areas. We serve all of Oklahoma and surrounding states.",
  established: "35+ years",

  // Contact Information
  phone: {
    main: "(580) 279-4698",
    mainRaw: "5802794698",
    blake: "(580) 665-7304",
    riley: "(580) 665-0844",
  },

  address: {
    street: "9714 SH 3W",
    city: "Ada",
    state: "OK",
    zip: "74820",
    full: "9714 SH 3W, Ada, OK 74820",
  },

  // Service area
  serviceArea: {
    primary: "Ada, Oklahoma",
    coverage: "All of Oklahoma and surrounding states",
    cities: ["Ada", "Oklahoma City", "Norman", "Edmond", "Moore", "Shawnee", "Durant", "Ardmore"],
  },

  // Features
  features: [
    "Free Estimates",
    "Credit & Debit Accepted",
    "Family Owned & Operated",
    "35+ Years Experience",
    "Licensed & Insured",
  ],

  // Payment
  payment: {
    methods: ["Credit Card", "Debit Card", "Cash", "Check"],
    freeEstimates: true,
  },
} as const;

export const SERVICES = [
  {
    id: "asphalt-paving",
    title: "Asphalt Paving",
    shortDescription: "New asphalt installation for driveways, parking lots, and roads.",
    slug: "/services/asphalt-paving",
    icon: "road",
  },
  {
    id: "sealcoating",
    title: "Sealcoating",
    shortDescription: "Protect and extend the life of your asphalt with professional sealcoating.",
    slug: "/services/sealcoating",
    icon: "shield",
  },
  {
    id: "parking-lot-paving",
    title: "Parking Lot Paving",
    shortDescription: "Commercial parking lot installation and repair for businesses.",
    slug: "/services/parking-lot-paving",
    icon: "parking",
  },
  {
    id: "driveway-paving",
    title: "Driveway Paving",
    shortDescription: "Residential driveway paving and resurfacing services.",
    slug: "/services/driveway-paving",
    icon: "home",
  },
  {
    id: "asphalt-repair",
    title: "Asphalt Repair & Patching",
    shortDescription: "Fix potholes, cracks, and damaged areas in your existing pavement.",
    slug: "/services/asphalt-repair",
    icon: "wrench",
  },
  {
    id: "striping",
    title: "Striping & Line Marking",
    shortDescription: "Parking lot striping, traffic markings, and pavement markings.",
    slug: "/services/striping",
    icon: "lines",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map(s => ({ label: s.title, href: s.slug })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "", // TODO: Add Facebook URL
  google: "", // TODO: Add Google Business URL
} as const;

// SEO
export const SEO = {
  defaultTitle: "Cooper Generations Asphalt Company | Ada, Oklahoma | 35+ Years Experience",
  titleTemplate: "%s | Cooper Generations Asphalt",
  defaultDescription: "Professional asphalt paving, sealcoating, and repair services in Ada, Oklahoma. Family owned and operated for 35+ years. Free estimates. Serving all of Oklahoma and surrounding states.",
  siteUrl: "https://cooperasphaltpaving.com", // TODO: Confirm domain
  ogImage: "/images/og-image.jpg",
  keywords: [
    "asphalt paving Ada Oklahoma",
    "driveway paving Oklahoma",
    "parking lot paving",
    "sealcoating Ada OK",
    "asphalt repair",
    "Oklahoma paving contractor",
    "commercial paving",
    "residential paving",
  ],
} as const;
