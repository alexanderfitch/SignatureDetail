import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
