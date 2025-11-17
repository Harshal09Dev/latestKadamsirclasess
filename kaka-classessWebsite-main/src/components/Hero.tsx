import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-highlight-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-primary-700">
            Transform Your Future
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Quality Education for Standards 5 to 10 - Where Dreams Meet Excellence
          </p>
          <button
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-highlight-600 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:bg-highlight-700 transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {[
            { icon: BookOpen, title: 'Comprehensive Curriculum', desc: 'All subjects covered with expert guidance' },
            { icon: Users, title: 'Experienced Faculty', desc: 'Learn from the best educators' },
            { icon: Award, title: 'Proven Results', desc: 'Track record of student success' },
            { icon: TrendingUp, title: 'Personalized Growth', desc: 'Individual attention for every student' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
