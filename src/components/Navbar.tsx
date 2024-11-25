import { Menu, X, Laptop, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TechFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-all duration-300">Services</a>
            <a href="#solutions" className="text-gray-700 hover:text-red-600 transition-all duration-300">Solutions</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-all duration-300">About</a>
            <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300">
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-all duration-300">Services</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-all duration-300">Solutions</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-all duration-300">About</a>
            <a href="#contact" className="block px-3 py-2 text-red-600 font-medium transition-all duration-300">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}