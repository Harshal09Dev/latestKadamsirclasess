import { Target, Heart, Users, Trophy } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide quality education that transforms students into confident, knowledgeable individuals ready to excel in their academic journey.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in dedication, integrity, and personalized attention for every student. Education is not just about grades, but holistic development.'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Our experienced teachers are passionate about education and committed to bringing out the best in every student.'
    },
    {
      icon: Trophy,
      title: 'Proven Success',
      description: 'Years of excellent results and satisfied students who have gone on to achieve their dreams in various fields.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building futures through excellence in education - One student at a time
          </p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fadeInUp">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kadam Sir Teaching"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-800 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">26+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp animation-delay-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Kadam Sir's Classes </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Kadam Sir Classes  Classes, we are dedicated to nurturing young minds and helping students from Standard 5 to 10 achieve their academic goals. Our comprehensive approach covers all essential subjects including English, Mathematics, Science, and Sanskrit.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Under the guidance of experienced educators, we create an environment where learning becomes an engaging and enjoyable experience. Our teaching methodology combines traditional values with modern techniques to ensure every student receives personalized attention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond academics, we organize special programs like Science Fest and Vacation Programs to keep students engaged throughout the year, making education a continuous journey of discovery and growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-accent-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
