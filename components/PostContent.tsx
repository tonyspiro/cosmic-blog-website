// components/PostContent.tsx
import { Post } from '@/types';
import CategoryBadge from './CategoryBadge';

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }: PostContentProps) {
  const featuredImage = post.metadata.featured_image;
  const publishedDate = post.metadata.published_date;

  // Simple markdown to HTML conversion for basic formatting
  const formatContent = (content: string | undefined): string => {
    if (!content) return '';
    
    return content
      // Headers
      .replace(/### (.*?)$/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/## (.*?)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>')
      .replace(/# (.*?)$/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Code blocks (inline)
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br />');
  };

  const formattedDate = publishedDate ? new Date(publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8">
          <img
            src={`${featuredImage.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        {/* Categories */}
        {post.metadata.categories && post.metadata.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.metadata.categories.map((category) => (
              <CategoryBadge key={category.id} category={category} />
            ))}
          </div>
        )}

        {/* Published Date */}
        {formattedDate && (
          <p className="text-gray-600 text-lg">
            Published on {formattedDate}
          </p>
        )}

        {/* Excerpt */}
        {post.metadata.excerpt && (
          <p className="text-xl text-gray-700 mt-6 leading-relaxed font-light">
            {post.metadata.excerpt}
          </p>
        )}
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div 
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: `<p class="mb-4">${formatContent(post.metadata.content)}</p>` 
          }} 
        />
      </div>
    </article>
  );
}