'use client'

import Link from 'next/link'
import { Utensils, Coffee, Zap, Wrench } from 'lucide-react'
import { Category, categories } from '@/lib/types'
import { cn } from '@/lib/utils'

const iconMap = {
  utensils: Utensils,
  coffee: Coffee,
  zap: Zap,
  wrench: Wrench,
}

interface CategoryCardsProps {
  onCategoryClick?: (category: Category) => void
}

export function CategoryCards({ onCategoryClick }: CategoryCardsProps) {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-sm">
      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap]
          return (
            <Link
              key={category.id}
              href={`/?category=${category.id}`}
              onClick={(e) => {
                if (onCategoryClick) {
                  e.preventDefault()
                  onCategoryClick(category.id)
                }
              }}
              className="group flex items-center justify-center"
            >
              <div
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-active:scale-95',
                  category.color
                )}
              >
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
