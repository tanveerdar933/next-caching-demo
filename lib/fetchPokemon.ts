export async function getPokemonList() {
  const res = await fetch("https://api.vercel.app/pokemon")
  if (!res.ok) throw new Error("Failed to fetch Pokémon list")
  return res.json()
}

export async function getPokemon(id: string) {
  const res = await fetch(`https://api.vercel.app/pokemon/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch Pokémon ${id}`)
  return res.json()
}
