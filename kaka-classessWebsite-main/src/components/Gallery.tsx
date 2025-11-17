import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/8923128/pexels-photo-8923128.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Interactive Learning Sessions',
      category: 'Classroom'
    },
    {
      url: 'https://images.pexels.com/photos/8363030/pexels-photo-8363030.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Science Experiments',
      category: 'Science Fest'
    },
    {
      url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Mathematics Workshop',
      category: 'Workshop'
    },
    {
      url: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Group Study Sessions',
      category: 'Classroom'
    },
    {
      url: 'https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Vacation Program Activities',
      category: 'Vacation Program'
    },
    {
      url: 'https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Award Ceremony',
      category: 'Events'
    },
    {
      url: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Laboratory Experiments',
      category: 'Science Fest'
    },
    {
      url: 'https://images.pexels.com/photos/8923181/pexels-photo-8923181.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Student Presentations',
      category: 'Classroom'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">Capturing moments of learning, growth, and achievement</p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-accent-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-highlight-600 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg animate-scaleIn"
          />
        </div>
      )}
    </section>
  );
}
