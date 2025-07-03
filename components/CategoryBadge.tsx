import Link from 'next/link'
import { Category } from '@/types'

interface CategoryBadgeProps {
  category: Category
  size?: 'sm' | 'md'
  clickable?: boolean
}

export default function CategoryBadge({ 
  category, 
  size = 'md', 
  clickable = true 
}: CategoryBadgeProps) {
  const getCategoryClass = (slug: string) => {
    switch (slug) {
      case 'technology':
        return 'category-technology'
      case 'lifestyle':
        return 'category-lifestyle'
      case 'travel':
        return 'category-travel'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const sizeClass = size === 'sm' 
    ? 'px-2 py-1 text-xs' 
    : 'px-3 py-1 text-sm'

  const badgeClass = `
    inline-flex items-center rounded-full border font-medium
    ${getCategoryClass(category.slug)}
    ${sizeClass}
    ${clickable ? 'hover:opacity-80 transition-opacity' : ''}
  `.trim()

  const badge = (
    <span className={badgeClass}>
      {category.title}
    </span>
  )

  if (clickable) {
    return (
      <Link href={`/categories/${category.slug}`}>
        {badge}
      </Link>
    )
  }

  return badge
}