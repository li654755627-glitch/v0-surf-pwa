import { notFound } from 'next/navigation'
import { getBusinessById, mockBusinesses } from '@/lib/data'
import { BusinessDetailClient } from './business-detail-client'

interface BusinessDetailPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return mockBusinesses.map((business) => ({
    id: business.id,
  }))
}

export async function generateMetadata({ params }: BusinessDetailPageProps) {
  const { id } = await params
  const business = getBusinessById(id)
  
  if (!business) {
    return {
      title: 'Không tìm thấy địa điểm | Lướt',
    }
  }

  return {
    title: `${business.name} | Lướt`,
    description: business.description || `${business.name} - ${business.district}, Hà Nội`,
  }
}

export default async function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const { id } = await params
  const business = getBusinessById(id)

  if (!business) {
    notFound()
  }

  return <BusinessDetailClient business={business} />
}
