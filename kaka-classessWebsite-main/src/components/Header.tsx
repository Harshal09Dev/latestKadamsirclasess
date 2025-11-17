import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br rounded-lg transform group-hover:scale-110 transition-transform duration-300">
              <img src="/logo.png" alt="Logo" className="w-24 h-24" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-800">
              कदम सर क्लासेस
              </h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Courses', 'Programs', 'Gallery', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slideDown">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {['Home', 'Courses', 'Programs', 'Gallery', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-accent-500 font-medium text-left transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
