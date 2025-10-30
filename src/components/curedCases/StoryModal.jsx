import React from "react";
import { X, Calendar, User, CheckCircle } from "lucide-react";
import { theme } from "../../theme/colors";

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Cross Button - Outside Header for better visibility */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 text-black hover:text-gray-700 transition-all duration-200 shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div 
          className="p-6 rounded-t-2xl text-white relative"
          style={{ backgroundColor: theme.primary }}
        >
          
          <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Treatment: {story.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Age: {story.age}</span>
            </div>
          </div>
        </div>

        {/* Before/After Images */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Before Treatment */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Before Treatment</h3>
              <div className="relative">
                <img
                  src={story.imgBefore}
                  alt="Before treatment"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Before
                </div>
              </div>
            </div>

            {/* After Treatment */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">After Treatment</h3>
              <div className="relative">
                <img
                  src={story.imgAfter}
                  alt="After treatment"
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* Patient Journey */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Patient Journey</h3>
            <p className="text-gray-600 leading-relaxed">{story.patientJourney}</p>
          </div>

          {/* Initial Symptoms */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Initial Symptoms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {story.initialSymptoms?.map((symptom, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After Treatment Results */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">After Treatment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {story.afterTreatment?.map((result, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment Category Badge */}
          <div className="flex justify-center">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: theme.primary }}
            >
              {story.category} Treatment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;