import { 
  Globe, 
  CalendarDays, 
  MessageCircle, 
  Bot, 
  Code2 
} from "lucide-react";

export const contactInfo = {
  whatsapp: "918199082861",
  email: "mayankmalik263@gmail.com",
};

export const heroData = {
  name: "Mayank Malik",
  headline: "I build websites and automations that turn clicks into customers.",
  subheadline: "Websites, online booking, WhatsApp automation, and AI chatbots for local businesses and startups."
};

export const services = [
  {
    title: "Business Websites",
    description: "Fast, mobile-first, and SEO-ready websites that rank and convert.",
    icon: Globe,
  },
  {
    title: "Online Booking",
    description: "Seamless service selectors and calendar integrations for your clients.",
    icon: CalendarDays,
  },
  {
    title: "WhatsApp Automations",
    description: "Automated reminders, review requests, and direct order flows.",
    icon: MessageCircle,
  },
  {
    title: "AI Chatbots",
    description: "Custom AI assistants trained on your data to answer customer queries 24/7.",
    icon: Bot,
  },
  {
    title: "Personal Portfolios",
    description: "Built for you, or paid 1:1 coaching to learn how to build your own with AI.",
    icon: Code2,
  }
];

export const projects = [
  {
    id: "waffleda",
    title: "WaffleDa",
    description: "Live ordering site for a cafe brand. ~120 orders taken on the site instead of over the phone.",
    proof: "Real client, real result.",
    link: "https://waffleda.in/",
    image: null, // TODO: real screenshot
    isFeatured: true,
  },
  {
    id: "mass",
    title: "MASS",
    description: "Complex multi-agent application featuring a premium product design.",
    proof: "I build hard apps that look high-end.",
    link: "https://mass-sim.vercel.app/",
    image: null, // TODO: real screenshot
  },
  {
    id: "salon",
    title: "Hair & Beauty Salon",
    description: "Salon site with a custom service selector and WhatsApp booking integration.",
    proof: "Local-business booking systems.",
    link: "#",
    image: null, // TODO: real screenshot
  },
  {
    id: "learnai",
    title: "Learn AI OS",
    description: "Interactive learning platform with Duolingo/DataCamp-style UX.",
    proof: "Engaging, interactive product UI.",
    link: "https://learn-ai-os.vercel.app/",
    image: null, // TODO: real screenshot
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Clean, high-end personal portfolio design.",
    proof: "I build portfolios too.",
    link: "https://mayankmalik.vercel.app/",
    image: null, // TODO: real screenshot
  }
];

export const pricing = [
  {
    id: "starter",
    title: "Starter",
    price: "Rs 15,000",
    period: "one-time",
    description: "Perfect for getting your business online fast.",
    features: [
      "Responsive business website",
      "Mobile-first design",
      "Basic SEO setup",
      "Click-to-call & WhatsApp buttons",
      "First year's domain included"
    ],
    popular: false,
  },
  {
    id: "growth",
    title: "Growth",
    price: "Rs 22,000",
    period: "one-time + Rs 2,000/mo",
    description: "For businesses that want to automate bookings.",
    features: [
      "Everything in Starter",
      "Online booking / service selector",
      "WhatsApp order flow",
      "Google Business Profile setup",
      "Hosting & maintenance included"
    ],
    popular: true,
  },
  {
    id: "pro",
    title: "Pro",
    price: "Rs 35,000",
    period: "one-time + Rs 3,000/mo",
    description: "Complete digital transformation with AI.",
    features: [
      "Everything in Growth",
      "WhatsApp automations (reminders, reviews)",
      "Custom AI chatbot (RAG)",
      "Priority 24/7 support",
      "Advanced analytics setup"
    ],
    popular: false,
  }
];

export const aboutData = {
  text: "Mayank Malik, B.Tech CSE (AI/ML). I build websites and automations for businesses, and I ship fast. Currently interning at NewCycl building full-stack and AI products."
};
