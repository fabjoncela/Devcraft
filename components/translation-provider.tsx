"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "sq"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Tailored Software Solutions for Your Business",
    "hero.subtitle":
      "We build custom e-commerce platforms, CRMs, internal tools, and automation systems that drive growth and efficiency for businesses of all sizes.",
    "hero.cta": "See Our Work",
    "hero.secondary": "Get Started",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive software development solutions tailored to your business needs",
    "services.ecommerce.title": "E-commerce Platforms",
    "services.ecommerce.desc":
      "Custom online stores with advanced features, payment integration, and scalable architecture.",
    "services.crm.title": "CRM Systems",
    "services.crm.desc": "Customer relationship management solutions to streamline your sales and support processes.",
    "services.tools.title": "Internal Tools",
    "services.tools.desc": "Bespoke applications to optimize your internal workflows and boost productivity.",
    "services.automation.title": "Automation Systems",
    "services.automation.desc": "Intelligent automation solutions to reduce manual work and increase efficiency.",

    // Industries
    "industries.title": "Industries We Serve",
    "industries.subtitle": "Delivering specialized solutions across diverse sectors",
    "industries.retail": "Retail & E-commerce",
    "industries.healthcare": "Healthcare",
    "industries.finance": "Finance & Banking",
    "industries.manufacturing": "Manufacturing",
    "industries.education": "Education",
    "industries.logistics": "Logistics",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Showcasing our expertise through successful client implementations",
    "projects.ecommerce.title": "Multi-vendor E-commerce Platform",
    "projects.ecommerce.desc":
      "Built a scalable marketplace with advanced vendor management, real-time analytics, and mobile-first design.",
    "projects.crm.title": "Enterprise CRM Solution",
    "projects.crm.desc":
      "Developed a comprehensive CRM system with AI-powered lead scoring and automated workflow management.",
    "projects.automation.title": "Manufacturing Automation Suite",
    "projects.automation.desc":
      "Created an integrated system for inventory management, quality control, and production optimization.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by businesses worldwide",

    // About
    "about.title": "About Our Team",
    "about.subtitle": "Passionate developers committed to delivering excellence",
    "about.description":
      "With over a decade of combined experience, our team specializes in creating robust, scalable software solutions. We pride ourselves on understanding your business needs and delivering technology that drives real results.",
    "about.experience": "Years Experience",
    "about.projects": "Projects Completed",
    "about.clients": "Happy Clients",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to transform your business with custom software?",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.company": "Company Name",
    "contact.message": "Project Details",
    "contact.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.address": "123 Tech Street, Innovation District",
    "contact.info.phone": "+1 (555) 123-4567",
    "contact.info.email": "hello@yourcompany.com",

    // Footer
    "footer.description": "Building the future of business through innovative software solutions.",
    "footer.services.title": "Services",
    "footer.company.title": "Company",
    "footer.support.title": "Support",
    "footer.rights": "All rights reserved.",
  },
  sq: {
    // Header
    "nav.services": "Shërbimet",
    "nav.industries": "Industritë",
    "nav.projects": "Projektet",
    "nav.about": "Rreth Nesh",
    "nav.contact": "Kontakti",

    // Hero
    "hero.title": "Zgjidhje Software të Personalizuara për Biznesin Tuaj",
    "hero.subtitle":
      "Ne ndërtojmë platforma e-commerce të personalizuara, CRM, mjete të brendshme dhe sisteme automatizimi që nxisin rritjen dhe efikasitetin për biznese të të gjitha madhësive.",
    "hero.cta": "Shiko Punën Tonë",
    "hero.secondary": "Fillo Tani",

    // Services
    "services.title": "Shërbimet Tona",
    "services.subtitle": "Zgjidhje gjithëpërfshirëse zhvillimi software të personalizuara për nevojat e biznesit tuaj",
    "services.ecommerce.title": "Platforma E-commerce",
    "services.ecommerce.desc":
      "Dyqane online të personalizuara me veçori të avancuara, integrim pagesash dhe arkitekturë të shkallëzueshme.",
    "services.crm.title": "Sisteme CRM",
    "services.crm.desc":
      "Zgjidhje menaxhimi marrëdhënieve me klientë për të thjeshtuar proceset e shitjes dhe mbështetjes.",
    "services.tools.title": "Mjete të Brendshme",
    "services.tools.desc":
      "Aplikacione të personalizuara për të optimizuar rrjedhat e punës së brendshme dhe për të rritur produktivitetin.",
    "services.automation.title": "Sisteme Automatizimi",
    "services.automation.desc":
      "Zgjidhje automatizimi inteligjent për të reduktuar punën manuale dhe për të rritur efikasitetin.",

    // Industries
    "industries.title": "Industritë që Shërbejmë",
    "industries.subtitle": "Ofrimi i zgjidhjeve të specializuara në sektorë të ndryshëm",
    "industries.retail": "Shitje me Pakicë & E-commerce",
    "industries.healthcare": "Kujdesi Shëndetësor",
    "industries.finance": "Financa & Bankat",
    "industries.manufacturing": "Prodhimi",
    "industries.education": "Arsimi",
    "industries.logistics": "Logjistika",

    // Projects
    "projects.title": "Projekte të Zgjedhura",
    "projects.subtitle": "Duke treguar ekspertizën tonë përmes implementimeve të suksesshme të klientëve",
    "projects.ecommerce.title": "Platformë E-commerce Multi-shitës",
    "projects.ecommerce.desc":
      "Ndërtuam një treg të shkallëzueshëm me menaxhim të avancuar shitësish, analitikë në kohë reale dhe dizajn mobile-first.",
    "projects.crm.title": "Zgjidhje CRM për Ndërmarrje",
    "projects.crm.desc":
      "Zhvilluam një sistem CRM gjithëpërfshirës me vlerësim të udhëhequr nga AI dhe menaxhim të automatizuar të rrjedhës së punës.",
    "projects.automation.title": "Suitë Automatizimi Prodhimi",
    "projects.automation.desc":
      "Krijuam një sistem të integruar për menaxhimin e inventarit, kontrollin e cilësisë dhe optimizimin e prodhimit.",

    // Testimonials
    "testimonials.title": "Çfarë Thonë Klientët Tanë",
    "testimonials.subtitle": "I besuar nga biznese në mbarë botën",

    // About
    "about.title": "Rreth Ekipit Tonë",
    "about.subtitle": "Zhvillues të pasionuar të përkushtuar për të ofruar përsosmëri",
    "about.description":
      "Me mbi një dekadë përvojë të kombinuar, ekipi ynë specializohet në krijimin e zgjidhjeve software të forta dhe të shkallëzueshme. Ne krenohemi që kuptojmë nevojat e biznesit tuaj dhe ofrojmë teknologji që sjell rezultate të vërteta.",
    "about.experience": "Vite Përvojë",
    "about.projects": "Projekte të Përfunduara",
    "about.clients": "Klientë të Kënaqur",

    // Contact
    "contact.title": "Na Kontaktoni",
    "contact.subtitle": "Gati të transformoni biznesin tuaj me software të personalizuar?",
    "contact.name": "Emri i Plotë",
    "contact.email": "Adresa Email",
    "contact.company": "Emri i Kompanisë",
    "contact.message": "Detajet e Projektit",
    "contact.send": "Dërgo Mesazhin",
    "contact.info.title": "Informacioni i Kontaktit",
    "contact.info.address": "123 Rruga Teknologjike, Qarku i Inovacionit",
    "contact.info.phone": "+355 (69) 123-4567",
    "contact.info.email": "hello@kompania.com",

    // Footer
    "footer.description": "Duke ndërtuar të ardhmen e biznesit përmes zgjidhjeve inovative software.",
    "footer.services.title": "Shërbimet",
    "footer.company.title": "Kompania",
    "footer.support.title": "Mbështetja",
    "footer.rights": "Të gjitha të drejtat e rezervuara.",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
