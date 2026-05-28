import type { Language } from '../data/translations'

interface LanguageToggleProps {
  language: Language
  onChange: (language: Language) => void
}

function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm"
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => onChange('en')}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition-all duration-200 ${
          language === 'en'
            ? 'bg-brand-navy text-white'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChange('es')}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition-all duration-200 ${
          language === 'es'
            ? 'bg-brand-red text-white'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
        aria-pressed={language === 'es'}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageToggle
