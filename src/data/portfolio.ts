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
    title: "AI & LLM Application Development",
    whatIBuild: "Custom AI built into real products, RAG chatbots trained on your own docs and data, multi-agent systems, and agentic workflows.",
    youGet: "An AI agent that answers from your knowledge base (not generic ChatGPT), wired into your site or tool.",
    proof: "MASS, a multi-agent startup simulator (LangGraph + FastAPI + Next.js).",
    isFlagship: true
  },
  {
    title: "Full-Stack Web Development",
    whatIBuild: "End-to-end web apps, React/Next.js front end, FastAPI/Python back end, deployed on Vercel.",
    youGet: "A working, deployed product, not a Figma file.",
    proof: "MASS, Learn AI OS.",
  },
  {
    title: "Interactive / Educational Web Apps",
    whatIBuild: "Gamified, Duolingo-style learning experiences that teach a concept interactively.",
    proof: "Learn AI OS, \"You Are a CEO\" (Personal projects).",
  },
  {
    title: "Business Automation for Local Businesses",
    whatIBuild: "Websites plus automation, online booking, lead capture, and AI chat support for local businesses.",
    youGet: "A site that turns visitors into bookings and handles routine questions automatically.",
  },
  {
    title: "Content Strategy & AI/Tech Copywriting",
    whatIBuild: "LinkedIn content roadmaps, reel and video scripts, post templates, and viral-content analysis, tuned for AI and tech founders.",
    framing: "The content system I run on my own channels, now offered to yours.",
  },
  {
    title: "Technical Documents & Resumes",
    whatIBuild: "AI/ML-tailored LaTeX resumes and polished PDF reports and professional docs.",
    isSmall: true
  }
];

export const projects = [
  {
    id: "waffleda",
    title: "WaffleDa",
    description: "Live ordering site for a cafe brand. ~120 orders taken on the site instead of over the phone.",
    proof: "Real client, real result.",
    link: "https://waffleda.in/",
    image: "/projects/waffleda.png", // TODO: real screenshot
    isFeatured: true,
  },
  {
    id: "mass",
    title: "MASS",
    description: "Complex multi-agent application featuring a premium product design.",
    proof: "I build hard apps that look high-end.",
    link: "/projects/mass",
    image: "/projects/mass.png", // TODO: real screenshot
  },
  {
    id: "salon",
    title: "Hair & Beauty Salon",
    description: "Salon site with a custom service selector and WhatsApp booking integration.",
    proof: "Local-business booking systems.",
    link: "#",
    image: "/projects/salon.png", // TODO: real screenshot
  },
  {
    id: "learnai",
    title: "Learn AI OS",
    description: "Interactive learning platform with Duolingo/DataCamp-style UX.",
    proof: "Engaging, interactive product UI.",
    link: "https://learn-ai-os.vercel.app/",
    image: "/projects/learnai.png", // TODO: real screenshot
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Clean, high-end personal portfolio design.",
    proof: "I build portfolios too.",
    link: "https://mayankmalik.vercel.app/",
    image: "/projects/portfolio.png", // TODO: real screenshot
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
  headline: "HELLO, I AM MAYANK MALIK",
  text: "B.Tech CSE (AI/ML) at UPES Dehradun. I build websites, online booking, WhatsApp automations, and AI chatbots for businesses. Currently interning at NewCycl on full-stack and AI products.",
  photo: "/profile.png",
  education: {
    institution: "UPES Dehradun",
    degree: "B.Tech CSE (AI/ML)",
    years: "2024 to 2028"
  },
  experience: {
    company: "NewCycl (intern)",
    role: "Full-stack web + RAG/AI chatbot work",
    period: "JUNE 2026 - PRESENT"
  }
};
