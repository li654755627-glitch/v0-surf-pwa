'use client'

import { useState } from 'react'
import { Logo } from '@/components/logo'
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
    <div className="min-h-screen">
      {/* Header + Search Area - Light Gray Background */}
      <div className="bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 safe-top">
          <div className="flex items-center justify-between px-4 py-3">
            <Logo />
            <CitySelector 
              selectedCity={selectedCity} 
              onCityChange={setSelectedCity} 
            />
          </div>
        </header>

        {/* Hero + Search + Categories */}
        <div className="px-4 space-y-5 pb-6">
          {/* Hero Text */}
          <section className="pt-1">
            <h1 className="text-xl font-bold text-foreground">Tìm quán ăn & dịch vụ gần bạn</h1>
          </section>

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
        </div>
      </div>

      {/* Business Feed Area - White Background */}
      <div className="bg-card px-4 pt-5 pb-8">
        <BusinessFeed 
          businesses={filteredBusinesses}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </div>
  )
}
