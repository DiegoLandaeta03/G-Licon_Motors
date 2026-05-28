import { useState } from 'react'
import type { Language } from '../data/translations'
import LanguageToggle from './LanguageToggle'

interface HeaderProps {
  language: Language
  onLanguageChange: (language: Language) => void
  labels: {
    home: string
    inventory: string
    services: string
    contact: string
    dealerAuthorized: string
  }
}

function Header({ language, onLanguageChange, labels }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { id: 'home', label: labels.home },
    { id: 'inventory', label: labels.inventory },
    { id: 'services', label: labels.services },
    { id: 'contact', label: labels.contact },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="G-Licon Motors LLC logo"
            className="h-11 w-auto max-w-[132px] object-contain md:h-12 md:max-w-[150px]"
            onError={(event) => {
              event.currentTarget.src = '/logo.svg'
            }}
          />
          <div className="hidden text-left sm:block">
            <p className="text-sm font-extrabold text-brand-navy md:text-base">G-Licon Motors LLC</p>
            <p className="text-xs text-slate-500">Austin, Texas</p>
          </div>
          <span className="hidden rounded-full bg-brand-red px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white lg:inline-flex">
            {labels.dealerAuthorized}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <button
            type="button"
            className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition hover:border-brand-navy hover:text-brand-navy"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="animate-fade-in border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mb-4">
            <span className="rounded-full bg-brand-red px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              {labels.dealerAuthorized}
            </span>
          </div>
          <nav className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
