'use client'

import { ChevronDown, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const cities = [
  { id: 'hanoi', name: 'Hà Nội' },
  { id: 'hcm', name: 'TP. Hồ Chí Minh', disabled: true },
  { id: 'danang', name: 'Đà Nẵng', disabled: true },
]

interface CitySelectorProps {
  selectedCity?: string
  onCityChange?: (cityId: string) => void
}

export function CitySelector({ selectedCity = 'hanoi', onCityChange }: CitySelectorProps) {
  const currentCity = cities.find(c => c.id === selectedCity) || cities[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 gap-1 px-2 bg-secondary/80 hover:bg-secondary rounded-lg text-foreground"
        >
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium">{currentCity.name}</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {cities.map((city) => (
          <DropdownMenuItem
            key={city.id}
            disabled={city.disabled}
            onClick={() => onCityChange?.(city.id)}
            className="cursor-pointer"
          >
            {city.name}
            {city.disabled && (
              <span className="ml-auto text-xs text-muted-foreground">Sắp ra mắt</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
