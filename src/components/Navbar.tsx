import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'How It Works', to: '/how-it-works' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'Blog', to: '/blog' },
  ];

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm fixed w-full z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={isDark 
                  ? "https://www.pixelbyhand.com/wp-content/uploads/2025/02/pixel-by-hand-logo-white-100px.png"
                  : "https://www.pixelbyhand.com/wp-content/uploads/2024/09/Pixelbyhand-logo-design.png"
                }
                alt="Pixel By Hand" 
                className="h-6 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-black dark:text-white hover:text-[#bb4430] dark:hover:text-[#bb4430] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 ml-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-white hover:text-[#bb4430]" />
              ) : (
                <Moon className="h-5 w-5 text-black hover:text-[#bb4430]" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-white hover:text-[#bb4430]" />
              ) : (
                <Moon className="h-5 w-5 text-black hover:text-[#bb4430]" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-[#bb4430] dark:hover:text-[#bb4430] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-black dark:text-white hover:text-[#bb4430] dark:hover:text-[#bb4430] block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;