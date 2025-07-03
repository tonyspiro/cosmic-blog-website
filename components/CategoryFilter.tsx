// components/CategoryFilter.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  currentCategory?: string;
}

export default function CategoryFilter({ categories, currentCategory }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-gray-600 mr-3">Filter by category:</span>
        
        {/* All Posts Link */}
        <Link
          href="/"
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            !currentCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Posts
        </Link>

        {/* Category Links */}
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              currentCategory === category.slug
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={{
              backgroundColor: currentCategory === category.slug 
                ? category.metadata.color 
                : undefined
            }}
          >
            {category.metadata.name}
          </Link>
        ))}
      </div>
    </div>
  );
}