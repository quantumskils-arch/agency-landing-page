import {
  Banknote,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  Code2,
  DollarSign,
  HeartPulse,
  LineChart,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  TabletSmartphone,
  Users,
  UtensilsCrossed,
  Workflow,
} from "lucide-react";

export const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Businesses Served",
    subtext: "Trusted by brands across the region",
  },
  {
    icon: LineChart,
    value: "300%",
    label: "Avg Sales Increase",
    subtext: "Growth generated for our clients",
  },
  {
    icon: MonitorSmartphone,
    value: "100%",
    label: "Live & Maintained",
    subtext: "Active websites running flawlessly",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Five-Star Reviews",
    subtext: "Highly rated by satisfied local partners",
  },
] as const;

export const capabilityPills = [
  "Website Design & Development",
  "Mobile App Development",
  "E-commerce Website",
  "SEO",
  "Digital Marketing",
  "Website Maintenance",
  "WhatsApp Automation",
] as const;

export const servicePillars = [
  {
    icon: Store,
    title: "Small & Medium Businesses (SMEs)",
    description:
      "Conversion-focused websites for growing businesses that need SEO-Optimized pages, Mobile-First Design, and clear Google Search Visibility to win more local enquiries.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    tags: ["SEO-Optimized", "Mobile-First Design", "Google Search Visibility"],
  },
  {
    icon: Building2,
    title: "Schools & Institutions",
    description:
      "Structured, easy-to-manage portals for schools and institutions that strengthen trust, keep information organised, and make parent engagement simple on every device.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile-First Design", "SEO-Optimized", "Admissions Ready"],
  },
  {
    icon: HeartPulse,
    title: "Hospitals & Clinics",
    description:
      "Clean healthcare websites built for trust, clarity, and fast contact paths, with Mobile-First Design and Secure appointment flows that support patient confidence.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile-First Design", "Secure", "Trust First"],
  },
  {
    icon: UtensilsCrossed,
    title: "Churches & Communities",
    description:
      "Media-friendly websites for churches and community groups that keep sermons, events, and announcements visible with Mobile-First Design and easy sharing.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile-First Design", "Media Friendly", "SEO-Optimized"],
  },
  {
    icon: Bot,
    title: "WhatsApp Automation",
    description:
      "Intelligent WhatsApp systems that respond 24/7, qualify leads, and support Secure Payment Integrations so conversations turn into real business outcomes.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["24/7", "Secure Payment Integrations", "Lead Qualification"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Competitor analysis and defining clear client success metrics.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Crafting conversion-focused layouts before writing code.",
    icon: TabletSmartphone,
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Building fast, secure platforms using Next.js & Tailwind.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Rigorous performance and mobile testing across all devices.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Launch & Deployment",
    description:
      "Going live with proper local SEO setup and tracking.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Growth & Automation",
    description:
      "Long-term partner maintenance and WhatsApp chatbot tuning.",
    icon: Workflow,
  },
] as const;

export const portfolioProjects = [
  {
    title: "Retail E-commerce Store",
    description: "A sample storefront experience designed to increase product discovery and checkout confidence.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "School Portal",
    description: "A clean portal concept for admissions, announcements, and parent communications.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Clinic Booking Site",
    description: "A patient-friendly website concept with services, booking prompts, and trust-building content.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tours & Adventures Site",
    description: "A travel experience layout built to inspire exploration and make enquiries easy.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurant Ordering Site",
    description: "A modern food ordering mockup focused on appetizing visuals and quick customer action.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real Estate Listings",
    description: "A property browsing concept that presents listings clearly and drives lead generation.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const industries = [
  {
    title: "E-commerce & Retail",
    blurb: "Product-led layouts with clear categories, pricing, and strong calls to action.",
    bullets: ["Catalog browsing", "Secure checkout paths", "Mobile shopping experiences"],
    image:
      "https://images.unsplash.com/photo-1556742205-9d7f6e5a7d33?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Schools & Education",
    blurb: "Structured web experiences that support admissions, communication, and parent trust.",
    bullets: ["Admissions and enrollment", "Announcements and notices", "Parent-friendly navigation"],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare & Medical",
    blurb: "High-trust digital journeys for clinics, hospitals, and specialist care providers.",
    bullets: ["Appointment prompts", "Service clarity", "Patient confidence and trust"],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hotels & Tourism",
    blurb: "Experience-led layouts that inspire visitors to enquire and book with confidence.",
    bullets: ["Beautiful imagery", "Booking enquiries", "Itinerary storytelling"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real Estate & Construction",
    blurb: "Property and project showcases that help buyers and investors evaluate quickly.",
    bullets: ["Listing galleries", "Project timelines", "Lead capture forms"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurants & Food",
    blurb: "Menu-first websites that make orders, reservations, and cravings easier to convert.",
    bullets: ["Menu presentation", "Ordering convenience", "Promotion-ready visuals"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Build Credibility & Trust",
    body: "A polished website makes your business look established, even to customers meeting you for the first time in Kampala or Kasangati.",
  },
  {
    icon: Search,
    title: "Get Found on Google (SEO)",
    body: "With the right structure and content, customers searching for your service can find you without needing a referral.",
  },
  {
    icon: Clock3,
    title: "Generate Leads 24/7",
    body: "Your website never closes. It keeps collecting enquiries, bookings, and WhatsApp conversations while your team focuses on delivery.",
  },
  {
    icon: Smartphone,
    title: "Reach Mobile Users",
    body: "Most customers browse on phones, so your site should load quickly and feel natural on every screen size.",
  },
  {
    icon: DollarSign,
    title: "Outperform Competitors",
    body: "A sharper digital presence helps you stand out against businesses that still rely on outdated or slow websites.",
  },
  {
    icon: Banknote,
    title: "Increase Sales & Revenue",
    body: "Clear messaging, stronger trust signals, and easier contact paths all work together to improve conversion.",
  },
] as const;

export const testimonials = [
  {
    name: "Grace A.",
    city: "Kampala",
    rating: 5,
    quote:
      "Our website now looks professional, loads quickly on phones, and brings in more enquiries every week.",
  },
  {
    name: "Daniel K.",
    city: "Mbarara",
    rating: 5,
    quote:
      "The WhatsApp flow made it easier for customers to ask questions and book services without waiting.",
  },
  {
    name: "Faith N.",
    city: "Jinja",
    rating: 5,
    quote:
      "We needed something clean and trustworthy, and the final result matched the quality we wanted for our brand.",
  },
  {
    name: "Abdul S.",
    city: "Kasangati",
    rating: 5,
    quote:
      "The process was clear from start to finish, and the launch support made everything feel smooth and manageable.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "UGX 750,000",
    audience: "Small businesses & startups",
    description: "A focused package for businesses that need a professional online presence quickly.",
    featured: false,
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Basic SEO",
      "Contact form",
      "Social links",
      "1 month support",
      "Google Business setup",
      "2 revision rounds",
    ],
  },
  {
    name: "Business",
    price: "UGX 1,500,000",
    audience: "Growing brands that want more leads",
    description: "The most balanced package for businesses that want stronger visibility and lead generation.",
    featured: true,
    badge: "Most Popular",
    features: [
      "Up to 10 pages",
      "Advanced SEO",
      "Blog/CMS",
      "Email marketing integration",
      "Live chat (WhatsApp) integration",
      "Analytics setup",
      "3 months support",
      "Priority support & hosting",
    ],
  },
  {
    name: "Ecommerce",
    price: "UGX 3,000,000",
    audience: "Ready to sell online",
    description: "A full online selling package for stores that need products, payments, and order management.",
    featured: false,
    features: [
      "Unlimited pages & products",
      "Full ecommerce platform",
      "Payment gateway",
      "Mobile Money integration",
      "Inventory management",
      "Order/customer management",
      "Advanced SEO & marketing",
      "Email automation",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "How much does a website cost for a Ugandan business?",
    answer:
      "Our starter package begins at UGX 750,000, while more advanced sites and ecommerce builds are priced according to scope, features, and integrations.",
  },
  {
    question: "How long does it take to launch a website?",
    answer:
      "A straightforward website can move from strategy to launch in a few weeks, while larger platforms and ecommerce projects take longer depending on content and approvals.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Support options are built into our pricing plans, and we can continue helping with updates, performance checks, and content changes.",
  },
  {
    question: "Can you redesign my existing site without starting over?",
    answer:
      "Absolutely. We can audit your current site, preserve what works, and rebuild the experience around stronger messaging, speed, and conversion.",
  },
  {
    question: "Will the website work well on mobile phones?",
    answer:
      "Yes. Every build is mobile-first and tested across screen sizes so visitors on phones, tablets, and desktops get a consistent experience.",
  },
  {
    question: "Can you help my business rank better on Google?",
    answer:
      "We build with SEO best practices from the start, including page structure, content hierarchy, metadata, and local visibility support.",
  },
] as const;

export const serviceOptions = [
  "Website Design & Development",
  "Mobile App Development",
  "E-commerce Website",
  "SEO",
  "Digital Marketing",
  "Website Maintenance",
  "WhatsApp Automation",
] as const;

export const budgetOptions = [
  "UGX 500,000 - 1,000,000",
  "UGX 1,000,000 - 2,000,000",
  "UGX 2,000,000 - 5,000,000",
  "UGX 5,000,000+",
] as const;
