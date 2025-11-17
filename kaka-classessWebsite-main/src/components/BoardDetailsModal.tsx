import { X, BookOpen, GraduationCap } from 'lucide-react';

interface BoardDetails {
  name: string;
  standards: string[];
  subjects: string[];
  features: string[];
}

interface BoardDetailsModalProps {
  boardDetails: BoardDetails;
  onClose: () => void;
}

export default function BoardDetailsModal({ boardDetails, onClose }: BoardDetailsModalProps) {
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
              <h2 className="text-3xl font-bold">{boardDetails.name}</h2>
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
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-800 p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl">Standards Covered</h3>
            </div>
            <div className="flex flex-wrap gap-2 ml-11">
              {boardDetails.standards.map((std, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-primary-800 font-semibold shadow-md"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent-500 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl">Subjects Offered</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 ml-11">
              {boardDetails.subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-md border-l-4 border-accent-500"
                >
                  <p className="text-gray-800 font-semibold">{subject}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-800 p-6 rounded-xl text-white">
            <h3 className="font-bold text-xl mb-3">Course Features</h3>
            <ul className="space-y-2">
              {boardDetails.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-highlight-600 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
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
