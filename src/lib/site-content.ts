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
    value: "12+",
    label: "Businesses Served",
    subtext: "Across Kampala, Jinja, and Mbarara",
  },
  {
    icon: LineChart,
    value: "200%+",
    label: "Avg Enquiry Increase",
    subtext: "Reported by our clients within 3 months",
  },
  {
    icon: MonitorSmartphone,
    value: "100%",
    label: "Mobile-Optimised",
    subtext: "Every site works perfectly on phone & tablet",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    subtext: "From businesses across Uganda",
  },
] as const;

export const capabilityPills = [
  "Website Design & Development",
  "E-commerce & Online Stores",
  "WhatsApp Business Automation",
  "Google Business & Local SEO",
  "Mobile Money Integration",
  "Website Maintenance",
  "Domain & Hosting Setup",
] as const;

export const servicePillars = [
  {
    icon: Store,
    title: "Small & Medium Businesses",
    description:
      "Conversion-focused websites built for Ugandan SMEs that need SEO-optimised pages, mobile-first design, and clear Google visibility to win more local customers.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    tags: ["SEO-Optimised", "Mobile-First", "Google Visibility"],
  },
  {
    icon: Building2,
    title: "Schools & Institutions",
    description:
      "Clean, easy-to-manage portals for Ugandan schools that strengthen parent trust, keep term dates visible, and make admissions enquiries simple on any device.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile-First", "Admissions Ready", "Notice Boards"],
  },
  {
    icon: HeartPulse,
    title: "Hospitals & Clinics",
    description:
      "Trustworthy healthcare websites built for clarity and fast patient contact, with mobile-first design and secure appointment request flows.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile-First", "Patient Trust", "Appointment Flows"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Food Businesses",
    description:
      "Menu-first websites that make customers hungry, display your location clearly, and connect directly to WhatsApp ordering and delivery enquiries.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    tags: ["Menu Display", "WhatsApp Ordering", "Location Ready"],
  },
  {
    icon: Bot,
    title: "WhatsApp Business Automation",
    description:
      "Smart WhatsApp systems that answer customer questions 24/7, qualify leads automatically, and support mobile money payment links so enquiries turn into sales.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["24/7 Auto-Replies", "Lead Qualification", "Mobile Money Links"],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, your customers, and what you want to achieve.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Design Mockup",
    description: "We design a layout that matches your brand before writing any code.",
    icon: TabletSmartphone,
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "We build your fast, secure site using modern tools — WhatsApp and mobile money included.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing",
    description: "We test on real phones, tablets, and desktops so everything works perfectly.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Launch & Google Setup",
    description: "We go live, set up your Google Business Profile, and get you visible in search.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Ongoing Support",
    description: "We don't disappear after launch — we help keep your site updated and performing.",
    icon: Workflow,
  },
] as const;

export const portfolioProjects = [
  {
    title: "Kampala Kids Clinic",
    description: "A paediatric clinic in Ntinda that needed a trustworthy website, an appointment request form, and a WhatsApp channel for worried parents. Enquiries went up 140% in two months.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["Healthcare", "WhatsApp Integration", "Clinic Booking"],
  },
  {
    title: "Kwetu Restaurant & Lounge",
    description: "A popular restaurant in Bugolobi that wanted an online menu, location page, and WhatsApp ordering flow. Customers now browse the menu and place orders directly via WhatsApp without calling.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    tags: ["Restaurant", "WhatsApp Ordering", "Menu Design"],
  },
  {
    title: "Jinja Safari Lodge",
    description: "A tourism lodge on the Nile that needed a beautiful image gallery, booking enquiry form, and integration with their WhatsApp business number for quick guest responses.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tourism", "Booking Enquiries", "Photo Gallery"],
  },
  {
    title: "Emmanuel International School",
    description: "A primary school in Kira Town that wanted a simple website with term dates, admissions info, and a contact form for parents. Now receives regular admission enquiries through the site.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Education", "Admissions Portal", "Parent Communication"],
  },
  {
    title: "Mukwano Home Care",
    description: "A household supplies shop with locations in Kampala and Jinja. Needed a catalogue-style site with product categories, price lists, and a WhatsApp ordering system for bulk customers.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
    tags: ["E-Commerce", "Catalogue", "Bulk Ordering"],
  },
  {
    title: "Kazinga Properties",
    description: "A real estate agency in Kasangati with rental listings and plots for sale. Needed a property gallery, enquiry forms per listing, and Google Maps integration for each location.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Real Estate", "Property Listings", "Map Integration"],
  },
] as const;

export const industries = [
  {
    title: "Retail & E-commerce",
    blurb: "Product catalogues with clear pricing, secure checkout paths, and mobile-first shopping designed for Ugandan buyers.",
    bullets: ["Product catalogue browsing", "WhatsApp ordering flow", "Mobile Money payment links"],
    image:
      "https://images.unsplash.com/photo-1556742205-9d7f6e5a7d33?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Schools & Education",
    blurb: "Structured websites that support admissions, term announcements, and parent communication on mobile phones.",
    bullets: ["Admissions & enrolment pages", "Term dates & announcements", "Parent-friendly navigation"],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare & Medical",
    blurb: "High-trust websites for clinics, hospitals, and specialist providers — appointment requests and service clarity.",
    bullets: ["Appointment request forms", "Service & doctor pages", "Patient confidence signals"],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hotels & Tourism",
    blurb: "Experience-driven websites that showcase rooms, tours, and locations — making visitors want to book.",
    bullets: ["Room & gallery pages", "Booking enquiry forms", "Tour itinerary storytelling"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real Estate & Construction",
    blurb: "Property showcases with listing galleries, location maps, and enquiry forms that help buyers evaluate quickly.",
    bullets: ["Property listing pages", "Location maps", "Buyer enquiry capture"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Restaurants & Food",
    blurb: "Menu-first websites that make ordering easy, display your location, and convert visitors into delivery or dine-in customers.",
    bullets: ["Digital menu display", "WhatsApp ordering", "Location & contact info"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Build Trust with Customers",
    body: "A professional website makes your business look credible and established — even to customers meeting you for the first time on their phone.",
  },
  {
    icon: Search,
    title: "Get Found on Google",
    body: "With proper SEO and a Google Business Profile, customers searching for your service can find you without needing a referral or a social media post.",
  },
  {
    icon: Clock3,
    title: "Generate Leads While You Sleep",
    body: "Your website and WhatsApp bot work 24/7 — collecting enquiries, answering questions, and capturing leads even when your team is off duty.",
  },
  {
    icon: Smartphone,
    title: "Reach Customers on Their Phones",
    body: "Most Ugandans browse on mobile. Every site we build loads fast and looks natural on every screen — from smartphones to desktops.",
  },
  {
    icon: DollarSign,
    title: "Beat Competitors Still Using Facebook Only",
    body: "Many businesses rely solely on social media. A proper website with WhatsApp automation puts you ahead of competitors who haven't made the move yet.",
  },
  {
    icon: Banknote,
    title: "Increase Sales & Revenue",
    body: "Clear messaging, trust signals, easy contact paths, and mobile money integration all work together to turn visitors into paying customers.",
  },
] as const;

export const testimonials = [
  {
    name: "Grace Akello",
    city: "Ntinda, Kampala",
    rating: 5,
    quote:
      "Our clinic website now looks professional, loads fast on phones, and we've been getting more enquiries every week since it went live. The WhatsApp feature means parents can ask questions without calling.",
  },
  {
    name: "Daniel Kato",
    city: "Bugolobi, Kampala",
    rating: 5,
    quote:
      "The WhatsApp ordering system alone changed how we take orders. Customers browse the menu on the website and order directly — it saved us so much phone time. Revenue went up noticeably.",
  },
  {
    name: "Faith Nambooze",
    city: "Kira Town",
    rating: 5,
    quote:
      "We needed a simple website for our school that parents could check on their phones. The final result was clean, professional, and exactly what we needed. Now we get admission enquiries through the site regularly.",
  },
  {
    name: "Abdul Ssempijja",
    city: "Kasangati",
    rating: 5,
    quote:
      "The process was clear from start to finish. They explained everything in simple terms, delivered on time, and even helped set up our Google Business listing. I've already referred two friends.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "UGX 250,000",
    audience: "For small businesses & startups",
    description: "A professional one-page website to get you online fast. No fluff, just a clean site that works on every phone.",
    featured: false,
    features: [
      "1-page responsive website",
      "Mobile-optimised design",
      "Basic SEO setup",
      "WhatsApp click-to-chat button",
      "Google Business Profile setup",
      "Contact form",
      "1 month post-launch support",
      "Free domain (.com, .ug) for 1 year",
    ],
  },
  {
    name: "Business",
    price: "UGX 700,000",
    audience: "For growing brands wanting more leads",
    description: "A full multi-page site with blog, WhatsApp automation, and local SEO to drive enquiries and customers.",
    featured: true,
    badge: "Best Value",
    features: [
      "Up to 5 custom pages",
      "Mobile-optimised design",
      "Advanced local SEO",
      "Blog or news section",
      "WhatsApp Business automation",
      "Google Analytics setup",
      "Mobile Money payment link",
      "3 months post-launch support",
      "Free domain + 1 year hosting",
    ],
  },
  {
    name: "E-Commerce",
    price: "UGX 1,500,000",
    audience: "For businesses ready to sell online",
    description: "Full online store with product catalogue, WhatsApp ordering, and Mobile Money integration.",
    featured: false,
    features: [
      "Product catalogue (up to 100 items)",
      "Mobile-optimised storefront",
      "WhatsApp ordering system",
      "Mobile Money payment integration",
      "Order management dashboard",
      "Inventory tracking",
      "Advanced SEO & marketing",
      "6 months support & hosting",
      "Free domain + 1 year hosting",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "How much does a website cost for a Ugandan business?",
    answer:
      "Our starter package is UGX 250,000 for a professional one-page site. The Business package at UGX 700,000 is our most popular option for businesses that want a full multi-page site with WhatsApp automation and free hosting. E-commerce stores start at UGX 1,500,000. We keep our prices affordable so every Ugandan business can have a professional online presence.",
  },
  {
    question: "How long does it take to build and launch my website?",
    answer:
      "A starter site can be ready in 3-5 days. A Business package typically takes 1-2 weeks. E-commerce sites take 2-3 weeks depending on how many products you have and how quickly you provide content.",
  },
  {
    question: "Do you offer payment plans or can I pay in instalments?",
    answer:
      "Yes. We typically ask for 50% to start the project and 50% on completion before launch. For larger projects we can discuss a payment schedule that works for you.",
  },
  {
    question: "Do you help maintain the website after it launches?",
    answer:
      "Yes. Support is built into all our packages. Starter includes 1 month, Business includes 3 months, and E-Commerce includes 6 months of post-launch support. We can also arrange ongoing maintenance after that.",
  },
  {
    question: "Will the website work well on mobile phones?",
    answer:
      "Absolutely. Every website we build is designed mobile-first and tested on real smartphones before launch. Most of your customers will visit on their phones, so this is our top priority.",
  },
  {
    question: "Can you help my business appear on Google search results?",
    answer:
      "Yes. We build every site with SEO best practices. Our Business and E-Commerce packages include advanced local SEO setup, and we set up your Google Business Profile so customers can find you on Google Maps and search.",
  },
  {
    question: "Can you integrate Mobile Money into my website?",
    answer:
      "Yes. We can add Mobile Money payment links (MTN MoMo, Airtel Money) so customers can pay directly from your website. This is included in our E-Commerce package and available as an add-on for other packages.",
  },
  {
    question: "What if I already have a website and need it redesigned?",
    answer:
      "We can audit your current site, identify what's working and what isn't, and rebuild it with a fresh design, better messaging, and proper mobile optimisation. Send us a WhatsApp message and we'll discuss it.",
  },
] as const;

export const serviceOptions = [
  "Website Design & Development",
  "E-commerce & Online Store",
  "WhatsApp Business Automation",
  "SEO & Google Business Setup",
  "Website Redesign",
  "Website Maintenance",
  "Domain & Hosting",
] as const;

export const budgetOptions = [
  "UGX 200,000 - 400,000",
  "UGX 400,000 - 700,000",
  "UGX 700,000 - 1,500,000",
  "UGX 1,500,000+",
] as const;
