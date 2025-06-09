"use client"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Industries from "@/components/industries"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TranslationProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Services />
            <Industries />
            <Projects />
            <Testimonials />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  )
}
