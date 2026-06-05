'use client'

import { Business, Category, categories } from '@/lib/types'
import { BusinessCard } from './business-card'
import { cn } from '@/lib/utils'

interface BusinessFeedProps {
  businesses: Business[]
  selectedCategory?: Category | null
  onCategoryChange?: (category: Category | null) => void
}

export function BusinessFeed({ 
  businesses, 
  selectedCategory, 
  onCategoryChange 
}: BusinessFeedProps) {
  const filteredBusinesses = selectedCategory
    ? businesses.filter((b) => b.category === selectedCategory)
    : businesses

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Khám phá gần đây</h2>
      </div>

      {/* Category filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
        <button
          onClick={() => onCategoryChange?.(null)}
          className={cn(
            'flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
            !selectedCategory
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-muted text-foreground hover:bg-muted/80'
          )}
        >
          Tất cả
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange?.(category.id)}
            className={cn(
              'flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
              selectedCategory === category.id
                ? `${category.color} text-white shadow-sm`
                : 'bg-muted text-foreground hover:bg-muted/80'
            )}
          >
            {category.nameVi}
          </button>
        ))}
      </div>

      {/* Business grid */}
      <div className="space-y-4">
        {filteredBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">Không tìm thấy địa điểm nào</p>
        </div>
      )}
    </div>
  )
}
