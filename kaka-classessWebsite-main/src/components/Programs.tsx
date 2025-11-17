import { Sparkles, Sun, Trophy } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Beaker,
      title: 'Science Fest',
      description: 'An exciting program where students dive deep into scientific experiments and practical applications',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-primary-700 to-primary-800'
    },
    {
      icon: Sun,
      title: 'Vacation Programs',
      description: 'Special courses during school breaks to keep learning fun and engaging throughout the year',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-accent-500 to-accent-700'
    },
    {
      icon: Trophy,
      title: 'Competition Prep',
      description: 'Specialized training for Olympiads and competitive exams to help students excel',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-primary-600 to-primary-700'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-primary-50 via-accent-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-12 h-12 text-accent-500 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
            Special Programs
          </h2>
          <p className="text-xl text-gray-600">Beyond regular classes - enrichment programs that make learning exciting</p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>

                <button className="mt-6 w-full bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:bg-accent-600 transform hover:scale-105 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp">
          <div className="bg-primary-800 rounded-2xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Next Program!</h3>
            <p className="text-xl mb-6 text-white/90">
              Experience learning like never before with our engaging special programs
            </p>
            <a
              href="https://wa.me/919823972809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-highlight-600 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-highlight-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beaker({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}
