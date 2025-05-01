import { getPokemonList } from "@/lib/fetchPokemon"
import Link from "next/link"

export default async function PokemonPage() {
  const pokemons: { id: number; name: string }[] = await getPokemonList()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Pokédex</h1>
        <p className="text-sm md:text-base text-gray-600">
          Demonstrating <span className="font-semibold">Router Cache</span> with client-side prefetching. Hover over
          links to prefetch, click to experience instant navigation.
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {pokemons.map((p) => (
          <li key={p.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <Link href={`/pokemon/${p.id}`} prefetch className="block p-3 md:p-4 text-center hover:bg-gray-50">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                <span className="text-xl md:text-2xl">{p.id}</span>
              </div>
              <span className="text-sm md:text-base font-medium text-primary hover:underline">{p.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
