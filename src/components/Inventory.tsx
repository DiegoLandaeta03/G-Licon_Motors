import { useEffect, useMemo, useState } from 'react'
import type { Car } from '../types/car'
import CarCard from './CarCard'
import CarDetailsModal from './CarDetailsModal'
import Filters from './Filters'
import type { FilterValues } from './Filters'

type SortBy = 'priceLowHigh' | 'priceHighLow' | 'newestYear' | 'lowestMileage'

interface InventoryProps {
  cars: Car[]
  labels: {
    title: string
    subtitle: string
    matchingVehicles: string
    emptyState: string
    sortLabel: string
    sortOptions: {
      priceLowHigh: string
      priceHighLow: string
      newestYear: string
      lowestMileage: string
    }
    filters: {
      search: string
      searchPlaceholder: string
      make: string
      model: string
      minPrice: string
      maxPrice: string
      minYear: string
      maxYear: string
      minMileage: string
      maxMileage: string
      status: string
      all: string
      filters: string
      closeFilters: string
      openFilters: string
      viewResults: string
    }
    status: {
      available: string
      sold: string
      comingSoon: string
    }
    details: {
      year: string
      price: string
      mileage: string
      bodyType: string
      transmission: string
      fuelType: string
      exteriorColor: string
    }
    viewDetails: string
    call: string
    whatsapp: string
    askVehicle: string
    clearFilters: string
  }
}

const defaultFilters: FilterValues = {
  search: '',
  make: '',
  model: '',
  minPrice: '',
  maxPrice: '',
  minYear: '',
  maxYear: '',
  minMileage: '',
  maxMileage: '',
  status: '',
}

function Inventory({ cars, labels }: InventoryProps) {
  // TODO: Swap local `cars` prop for backend/API data from future admin dashboard.
  const [filters, setFilters] = useState<FilterValues>(defaultFilters)
  const [sortBy, setSortBy] = useState<SortBy>('priceLowHigh')
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const makes = useMemo(() => Array.from(new Set(cars.map((car) => car.make))).sort(), [cars])

  const models = useMemo(() => {
    const source = filters.make ? cars.filter((car) => car.make === filters.make) : cars
    return Array.from(new Set(source.map((car) => car.model))).sort()
  }, [cars, filters.make])

  const filteredCars = useMemo(() => {
    const keyword = filters.search.toLowerCase().trim()

    const filtered = cars.filter((car) => {
      const matchesKeyword =
        !keyword ||
        `${car.year} ${car.make} ${car.model} ${car.bodyType} ${car.exteriorColor}`
          .toLowerCase()
          .includes(keyword)
      const matchesMake = !filters.make || car.make === filters.make
      const matchesModel = !filters.model || car.model === filters.model
      const matchesStatus = !filters.status || car.status === filters.status
      const matchesMinPrice = !filters.minPrice || car.price >= Number(filters.minPrice)
      const matchesMaxPrice = !filters.maxPrice || car.price <= Number(filters.maxPrice)
      const matchesMinYear = !filters.minYear || car.year >= Number(filters.minYear)
      const matchesMaxYear = !filters.maxYear || car.year <= Number(filters.maxYear)
      const matchesMinMileage = !filters.minMileage || car.mileage >= Number(filters.minMileage)
      const matchesMaxMileage = !filters.maxMileage || car.mileage <= Number(filters.maxMileage)

      return (
        matchesKeyword &&
        matchesMake &&
        matchesModel &&
        matchesStatus &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinYear &&
        matchesMaxYear &&
        matchesMinMileage &&
        matchesMaxMileage
      )
    })

    return [...filtered].sort((a, b) => {
      if (sortBy === 'priceLowHigh') return a.price - b.price
      if (sortBy === 'priceHighLow') return b.price - a.price
      if (sortBy === 'newestYear') return b.year - a.year
      return a.mileage - b.mileage
    })
  }, [cars, filters, sortBy])

  const activeFilterCount = useMemo(
    () => Object.values(filters).filter((value) => value.trim().length > 0).length,
    [filters],
  )

  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
    document.body.style.overflow = ''
    return undefined
  }, [showMobileFilters])

  const handleFilterChange = (field: keyof FilterValues, value: string) => {
    setFilters((prev) => {
      const next = { ...prev, [field]: value }
      if (field === 'make') {
        next.model = ''
      }
      return next
    })
  }

  const filterContent = (
    <Filters
      values={filters}
      makes={makes}
      models={models}
      onChange={handleFilterChange}
      onClear={() => setFilters(defaultFilters)}
      labels={{
        ...labels.filters,
        clearFilters: labels.clearFilters,
        statusOptions: labels.status,
      }}
    />
  )

  return (
    <section id="inventory" className="bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
              {labels.title}
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">{labels.subtitle}</p>
            <p className="mt-4 inline-flex rounded-full bg-brand-navy/10 px-3 py-1 text-sm font-semibold text-brand-navy">
              {filteredCars.length} {labels.matchingVehicles}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-navy hover:text-brand-navy md:hidden"
              onClick={() => setShowMobileFilters(true)}
            >
              {labels.filters.openFilters}
              <span className="rounded-full bg-brand-navy px-2 py-0.5 text-xs text-white">
                {activeFilterCount}
              </span>
            </button>
            <label className="text-sm font-medium text-slate-700">
              {labels.sortLabel}
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortBy)}
                className="ml-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-navy focus:outline-none"
              >
                <option value="priceLowHigh">{labels.sortOptions.priceLowHigh}</option>
                <option value="priceHighLow">{labels.sortOptions.priceHighLow}</option>
                <option value="newestYear">{labels.sortOptions.newestYear}</option>
                <option value="lowestMileage">{labels.sortOptions.lowestMileage}</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-6 hidden rounded-2xl border border-slate-100 bg-white p-1 shadow-card md:block">
          {filterContent}
        </div>

        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
            <button
              type="button"
              className="absolute inset-0 bg-black/45"
              onClick={() => setShowMobileFilters(false)}
              aria-label={labels.filters.closeFilters}
            />
            <div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white p-4 shadow-2xl animate-slide-up">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-base font-bold text-brand-navy">{labels.filters.filters}</h3>
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-600"
                >
                  {labels.filters.closeFilters}
                </button>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-2">{filterContent}</div>
              <button
                type="button"
                onClick={() => setShowMobileFilters(false)}
                className="mt-4 w-full rounded-xl bg-brand-navy px-4 py-3 text-sm font-semibold text-white"
              >
                {labels.filters.viewResults} ({filteredCars.length})
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onViewDetails={(vehicle) => setSelectedCar(vehicle)}
              labels={{
                viewDetails: labels.viewDetails,
                mileage: labels.details.mileage,
                transmission: labels.details.transmission,
                fuelType: labels.details.fuelType,
                status: labels.status,
              }}
            />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-600">
            {labels.emptyState}
          </div>
        )}
      </div>

      <CarDetailsModal
        isOpen={selectedCar !== null}
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        labels={{
          call: labels.call,
          whatsapp: labels.whatsapp,
          askVehicle: labels.askVehicle,
          details: labels.details,
        }}
      />
    </section>
  )
}

export default Inventory
