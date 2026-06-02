'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images: string[]
  businessName: string
}

export function ImageGallery({ images, businessName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-muted flex items-center justify-center">
        <span className="text-muted-foreground">Không có hình ảnh</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`${businessName} - Ảnh ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 390px) 100vw, 390px"
          priority
        />
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/60 text-background backdrop-blur-sm transition-colors hover:bg-foreground/80"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/60 text-background backdrop-blur-sm transition-colors hover:bg-foreground/80"
            aria-label="Ảnh sau"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                currentIndex === index
                  ? 'w-4 bg-background'
                  : 'w-1.5 bg-background/60'
              )}
              aria-label={`Xem ảnh ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute bottom-3 right-3 rounded-full bg-foreground/60 px-2 py-0.5 text-xs text-background backdrop-blur-sm">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  )
}
