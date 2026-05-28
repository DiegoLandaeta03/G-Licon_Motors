import type { Car } from '../types/car'

interface CarDetailsModalProps {
  car: Car | null
  isOpen: boolean
  onClose: () => void
  labels: {
    call: string
    whatsapp: string
    askVehicle: string
    details: {
      year: string
      price: string
      mileage: string
      bodyType: string
      transmission: string
      fuelType: string
      exteriorColor: string
    }
  }
}

function CarDetailsModal({ car, isOpen, onClose, labels }: CarDetailsModalProps) {
  if (!isOpen || !car) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${car.year} ${car.make} ${car.model}`}
    >
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl animate-scale-in">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 p-4 backdrop-blur">
          <h3 className="text-xl font-bold text-brand-navy">
            {car.year} {car.make} {car.model}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-6 p-4 md:grid-cols-2 md:p-6">
          <img
            src={car.imageUrl}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="h-64 w-full rounded-2xl object-cover md:h-full md:max-h-[420px]"
          />

          <div>
            <dl className="grid gap-2 text-sm text-slate-700">
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.year}</dt>
                <dd>{car.year}</dd>
              </div>
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.price}</dt>
                <dd>${car.price.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.mileage}</dt>
                <dd>{car.mileage.toLocaleString()} mi</dd>
              </div>
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.bodyType}</dt>
                <dd>{car.bodyType}</dd>
              </div>
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.transmission}</dt>
                <dd>{car.transmission}</dd>
              </div>
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.fuelType}</dt>
                <dd>{car.fuelType}</dd>
              </div>
              <div className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <dt className="font-semibold">{labels.details.exteriorColor}</dt>
                <dd>{car.exteriorColor}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{car.description}</p>
          </div>
        </div>

        <div className="grid gap-2 border-t border-slate-200 p-4 md:grid-cols-3 md:p-6">
          <a
            href="tel:+15120000000"
            className="rounded-lg bg-brand-navy px-4 py-2 text-center text-sm font-semibold text-white"
          >
            {labels.call}
          </a>
          <a
            href="https://wa.me/15120000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            {labels.whatsapp}
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="rounded-lg border border-brand-red px-4 py-2 text-center text-sm font-semibold text-brand-red"
          >
            {labels.askVehicle}
          </a>
        </div>
      </div>
    </div>
  )
}

export default CarDetailsModal
