import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Cosmic Blog
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/categories/technology" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="/categories/lifestyle" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Lifestyle
            </Link>
            <Link 
              href="/categories/travel" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Travel
            </Link>
          </nav>

          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}