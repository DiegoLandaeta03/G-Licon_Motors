interface HeroProps {
  headline: string
  subtext: string
  viewInventoryLabel: string
  contactLabel: string
}

function Hero({ headline, subtext, viewInventoryLabel, contactLabel }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-light to-white">
      <div className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand-navy/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div className="animate-fade-in">
          <span className="inline-flex rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy">
            G-Licon Motors LLC
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-brand-navy md:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">{subtext}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#inventory"
              className="rounded-xl bg-brand-navy px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              {viewInventoryLabel}
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-brand-red px-6 py-3 text-center text-sm font-semibold text-brand-red transition hover:-translate-y-0.5 hover:bg-brand-red hover:text-white"
            >
              {contactLabel}
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-card animate-scale-in">
          <img
            src="/logo.png"
            alt="G-Licon Motors LLC brand mark"
            className="mx-auto h-auto w-full max-w-[420px] object-contain"
            onError={(event) => {
              event.currentTarget.src = '/logo.svg'
            }}
          />
          <p className="mt-4 text-center text-sm text-slate-500">
            3720 County Road 130, Hutto, Texas
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
