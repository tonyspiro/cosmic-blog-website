// components/FeaturedPost.tsx
import Link from 'next/link';
import { Post } from '@/types';
import CategoryBadge from './CategoryBadge';

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const featuredImage = post.metadata.featured_image;
  const author = post.metadata.author;
  const publishedDate = post.metadata.published_date;

  return (
    <article className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Featured Image */}
        {featuredImage && (
          <div className="md:w-1/2">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={post.metadata.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
        )}
        
        {/* Content */}
        <div className={`${featuredImage ? 'md:w-1/2' : 'w-full'} p-8`}>
          <div className="mb-4">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
              ⭐ Featured Post
            </span>
            
            {/* Categories */}
            {post.metadata.categories && post.metadata.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.metadata.categories.map((category) => (
                  <CategoryBadge key={category.id} category={category} />
                ))}
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            <Link
              href={`/posts/${post.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {post.metadata.title}
            </Link>
          </h1>

          {post.metadata.excerpt && (
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {post.metadata.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between">
            {/* Author Info */}
            {author && (
              <div className="flex items-center">
                {author.metadata.avatar && (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={author.metadata.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {author.metadata.name}
                  </p>
                  {publishedDate && (
                    <p className="text-sm text-gray-500">
                      {new Date(publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                </div>
              </div>
            )}

            <Link
              href={`/posts/${post.slug}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Read More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}