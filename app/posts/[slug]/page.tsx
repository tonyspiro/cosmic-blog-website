// app/posts/[slug]/page.tsx
import { getPost, getPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostContent from '@/components/PostContent'
import AuthorCard from '@/components/AuthorCard'
import CategoryBadge from '@/components/CategoryBadge'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.metadata?.excerpt || `Read ${post.title} on Cosmic Blog`,
    openGraph: {
      title: post.title,
      description: post.metadata?.excerpt || `Read ${post.title} on Cosmic Blog`,
      type: 'article',
      images: post.metadata?.featured_image ? [
        {
          url: post.metadata.featured_image.imgix_url,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metadata?.excerpt || `Read ${post.title} on Cosmic Blog`,
      images: post.metadata?.featured_image ? [post.metadata.featured_image.imgix_url] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const publishedDate = post.metadata?.published_date 
    ? new Date(post.metadata.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Post Header */}
          <header className="mb-8">
            <div className="mb-4">
              {post.metadata?.categories && post.metadata.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.metadata.categories.map((category) => (
                    <CategoryBadge key={category.id} category={category} />
                  ))}
                </div>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            {post.metadata?.excerpt && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {post.metadata.excerpt}
              </p>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
              {publishedDate && (
                <time dateTime={post.metadata?.published_date}>
                  {publishedDate}
                </time>
              )}
            </div>

            {post.metadata?.featured_image && (
              <div className="mb-8">
                <img
                  src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <PostContent post={post} />
          </div>

          {/* Author Card */}
          {post.metadata?.author && (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <AuthorCard author={post.metadata.author} />
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  )
}