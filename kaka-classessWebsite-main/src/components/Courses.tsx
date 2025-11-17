import { useState } from 'react';
import { BookOpen, Calculator, Beaker, Languages } from 'lucide-react';
import ClassDetailsModal from './ClassDetailsModal';
import BoardDetailsModal from './BoardDetailsModal';
import { classDetailsData } from '../data/classDetails';
import { boardDetailsData } from '../data/boardDetails';

export default function Courses() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedBoard, setSelectedBoard] = useState<'CBSE' | 'StateBoard' | null>(null);
  const courses = [
    {
      icon: Languages,
      title: 'English',
      description: 'Master grammar, literature, and communication skills',
      color: 'from-primary-600 to-primary-700',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Build strong foundations in mathematical concepts',
      color: 'from-accent-500 to-accent-600',
      image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Beaker,
      title: 'Science',
      description: 'Explore physics, chemistry, and biology with practical approach',
      color: 'from-primary-500 to-primary-600',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: BookOpen,
      title: 'Sanskrit',
      description: 'Learn the ancient language with modern teaching methods',
      color: 'from-primary-700 to-primary-800',
      image: 'https://images.pexels.com/photos/2228586/pexels-photo-2228586.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600">Comprehensive education across all major subjects</p>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
              </div>

              <div className="relative p-6 h-64 flex flex-col justify-between">
                <div>
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                    <course.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-white/90 text-sm">{course.description}</p>
                </div>

                <button className="mt-4 bg-white text-primary-800 px-6 py-2 rounded-full font-semibold hover:bg-primary-50 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 animate-fadeInUp">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Boards We Cover</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer comprehensive coaching for both CBSE and State Board curriculum
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div
                onClick={() => setSelectedBoard('CBSE')}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl">
                  <div className="w-32 h-32 mx-auto mb-4 bg-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-3xl">
                    CBSE
                  </div>
                  <p className="text-gray-700 font-semibold">Click for details</p>
                </div>
              </div>

              <div
                onClick={() => setSelectedBoard('StateBoard')}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl text-center">
                    State<br/>Board
                  </div>
                  <p className="text-gray-700 font-semibold">Click for details</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Standards 5 to 10</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Complete coverage with regular tests, assignments, and personalized attention for each student
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map((std, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedClass(std)}
                  className="bg-white px-6 py-2 rounded-full text-primary-800 font-semibold shadow-md hover:shadow-lg hover:bg-highlight-600 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {std}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedClass && (
        <ClassDetailsModal
          classDetails={classDetailsData[selectedClass as keyof typeof classDetailsData]}
          onClose={() => setSelectedClass(null)}
        />
      )}

      {selectedBoard && (
        <BoardDetailsModal
          boardDetails={boardDetailsData[selectedBoard]}
          onClose={() => setSelectedBoard(null)}
        />
      )}
    </section>
  );
}
