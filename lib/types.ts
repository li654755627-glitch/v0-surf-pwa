export interface Business {
  id: string
  name: string
  category: Category
  rating: number
  reviewCount: number
  district: string
  address: string
  phone: string
  openingHours: OpeningHours
  images: string[]
  priceRange?: string
  description?: string
  latitude?: number
  longitude?: number
}

export interface OpeningHours {
  open: string
  close: string
  isOpen: boolean
}

export type Category = 'restaurant' | 'cafe' | 'electrical-repair' | 'motorcycle-repair'

export interface CategoryInfo {
  id: Category
  name: string
  nameVi: string
  icon: string
  color: string
}

export const categories: CategoryInfo[] = [
  {
    id: 'restaurant',
    name: 'Restaurant',
    nameVi: 'Nhà hàng',
    icon: 'utensils',
    color: 'bg-orange-500',
  },
  {
    id: 'cafe',
    name: 'Cafe',
    nameVi: 'Quán cà phê',
    icon: 'coffee',
    color: 'bg-amber-700',
  },
  {
    id: 'electrical-repair',
    name: 'Electrical Repair',
    nameVi: 'Sửa điện',
    icon: 'zap',
    color: 'bg-blue-500',
  },
  {
    id: 'motorcycle-repair',
    name: 'Motorcycle Repair',
    nameVi: 'Sửa xe máy',
    icon: 'wrench',
    color: 'bg-slate-700',
  },
]
