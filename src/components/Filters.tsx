interface FilterValues {
  search: string
  make: string
  model: string
  minPrice: string
  maxPrice: string
  minYear: string
  maxYear: string
  minMileage: string
  maxMileage: string
  status: string
}

interface FiltersProps {
  values: FilterValues
  makes: string[]
  models: string[]
  onChange: (field: keyof FilterValues, value: string) => void
  onClear: () => void
  labels: {
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
    clearFilters: string
    viewResults: string
    statusOptions: {
      available: string
      sold: string
      comingSoon: string
    }
  }
}

function Filters({ values, makes, models, onChange, onClear, labels }: FiltersProps) {
  const inputClassName =
    'mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm transition focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20'

  return (
    <div className="rounded-2xl bg-white p-4 md:p-5">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <label className="text-sm font-medium text-slate-700">
          {labels.search}
          <input
            value={values.search}
            onChange={(event) => onChange('search', event.target.value)}
            placeholder={labels.searchPlaceholder}
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.make}
          <select
            value={values.make}
            onChange={(event) => onChange('make', event.target.value)}
            className={inputClassName}
          >
            <option value="">{labels.all}</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.model}
          <select
            value={values.model}
            onChange={(event) => onChange('model', event.target.value)}
            className={inputClassName}
          >
            <option value="">{labels.all}</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.status}
          <select
            value={values.status}
            onChange={(event) => onChange('status', event.target.value)}
            className={inputClassName}
          >
            <option value="">{labels.all}</option>
            <option value="Available">{labels.statusOptions.available}</option>
            <option value="Sold">{labels.statusOptions.sold}</option>
            <option value="Coming Soon">{labels.statusOptions.comingSoon}</option>
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.minPrice}
          <input
            type="number"
            value={values.minPrice}
            onChange={(event) => onChange('minPrice', event.target.value)}
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.maxPrice}
          <input
            type="number"
            value={values.maxPrice}
            onChange={(event) => onChange('maxPrice', event.target.value)}
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.minYear}
          <input
            type="number"
            value={values.minYear}
            onChange={(event) => onChange('minYear', event.target.value)}
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.maxYear}
          <input
            type="number"
            value={values.maxYear}
            onChange={(event) => onChange('maxYear', event.target.value)}
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.minMileage}
          <input
            type="number"
            value={values.minMileage}
            onChange={(event) => onChange('minMileage', event.target.value)}
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          {labels.maxMileage}
          <input
            type="number"
            value={values.maxMileage}
            onChange={(event) => onChange('maxMileage', event.target.value)}
            className={inputClassName}
          />
        </label>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg border border-brand-red px-4 py-2 text-sm font-semibold text-brand-red transition hover:bg-brand-red hover:text-white"
        >
          {labels.clearFilters}
        </button>
      </div>
    </div>
  )
}

export type { FilterValues }
export default Filters
