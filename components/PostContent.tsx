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
  const formatContent = (content: string): string => {
    return content
      // Headers
      .replace(/### (.*?)$/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/## (.*?)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>')
      .replace(/# (.*?)$/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Code blocks
      .replace(/