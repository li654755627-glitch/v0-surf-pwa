import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-foreground">
        Không tìm thấy trang
      </h2>
      <p className="mt-2 text-muted-foreground max-w-sm">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">
          <Home className="h-4 w-4 mr-2" />
          Về trang chủ
        </Link>
      </Button>
    </div>
  )
}
