'use client'

import { Waves } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
        <Waves className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-tight">Lướt</span>
        <span className="text-xs text-muted-foreground">Khám phá địa điểm</span>
      </div>
    </div>
  )
}
