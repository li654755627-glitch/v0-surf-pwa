'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  value?: string
  onChange?: (value: string) => void
  onFocus?: () => void
}

export function SearchBar({ value, onChange, onFocus }: SearchBarProps) {
  return (
    <div className="relative mx-1">
      <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Tìm kiếm nhà hàng, quán cafe..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={onFocus}
        className="h-11 pl-10 pr-4 bg-card border-border rounded-xl text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-primary shadow-sm"
      />
    </div>
  )
}
