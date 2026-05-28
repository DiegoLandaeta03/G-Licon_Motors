export type CarStatus = 'Available' | 'Sold' | 'Coming Soon'

export interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  bodyType: string
  transmission: string
  fuelType: string
  exteriorColor: string
  imageUrl: string
  description: string
  status: CarStatus
}
