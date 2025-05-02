import { getBlogPost } from "@/lib/fetchBlog"
import Link from "next/link"

interface Props {
  params: { id: string }
}

export default async function BlogPostPage({ params }: Props) {
  // This is the blog post ID from the URL
  const { id } = await params
  // First call to getBlogPost - makes an API request
  const post: { title: string; content: string; date: string } = await getBlogPost(id)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4">
        <Link href="/blog" className="text-accent hover:underline flex items-center gap-1 text-sm md:text-base">
          <span>←</span> Back to all posts
        </Link>
      </div>

      <article className="bg-white p-4 md:p-8 rounded-lg shadow-sm border">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">{post.title}</h1>
          <time className="block text-gray-500 text-sm md:text-base">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <div className="prose max-w-none text-sm md:text-base" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t">
          <p className="text-gray-600 text-xs md:text-sm">
            <strong>Cache Info:</strong> This page uses <span className="font-semibold">Full Route Cache</span> (static
            rendering). It's rendered once at build time and then served from cache.
          </p>
        </div>
      </article>
    </div>
  )
}
