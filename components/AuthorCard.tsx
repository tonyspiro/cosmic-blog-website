// components/AuthorCard.tsx
import { Author } from '@/types';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const avatar = author.metadata.avatar;

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
      
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        {avatar && (
          <img
            src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={author.metadata.name}
            className="w-16 h-16 rounded-full flex-shrink-0"
          />
        )}
        
        <div className="flex-1">
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            {author.metadata.name}
          </h4>
          
          {author.metadata.bio && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {author.metadata.bio}
            </p>
          )}
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {author.metadata.website && (
              <a
                href={author.metadata.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                🌐 Website
              </a>
            )}
            
            {author.metadata.twitter && (
              <a
                href={`https://twitter.com/${author.metadata.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                🐦 Twitter
              </a>
            )}
            
            {author.metadata.email && (
              <a
                href={`mailto:${author.metadata.email}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                ✉️ Email
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}