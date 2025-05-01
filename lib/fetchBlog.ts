export async function getBlogPosts() {
  const res = await fetch("https://api.vercel.app/blog", {
    next: { revalidate: 120 }, // revalidate every 120 seconds
  })
  if (!res.ok) throw new Error("Failed to fetch blog list")
  return res.json()
}

export async function getBlogPost(id: string) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    // force-cache = static or ISR (Full Route Cache)
    cache: "force-cache",
  })
  if (!res.ok) throw new Error(`Failed to fetch blog post ${id}`)
  return res.json()
}
