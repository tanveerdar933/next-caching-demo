import { getPokemon } from "@/lib/fetchPokemon"
import Link from "next/link"
import { RefreshButton } from "./refresh-button"

interface Props {
  params: { id: string }
}

export default async function PokemonDetailPage({ params }: Props) {
  // This is the Pokemon ID from the URL
  const { id } = await params

  const pokemon: { id: number; name: string; type: string[] } = await getPokemon(id)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <Link href="/pokemon" className="text-gray-800 hover:underline flex items-center gap-1 text-sm md:text-base">
          <span>←</span> Back to Pokédex
        </Link>
      </div>

      <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm border">
        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-2xl md:text-4xl">{pokemon.id}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">{pokemon.name}</h1>
        </div>

        <div className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Types</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pokemon?.type?.length ?
              pokemon?.type?.map((value) => (
                <li key={value} className="bg-gray-50 p-3 rounded border text-sm md:text-base">
                  {value}
                </li>
              )) : null}
          </ul>
        </div>

        <RefreshButton />

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t">
          <p className="text-gray-600 text-xs md:text-sm">
            <strong>Cache Info:</strong> This page is navigated to via the{" "}
            <span className="font-semibold">Router Cache</span>. The "Refresh Data" button invalidates the cache and
            forces a fresh fetch.
          </p>
        </div>
      </div>
    </div>
  )
}
