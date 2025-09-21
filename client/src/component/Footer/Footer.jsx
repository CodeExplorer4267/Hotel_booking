import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-50 text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + About */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white font-bold">
              Q
            </div>
            <span className="text-xl font-semibold">QuickStay</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Discover the world’s most extraordinary places to stay — 
            from boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Support
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm">
            Subscribe to our newsletter for travel inspiration and special offers.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 bg-black text-white rounded-r-lg">
              →
            </button>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6">
        <p>© 2025 QuickStay. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
