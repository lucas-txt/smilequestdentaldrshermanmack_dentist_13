export const practice = {
  name: "SmileQuest Dental",
  legalName: "SmileQuest Dental",
  shortName: "SmileQuest",
  tagline: "Uncompromising excellence in dentistry",
  description:
    "At SmileQuest Dental, we don’t do quick fixes or one-size-fits-all solutions. We believe in a tailored and personalized approach for lasting results.",
  phone: "(701) 662-8191",
  phoneAlt: "701-662-8191",
  phoneHref: "tel:+17016628191",
  address: "206 5th Ave SE, Devils Lake, ND 58301",
  addressAlt: "206 5th Avenue SE",
  city: "Devils Lake",
  state: "ND",
  zip: "58301",
  hours: "Monday to Friday, 8:00am-4:00pm",
  hoursShort: "Mon–Fri · 8:00am–4:00pm",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=206+5th+Ave+SE%2C+Devils+Lake%2C+ND+58301",
  facebookUrl: "https://www.facebook.com/SmileQuest-237285993045489/",
  googleReviewsUrl:
    "https://www.google.com/maps/contrib/100490020170867119049/place/ChIJuRPwrNtL21IRMnNnM5FMn1k",
  payment:
    "SmileQuest offers a range of payment options including cash, credit card, and most major dental insurance plans.",
  paymentNote:
    "Not sure if we’re in your network? Contact our team, and we'll help you understand your options so you can start treatment without delay.",
  appointmentTypes: [
    "Existing Patient Check Up & Cleaning",
    "Invisalign Consultation",
    "New Patient Appointment",
    "Second Opinion Consultation",
    "Toothache",
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export type ServiceGroup = "core" | "specialty";

export type ServiceSummary = {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  description: string;
  icon: string;
  image?: string;
  group: ServiceGroup;
  featured?: boolean;
};

export const services: ServiceSummary[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortName: "General",
    href: "/general-dentistry",
    description:
      "Access a complete range of general dentistry services so you can maintain your everyday oral health and prevent major dental problems.",
    icon: "/assets/images/general.svg",
    image: "/assets/images/general-home.webp",
    group: "core",
    featured: true,
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortName: "Cosmetic",
    href: "/cosmetic-dentistry",
    description:
      "Improve your smile and fix imperfections, or totally transform it into a new smile you’ll love. We offer a range of cosmetic dentistry solutions.",
    icon: "/assets/images/cosmetic.svg",
    image: "/assets/images/cosmetic-home.webp",
    group: "core",
    featured: true,
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    shortName: "Restorative",
    href: "/restorative-dentistry",
    description:
      "From simple fillings to full mouth rehabilitations, the team at SmileQuest is highly experienced in restoring damaged smiles.",
    icon: "/assets/images/restorative.svg",
    image: "/assets/images/restorative-home.webp",
    group: "core",
    featured: true,
  },
  {
    slug: "childrens-dentistry",
    name: "Children’s Dentistry",
    shortName: "Children’s",
    href: "/childrens-dentistry",
    description:
      "The team at SmileQuest Dental provides gentle, reassuring care for kids of all ages so they can start healthy habits early.",
    icon: "/assets/images/childrens.svg",
    image: "/assets/images/childrens-home.webp",
    group: "core",
  },
  {
    slug: "endodontics",
    name: "Endodontics",
    shortName: "Endodontics",
    href: "/endodontics",
    description:
      "Our doctors perform root canal treatments with skill, experience, and steady hands so you can maintain a healthy smile.",
    icon: "/assets/images/endodontics.svg",
    image: "/assets/images/endontics-home.webp",
    group: "core",
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    shortName: "Oral Surgery",
    href: "/oral-surgery",
    description:
      "In-house surgical care delivered by an experienced team known for their gentle techniques and attention to detail.",
    icon: "/assets/images/surgery.svg",
    image: "/assets/images/office-ext.webp",
    group: "specialty",
  },
  {
    slug: "periodontics",
    name: "Periodontics",
    shortName: "Periodontics",
    href: "/periodontics",
    description:
      "Gentle periodontal treatment restores gum health for your best smile.",
    icon: "/assets/images/perio.svg",
    image: "/assets/images/general-home.webp",
    group: "specialty",
  },
  {
    slug: "full-mouth-rehabilitation",
    name: "Full Mouth Rehabilitation",
    shortName: "Full Mouth",
    href: "/full-mouth-rehabilitation",
    description:
      "If you need multiple treatments, a tailored full mouth rehabilitation treatment plan can bring your smile back to full health and function.",
    icon: "/assets/images/full-mouth.svg",
    image: "/assets/images/restorative-home.webp",
    group: "specialty",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Implants",
    href: "/dental-implants",
    description:
      "Dental implants are the next best replacement option for natural teeth.",
    icon: "/assets/images/implants.svg",
    image: "/assets/images/restorative-home.webp",
    group: "specialty",
  },
  {
    slug: "smile-makeovers",
    name: "Smile Makeovers",
    shortName: "Makeovers",
    href: "/smile-makeovers",
    description:
      "Thoughtfully planned enhancements refresh and transform your smile into one you will love.",
    icon: "/assets/images/makeover.svg",
    image: "/assets/images/cosmetic-home.webp",
    group: "specialty",
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    shortName: "Invisalign",
    href: "/invisalign",
    description:
      "Invisalign offers a clear, effective alternative to traditional braces if you have crooked teeth or other misalignment issues.",
    icon: "/assets/images/invisalign.svg",
    image: "/assets/images/cosmetic-home.webp",
    group: "specialty",
  },
];

export const coreServices = services.filter((service) => service.group === "core");
export const specialtyServices = services.filter(
  (service) => service.group === "specialty",
);

export const values = [
  {
    title: "Comprehensive Dental Care",
    description:
      "From preventive dental care to oral surgery and endodontics, the SmileQuest team is equipped to handle all your dentistry needs.",
    icon: "/assets/images/care.svg",
  },
  {
    title: "Personalized, Quality Care",
    description:
      "Our team listens first, provides tailored treatment plans, and ensures you receive high-quality dental care in our modern practice.",
    icon: "/assets/images/personalized.svg",
  },
  {
    title: "A Calming, Comfortable Space",
    description:
      "Enjoy a positive dental experience at every visit in our relaxing environment.",
    icon: "/assets/images/calm.svg",
  },
] as const;

export const stats = [
  { value: 3, suffix: "", label: "Dentists under one roof" },
  { value: 22, suffix: "", label: "People on the SmileQuest team" },
  { value: 11, suffix: "", label: "Dental services in one practice" },
] as const;

export const siteLinks = {
  explore: [
    { label: "About Us", href: "/about-us" },
    { label: "Plan Your Visit", href: "/plan-your-visit" },
    { label: "Services", href: "/services" },
    { label: "Patient Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
    { label: "Request Appointment", href: "/request-appointment" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    {
      label: "HIPAA Notice of Privacy Practices",
      href: "/hipaa-notice-of-privacy-practices",
    },
    { label: "Accessibility Statement", href: "/accessibility-statement" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Non-Discrimination Notice", href: "/non-discrimination-notice" },
  ],
};
