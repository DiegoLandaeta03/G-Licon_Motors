import { useEffect, useMemo, useRef, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Inventory from './components/Inventory'
import Services from './components/Services'
import { cars } from './data/cars'
import { translations } from './data/translations'
import type { Language } from './data/translations'

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('g-licon-language')
    return savedLanguage === 'en' || savedLanguage === 'es' ? savedLanguage : 'en'
  })
  const [isLanguageTransitioning, setIsLanguageTransitioning] = useState(false)
  const languageTransitionTimeout = useRef<number | null>(null)
  const t = useMemo(() => translations[language], [language])

  useEffect(() => {
    localStorage.setItem('g-licon-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(
    () => () => {
      if (languageTransitionTimeout.current !== null) {
        window.clearTimeout(languageTransitionTimeout.current)
      }
    },
    [],
  )

  const handleLanguageChange = (nextLanguage: Language) => {
    if (nextLanguage === language) return
    setIsLanguageTransitioning(true)
    if (languageTransitionTimeout.current !== null) {
      window.clearTimeout(languageTransitionTimeout.current)
    }
    languageTransitionTimeout.current = window.setTimeout(() => {
      setIsLanguageTransitioning(false)
    }, 220)
    setLanguage(nextLanguage)
  }

  return (
    <div className="bg-white text-slate-900">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        labels={{
          ...t.nav,
          dealerAuthorized: t.common.dealerAuthorized,
        }}
      />
      <main
        className={`transition-opacity duration-200 ${isLanguageTransitioning ? 'opacity-90' : 'opacity-100'}`}
      >
        <Hero
          headline={t.hero.headline}
          subtext={t.hero.subtext}
          viewInventoryLabel={t.common.viewInventory}
          contactLabel={t.common.contactUs}
        />
        <Inventory
          cars={cars}
          labels={{
            ...t.inventory,
            viewDetails: t.common.viewDetails,
            call: t.common.call,
            whatsapp: t.common.whatsapp,
            askVehicle: t.inventory.askVehicle,
            clearFilters: t.common.clearFilters,
          }}
        />
        <Services content={t.services} />
        <Contact labels={{ ...t.contact, whatsapp: t.common.whatsapp }} />
      </main>
      <Footer
        labels={{
          ...t.footer,
          home: t.nav.home,
          inventory: t.nav.inventory,
          servicesNav: t.nav.services,
          contactNav: t.nav.contact,
          repair: t.services.repair.title,
          body: t.services.body.title,
          paint: t.services.paint.title,
        }}
      />

      <a
        href="https://wa.me/15120000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl text-white shadow-lg transition hover:scale-105 hover:bg-emerald-700 md:hidden"
        aria-label="WhatsApp"
      >
        <span className="animate-pulse">💬</span>
      </a>
    </div>
  )
}

export default App
