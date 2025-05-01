export default function ProductDetailLoading() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-6"></div>

        <div className="mb-8">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="h-32 w-full bg-gray-200 rounded animate-pulse mb-6"></div>

        <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  )
}
