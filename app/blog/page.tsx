import { getBlogPosts } from "@/lib/fetchBlog"
import Link from "next/link"

export default async function BlogPage() {
  const posts: { id: number; title: string; excerpt: string }[] = await getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">Blog</h1>
        <p className="text-sm md:text-base text-gray-600">
          Demonstrating <span className="font-semibold">Data Cache</span> with time-based revalidation (120 seconds).
          Refresh within that window to see cached data served instantly.
        </p>
      </div>

      <ul className="space-y-4 md:space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 md:p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="text-lg md:text-xl font-semibold text-primary hover:underline mb-2">{post.title}</h2>
              <p className="text-sm md:text-base text-gray-600">{post.excerpt}</p>
              <div className="mt-3 md:mt-4 flex justify-end">
                <span className="text-accent text-sm font-medium">Read more →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
