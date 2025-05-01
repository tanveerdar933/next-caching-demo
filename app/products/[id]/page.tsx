import { getProduct } from "@/lib/fetchProduct"
import Link from "next/link"

interface Props {
  params: { id: string }
}

export default async function ProductDetailPage({ params }: Props) {
  // First call to getProduct - makes an API request
  const product = await getProduct(params.id)

  // Second call to the same product - uses memoized result
  const sameProduct = await getProduct(params.id)

  // This is just to demonstrate that the product is the same object
  const isSameReference = product === sameProduct

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <Link href="/products" className="text-accent hover:underline flex items-center gap-1 text-sm md:text-base">
          <span>←</span> Back to all products
        </Link>
      </div>

      <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm border">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">{product.name}</h1>
        <p className="text-lg md:text-xl text-accent font-bold mb-4 md:mb-6">${product.price}</p>

        <div className="mb-6 md:mb-8">
          <p className="text-sm md:text-base text-gray-600">{product.description}</p>
        </div>

        <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-100 mb-6 text-sm md:text-base">
          <h2 className="font-semibold text-blue-800 mb-2">Request Memoization Demo:</h2>
          <p className="text-blue-700">
            This page calls <code className="bg-blue-100 px-1 rounded">getProduct({params.id})</code> twice, but only
            makes one HTTP request.
          </p>
          <div className="mt-3 p-2 bg-blue-100 rounded">
            <p className="text-xs md:text-sm text-blue-800">
              <span className="font-semibold">Same object reference:</span> {isSameReference ? "Yes ✓" : "No ✗"}
            </p>
          </div>
        </div>

        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 w-full">Add to Cart</button>
      </div>
    </div>
  )
}
