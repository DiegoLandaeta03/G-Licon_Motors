interface ServicesProps {
  content: {
    sectionTitle: string
    sectionSubtitle: string
    repair: { title: string; description: string }
    body: { title: string; description: string }
    paint: { title: string; description: string }
    cta: string
  }
}

function Services({ content }: ServicesProps) {
  const cards = [
    { icon: '🔧', ...content.repair },
    { icon: '🛠️', ...content.body },
    { icon: '🎨', ...content.paint },
  ]

  return (
    <section id="services" className="bg-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          {content.sectionTitle}
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">{content.sectionSubtitle}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10 text-xl transition group-hover:bg-brand-navy group-hover:text-white">
                {card.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>
              <button
                type="button"
                className="mt-5 rounded-xl border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                {content.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
