import type { Car } from '../types/car'

interface CarCardProps {
  car: Car
  labels: {
    viewDetails: string
    mileage: string
    transmission: string
    fuelType: string
    status: {
      available: string
      sold: string
      comingSoon: string
    }
  }
  onViewDetails: (car: Car) => void
}

const statusStyles: Record<Car['status'], string> = {
  Available: 'bg-emerald-100 text-emerald-700',
  Sold: 'bg-slate-200 text-slate-700',
  'Coming Soon': 'bg-amber-100 text-amber-700',
}

function CarCard({ car, labels, onViewDetails }: CarCardProps) {
  const localizedStatus =
    car.status === 'Available'
      ? labels.status.available
      : car.status === 'Sold'
        ? labels.status.sold
        : labels.status.comingSoon

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={car.imageUrl}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${statusStyles[car.status]}`}
        >
          {localizedStatus}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-tight text-brand-navy">
            {car.year} {car.make} {car.model}
          </h3>
        </div>
        <p className="mt-2 text-2xl font-extrabold text-brand-red">${car.price.toLocaleString()}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
          <div className="rounded-lg bg-slate-50 p-2.5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.mileage}</dt>
            <dd className="mt-1 font-semibold text-slate-700">{car.mileage.toLocaleString()} mi</dd>
          </div>
          <div className="rounded-lg bg-slate-50 p-2.5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {labels.transmission}
            </dt>
            <dd className="mt-1 font-semibold text-slate-700">{car.transmission}</dd>
          </div>
          <div className="col-span-2 rounded-lg bg-slate-50 p-2.5">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{labels.fuelType}</dt>
            <dd className="mt-1 font-semibold text-slate-700">{car.fuelType}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => onViewDetails(car)}
          className="mt-5 w-full rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900"
        >
          {labels.viewDetails}
        </button>
      </div>
    </article>
  )
}

export default CarCard
