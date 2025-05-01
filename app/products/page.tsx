import { getProducts } from "@/lib/fetchProduct"
import Link from "next/link"

export default async function ProductsPage() {
  // First call to getProducts() - this will make an actual API call
  const products = await getProducts()

  // Second call to getProducts() - this will use the memoized result (no additional API call)
  const reFetchedProducts = await getProducts()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Products</h1>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Demonstrating <span className="font-semibold">Request Memoization</span> - multiple calls to the same fetch
          function only result in one network request.
        </p>

        <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-100 mb-6 text-sm md:text-base">
          <h2 className="font-semibold text-blue-800 mb-2">How Request Memoization Works:</h2>
          <ul className="list-disc pl-5 text-blue-700 space-y-1">
            <li>
              The <code className="bg-blue-100 px-1 rounded">getProducts()</code> function is called twice on this page
            </li>
            <li>Next.js automatically memoizes the fetch request during server rendering</li>
            <li>Only one actual HTTP request is made to the API</li>
            <li>Check your browser's Network tab to verify!</li>
          </ul>
          <div className="mt-3 p-2 bg-blue-100 rounded">
            <p className="text-xs md:text-sm text-blue-800">
              <span className="font-semibold">Memoization Evidence:</span> Showing {reFetchedProducts.length} products
              from second call (same as first call)
            </p>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((product: any) => (
          <li
            key={product.id}
            className="bg-white p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg md:text-xl font-semibold text-primary mb-2">{product.name}</h2>
            <p className="text-sm md:text-base text-gray-600">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-accent font-bold">${product.price}</span>
              <Link
                href={`/products/${product.id}`}
                className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/90 text-sm"
              >
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
