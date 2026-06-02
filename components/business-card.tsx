'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, MapPin } from 'lucide-react'
import { Business } from '@/lib/types'
import { cn } from '@/lib/utils'

interface BusinessCardProps {
  business: Business
}

export function BusinessCard({ business }: BusinessCardProps) {
  const { isOpen, open, close } = business.openingHours

  return (
    <Link
      href={`/business/${business.id}`}
      className="group block overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-shadow hover:shadow-md active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={business.images[0]}
          alt={business.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 390px) 100vw, 390px"
        />
        {business.priceRange && (
          <div className="absolute bottom-2 left-2 rounded-lg bg-foreground/80 px-2 py-1">
            <span className="text-xs font-medium text-background">{business.priceRange}</span>
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-foreground line-clamp-1 text-base">
          {business.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{business.rating}</span>
          </div>
          <span className="text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">{business.reviewCount} đánh giá</span>
        </div>

        <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{business.district}</span>
        </div>

        <div className="mt-1.5 flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span
            className={cn(
              'text-sm font-medium',
              isOpen ? 'text-primary' : 'text-destructive'
            )}
          >
            {isOpen ? 'Đang mở cửa' : 'Đã đóng cửa'}
          </span>
          <span className="text-sm text-muted-foreground">
            · {open} - {close}
          </span>
        </div>
      </div>
    </Link>
  )
}
