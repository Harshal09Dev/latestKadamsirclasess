import { X, Clock, Calendar, BookOpen, Users } from 'lucide-react';

interface ClassDetails {
  standard: string;
  subjects: string[];
  timing: string;
  duration: string;
  startDate: string;
  batchSize: string;
  syllabus: {
    [key: string]: string[];
  };
}

interface ClassDetailsModalProps {
  classDetails: ClassDetails;
  onClose: () => void;
}

export default function ClassDetailsModal({ classDetails, onClose }: ClassDetailsModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-primary-800 text-white p-6 rounded-t-2xl z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">{classDetails.standard}</h2>
              <p className="text-primary-100 mt-1">Complete Course Details</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary-50 p-4 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-primary-800 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Class Timing</h3>
              </div>
              <p className="text-gray-700 ml-11">{classDetails.timing}</p>
            </div>

            <div className="bg-accent-50 p-4 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-accent-600 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-700 ml-11">{classDetails.duration}</p>
            </div>

            <div className="bg-primary-100 p-4 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-primary-600 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Start Date</h3>
              </div>
              <p className="text-gray-700 ml-11">{classDetails.startDate}</p>
            </div>

            <div className="bg-primary-50 p-4 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-primary-800 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">Batch Size</h3>
              </div>
              <p className="text-gray-700 ml-11">{classDetails.batchSize}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent-500 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl">Subjects Covered</h3>
            </div>
            <div className="flex flex-wrap gap-2 ml-11">
              {classDetails.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-primary-800 font-semibold shadow-md"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-primary-100 p-6 rounded-xl">
            <h3 className="font-bold text-gray-800 text-xl mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-accent-500 mr-2" />
              Detailed Syllabus
            </h3>
            <div className="space-y-4">
              {Object.entries(classDetails.syllabus).map(([subject, topics], index) => (
                <div key={index} className="border-l-4 border-accent-500 pl-4">
                  <h4 className="font-bold text-primary-700 mb-2">{subject}</h4>
                  <ul className="space-y-1">
                    {topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="text-accent-500 mr-2">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-800 p-6 rounded-xl text-white">
            <h3 className="font-bold text-xl mb-3">Why Choose This Class?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-highlight-600 mr-2">✓</span>
                <span>Expert faculty with years of experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-600 mr-2">✓</span>
                <span>Regular tests and assignments for continuous assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-600 mr-2">✓</span>
                <span>Individual attention to every student</span>
              </li>
              <li className="flex items-start">
                <span className="text-highlight-600 mr-2">✓</span>
                <span>Study material and practice worksheets provided</span>
              </li>
            </ul>
          </div>

          <a
            href="https://wa.me/919823972809"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-highlight-600 text-gray-900 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-highlight-700 transform hover:scale-105 transition-all duration-300 text-center"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}
