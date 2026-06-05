'use client'

import { useState } from 'react'
import { CitySelector } from '@/components/city-selector'
import { SearchBar } from '@/components/search-bar'
import { CategoryCards } from '@/components/category-cards'
import { BusinessFeed } from '@/components/business-feed'
import { mockBusinesses } from '@/lib/data'
import { Category } from '@/lib/types'

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState('hanoi')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const filteredBusinesses = mockBusinesses.filter((business) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        business.name.toLowerCase().includes(query) ||
        business.district.toLowerCase().includes(query) ||
        business.description?.toLowerCase().includes(query)
      )
    }
    return true
  })

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-base font-bold text-foreground">Sống nhanh, Chọn tốt</h1>
          <CitySelector 
            selectedCity={selectedCity} 
            onCityChange={setSelectedCity} 
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 space-y-5 pt-2">
        {/* Search Bar */}
        <section>
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
          />
        </section>

        {/* Category Cards */}
        <section>
          <CategoryCards onCategoryClick={setSelectedCategory} />
        </section>

        {/* Business Feed */}
        <section>
          <BusinessFeed 
            businesses={filteredBusinesses}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>
      </main>
    </div>
  )
}
