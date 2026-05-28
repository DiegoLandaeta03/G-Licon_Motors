import { useState } from 'react'
import type { FormEvent } from 'react'

interface ContactProps {
  labels: {
    title: string
    subtitle: string
    addressLabel: string
    phoneLabel: string
    form: {
      title: string
      name: string
      phone: string
      email: string
      message: string
      interest: string
      submit: string
      success: string
      options: {
        repair: string
        body: string
        paint: string
        usedCar: string
      }
    }
    buttons: {
      instagram: string
      maps: string
    }
    whatsapp: string
  }
}

function Contact({ labels }: ContactProps) {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Replace with backend submission when admin/contact API is available.
    setShowSuccess(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-brand-light py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            {labels.title}
          </h2>
          <p className="mt-3 text-slate-600">{labels.subtitle}</p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p className="rounded-xl bg-white p-3 shadow-sm">
              <span className="font-semibold">{labels.addressLabel}: </span>
              3720 County Road 130, Hutto, Texas
            </p>
            <p className="rounded-xl bg-white p-3 shadow-sm">
              <span className="font-semibold">{labels.phoneLabel}: </span>
              <a href="tel:+15120000000" className="text-brand-navy hover:underline">
                (512) 000-0000
              </a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/15120000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              {labels.whatsapp}
            </a>
            <a
              href="https://instagram.com/liconmotors"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              {labels.buttons.instagram} @liconmotors
            </a>
            <a
              href="https://maps.google.com/?q=3720+County+Road+130+Hutto+TX"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-brand-navy px-4 py-2 text-sm font-semibold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
            >
              {labels.buttons.maps}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
          <h3 className="text-xl font-bold text-brand-navy">{labels.form.title}</h3>
          <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
            <label className="text-sm font-medium text-slate-700">
              {labels.form.name}
              <input
                required
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {labels.form.phone}
              <input
                required
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {labels.form.email}
              <input
                required
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              {labels.form.interest}
              <select
                required
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              >
                <option value="repair">{labels.form.options.repair}</option>
                <option value="body">{labels.form.options.body}</option>
                <option value="paint">{labels.form.options.paint}</option>
                <option value="usedCar">{labels.form.options.usedCar}</option>
              </select>
            </label>
            <label className="text-sm font-medium text-slate-700">
              {labels.form.message}
              <textarea
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm shadow-sm focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20"
              />
            </label>
            <button
              type="submit"
              className="rounded-xl bg-brand-navy px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              {labels.form.submit}
            </button>
            {showSuccess && <p className="text-sm font-medium text-emerald-600">{labels.form.success}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
