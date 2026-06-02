'use client'

import Link from 'next/link'
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation,
  Share2
} from 'lucide-react'
import { Business, categories } from '@/lib/types'
import { ImageGallery } from '@/components/image-gallery'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BusinessDetailClientProps {
  business: Business
}

export function BusinessDetailClient({ business }: BusinessDetailClientProps) {
  const category = categories.find((c) => c.id === business.category)
  const { isOpen, open, close } = business.openingHours

  const handleOpenMaps = () => {
    const query = encodeURIComponent(business.address)
    const url = business.latitude && business.longitude
      ? `https://www.google.com/maps/search/?api=1&query=${business.latitude},${business.longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${query}`
    window.open(url, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${business.phone.replace(/\s/g, '')}`
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: business.name,
          text: `${business.name} - ${business.district}`,
          url: window.location.href,
        })
      } catch {
        // User cancelled or share failed
      }
    }
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Header with back button */}
      <header className="absolute top-0 left-0 right-0 z-10 safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/60 text-background backdrop-blur-sm transition-colors hover:bg-foreground/80"
            aria-label="Quay lại"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <button
            onClick={handleShare}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/60 text-background backdrop-blur-sm transition-colors hover:bg-foreground/80"
            aria-label="Chia sẻ"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Image Gallery */}
      <ImageGallery images={business.images} businessName={business.name} />

      {/* Business Info */}
      <div className="px-4 pt-4 space-y-4">
        {/* Category Badge */}
        {category && (
          <span className={cn(
            'inline-block rounded-full px-3 py-1 text-xs font-medium text-primary-foreground',
            category.color
          )}>
            {category.nameVi}
          </span>
        )}

        {/* Name and Rating */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">{business.name}</h1>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-semibold text-foreground">{business.rating}</span>
            </div>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{business.reviewCount} đánh giá</span>
            {business.priceRange && (
              <>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{business.priceRange}</span>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        {business.description && (
          <p className="text-muted-foreground leading-relaxed">
            {business.description}
          </p>
        )}

        {/* Info Cards */}
        <div className="space-y-3 pt-2">
          {/* Opening Hours */}
          <div className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border">
            <Clock className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Giờ mở cửa</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={cn(
                    'font-medium',
                    isOpen ? 'text-primary' : 'text-destructive'
                  )}
                >
                  {isOpen ? 'Đang mở cửa' : 'Đã đóng cửa'}
                </span>
                <span className="text-foreground">
                  · {open} - {close}
                </span>
              </div>
            </div>
          </div>

          {/* Address */}
          <button
            onClick={handleOpenMaps}
            className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border w-full text-left hover:bg-secondary/50 transition-colors"
          >
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Địa chỉ</p>
              <p className="font-medium text-foreground mt-0.5">{business.address}</p>
            </div>
            <Navigation className="h-5 w-5 text-primary mt-0.5" />
          </button>

          {/* Phone */}
          <button
            onClick={handleCall}
            className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border w-full text-left hover:bg-secondary/50 transition-colors"
          >
            <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Điện thoại</p>
              <p className="font-medium text-foreground mt-0.5">{business.phone}</p>
            </div>
          </button>
        </div>
      </div>

      {/* Fixed Bottom Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border safe-bottom">
        <div className="mx-auto max-w-[390px] px-4 py-4 flex gap-3">
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={handleCall}
          >
            <Phone className="h-4 w-4 mr-2" />
            Gọi điện
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={handleOpenMaps}
          >
            <Navigation className="h-4 w-4 mr-2" />
            Chỉ đường
          </Button>
        </div>
      </div>
    </div>
  )
}
