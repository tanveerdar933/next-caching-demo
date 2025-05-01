export async function getProducts() {
  const res = await fetch("https://api.vercel.app/products", {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error("Failed to fetch products")
  return res.json()
}

export async function getProduct(id: string) {
  const res = await fetch(`https://api.vercel.app/products/${id}`)

  if (!res.ok) throw new Error(`Failed to fetch product ${id}`)
  return res.json()
}
