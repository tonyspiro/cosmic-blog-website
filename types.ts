// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
  bucket?: string;
  status?: string;
  thumbnail?: string;
  published_at?: string;
}

// Post interface with proper metadata structure
export interface Post extends CosmicObject {
  type_slug: 'posts';
  metadata: {
    title?: string;
    content?: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: Author;
    categories?: Category[];
    published_date?: string;
    featured?: boolean;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type_slug: 'categories';
  metadata: {
    name?: string;
    description?: string;
    color?: string;
  };
}

// Author interface
export interface Author extends CosmicObject {
  type_slug: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    twitter?: string;
    website?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime validation
export function isPost(obj: CosmicObject): obj is Post {
  return obj.type_slug === 'posts';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type_slug === 'categories';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type_slug === 'authors';
}

// Utility types
export type PostStatus = 'published' | 'draft' | 'archived';
export type CategoryColor = '#3b82f6' | '#f59e0b' | '#10b981';