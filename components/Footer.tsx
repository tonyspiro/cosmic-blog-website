export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Cosmic Blog</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A modern blog platform powered by Cosmic CMS, featuring insights on technology, 
              lifestyle, and travel from our community of writers.
            </p>
            <p className="text-sm text-gray-400">
              Built with Next.js 15 and Cosmic CMS
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="/categories/technology" className="text-gray-300 hover:text-white transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="/categories/lifestyle" className="text-gray-300 hover:text-white transition-colors">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="/categories/travel" className="text-gray-300 hover:text-white transition-colors">
                  Travel
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.cosmicjs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cosmic CMS
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cosmicjs.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cosmic Blog. Powered by{' '}
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}