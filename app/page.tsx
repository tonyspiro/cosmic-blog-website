import { getPosts, getCategories, getFeaturedPosts } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import CategoryFilter from '@/components/CategoryFilter'
import FeaturedPost from '@/components/FeaturedPost'
import { Post, Category } from '@/types'

export default async function HomePage() {
  const [posts, categories, featuredPosts] = await Promise.all([
    getPosts(),
    getCategories(),
    getFeaturedPosts()
  ])

  const featuredPost = featuredPosts[0]
  const regularPosts = posts.filter(post => !post.metadata?.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section with Featured Post */}
        {featuredPost && (
          <section className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Welcome to <span className="gradient-text">Cosmic Blog</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover insights on technology, lifestyle, and travel from our community of writers
                </p>
              </div>
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CategoryFilter categories={categories} />
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Posts</h2>
              <p className="text-gray-600">Stay updated with our latest articles and insights</p>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}