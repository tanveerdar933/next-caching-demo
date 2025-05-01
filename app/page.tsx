export default function HomePage() {
  return (
    <div className="prose max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
        Welcome to the Next.js v15+ Cache Demo
      </h1>

      <p className="text-base md:text-lg mb-6 md:mb-8">
        Explore how Next.js implements Request Memoization, Data Cache, Full Route Cache, and Router Cache through
        hands-on examples.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
        <FeatureCard title="Products" description="Request Memoization" href="/products" icon="🛍️" />
        <FeatureCard title="Blog" description="Data Cache & Full Route Cache" href="/blog" icon="📝" />
        <FeatureCard title="Pokédex" description="Router Cache" href="/pokemon" icon="🔍" />
      </div>

      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-3 md:mb-4">How to Test the Caching Mechanisms</h2>
        <ul className="list-disc pl-5 space-y-1 md:space-y-2 text-sm md:text-base">
          <li>
            <strong>Products:</strong> Observe how multiple calls to the same fetch function only result in one network
            request.
          </li>
          <li>
            <strong>Blog List:</strong> Refresh within 120 seconds to see cached data, after to see fresh fetch.
          </li>
          <li>
            <strong>Blog Detail:</strong> Pages are statically rendered and served from cache.
          </li>
          <li>
            <strong>Pokémon:</strong> Hover links to prefetch, click to experience instant navigation via Router Cache.
          </li>
        </ul>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  href,
  icon,
}: {
  title: string
  description: string
  href: string
  icon: string
}) {
  return (
    <a
      href={href}
      className="bg-white p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow group no-underline"
    >
      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{icon}</div>
      <h2 className="text-lg md:text-xl font-semibold text-primary group-hover:underline">{title}</h2>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </a>
  )
}
