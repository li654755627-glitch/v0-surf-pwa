'use client'

import Image from 'next/image'

export function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Lướt"
      width={80}
      height={32}
      className="h-8 w-auto object-contain"
      priority
    />
  )
}
