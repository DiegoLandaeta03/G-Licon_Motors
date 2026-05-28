interface FooterProps {
  labels: {
    quickLinks: string
    services: string
    contact: string
    rights: string
    home: string
    inventory: string
    servicesNav: string
    contactNav: string
    repair: string
    body: string
    paint: string
  }
}

function Footer({ labels }: FooterProps) {
  return (
    <footer className="bg-brand-navy py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-6">
        <div>
          <img
            src="/logo.png"
            alt="G-Licon Motors LLC logo"
            className="h-12 w-auto max-w-[140px] object-contain brightness-110"
            onError={(event) => {
              event.currentTarget.src = '/logo.svg'
            }}
          />
          <p className="mt-3 text-sm text-slate-200">G-Licon Motors LLC</p>
          <p className="text-sm text-slate-300">Austin, Texas</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{labels.quickLinks}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>
              <a href="#home" className="transition hover:text-white">
                {labels.home}
              </a>
            </li>
            <li>
              <a href="#inventory" className="transition hover:text-white">
                {labels.inventory}
              </a>
            </li>
            <li>
              <a href="#services" className="transition hover:text-white">
                {labels.servicesNav}
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white">
                {labels.contactNav}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{labels.services}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>{labels.repair}</li>
            <li>{labels.body}</li>
            <li>{labels.paint}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{labels.contact}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>3720 County Road 130</li>
            <li>Hutto, Texas</li>
            <li>(512) 000-0000</li>
            <li>@liconmotors</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-slate-300">
        © {new Date().getFullYear()} G-Licon Motors LLC. {labels.rights}
      </p>
    </footer>
  )
}

export default Footer
