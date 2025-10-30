import React, { useState } from "react";
import { Calendar, User } from "lucide-react";
import { theme } from "../../theme/colors";
import StoryModal from "./StoryModal";

const stories = [
  {
    id: 1,
    category: "Skin",
    title: "Chronic Eczema",
    duration: "6 Months",
    age: "32 Years",
    description:
      "Patient suffered from severe eczema for 8 years with constant itching and irritation.",
    imgBefore:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    imgAfter:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228",
    patientJourney: "Chronic eczema affecting daily life for 8 years. After homeopathic treatment, skin condition improved dramatically with reduced inflammation and itching.",
    initialSymptoms: ["Severe itching", "Red inflamed patches", "Dry cracked skin", "Sleep disturbance"],
    afterTreatment: ["Clear smooth skin", "No itching", "Improved sleep quality", "Restored confidence"]
  },
  {
    id: 2,
    category: "Chronic Issues",
    title: "Migraine Relief",
    duration: "8 Months",
    age: "28 Years",
    description:
      "Debilitating migraines 3–4 times per week for years. After treatment, symptoms disappeared.",
    imgBefore:
      "https://images.unsplash.com/photo-1633219664572-473fd988a44f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
    imgAfter:
      "https://media.istockphoto.com/id/1394763799/photo/doctor-with-nurse-examining-patient-lying-on-hospital-bed.jpg?s=2048x2048&w=is&k=20&c=GyvsZSqh6cNjy52iQqS3ICqC6713sEI6HxmylQGza6w=",
    patientJourney: "Debilitating migraines 3-4 times per week for 5 years. After homeopathic treatment, migraines reduced to occasional mild headaches, and quality of life dramatically improved.",
    initialSymptoms: ["Severe headaches", "Nausea", "Light sensitivity", "Work absenteeism"],
    afterTreatment: ["Nausea", "Occasional mild headaches", "Normal work routine", "Improved quality of life"]
  },
  {
    id: 3,
    category: "Chronic Issues",
    title: "Digestive Healing",
    duration: "5 Months",
    age: "45 Years",
    description:
      "Years of IBS symptoms with bloating and irregular bowel movements improved drastically.",
    imgBefore:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    imgAfter:
      "https://media.istockphoto.com/id/1169596698/photo/asian-woman-professional-doctor-with-notepad-smiling-visiting-talking-and-diagnosing-the-old.jpg?s=2048x2048&w=is&k=20&c=m_-CvPHj6Thf4EKM6xrl8A9MN3Zq9uvXD4CiGSs_WHA=",
    patientJourney: "Chronic IBS symptoms for 7 years affecting work and social life. After homeopathic treatment, digestive health normalized with regular bowel movements and no bloating.",
    initialSymptoms: ["Chronic bloating", "Irregular bowel movements", "Abdominal pain", "Food sensitivities"],
    afterTreatment: ["Normal digestion", "Regular bowel movements", "No bloating", "Improved energy levels"]
  },
  {
    id: 4,
    category: "Hair",
    title: "Hair Loss Recovery",
    duration: "10 Months",
    age: "35 Years",
    description:
      "Progressive hair thinning stopped and new hair growth observed after 10 months.",
    imgBefore:
      "https://media.istockphoto.com/id/1394762060/photo/doctor-consoling-disabled-man-on-wheelchair-with-daughter-by-his-side-at-the-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=gAue6TiKWKV3vPKQ9uo-8sfgR1NzruZOV0n6odIqRvA=",
    imgAfter:
      "https://media.istockphoto.com/id/1418999467/photo/doctors-comforting-disabled-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=GCZTGW7y3_zsw1rL9III676QppSAv-9BQwtxuHg522c=",
    patientJourney: "Progressive hair thinning for 3 years causing emotional distress. After homeopathic treatment, hair loss stopped and new growth appeared with improved hair density.",
    initialSymptoms: ["Excessive hair fall", "Thinning crown", "Receding hairline", "Low confidence"],
    afterTreatment: ["Reduced hair fall", "New hair growth", "Thicker hair", "Restored confidence"]
  },
  {
    id: 5,
    category: "Mental Health",
    title: "Anxiety & Panic Attacks",
    duration: "7 Months",
    age: "29 Years",
    description:
      "Severe anxiety with frequent panic attacks affecting daily life improved remarkably.",
    imgBefore:
      "https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    imgAfter:
      "https://plus.unsplash.com/premium_photo-1681995301746-49a915e4d325?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    patientJourney: "Severe anxiety and panic attacks for 4 years affecting work and relationships. After homeopathic treatment, anxiety levels reduced significantly with rare panic episodes.",
    initialSymptoms: ["Daily anxiety", "Panic attacks", "Sleep issues", "Social withdrawal"],
    afterTreatment: ["Calm mindset", "Rare anxiety episodes", "Better sleep", "Social confidence"]
  },
  {
    id: 6,
    category: "Allergies",
    title: "Seasonal Allergies",
    duration: "4 Months",
    age: "40 Years",
    description:
      "Chronic spring allergies resolved with natural remedies, no longer needs medication.",
    imgBefore:
      "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    imgAfter:
      "https://plus.unsplash.com/premium_photo-1681995206380-babb9b6debc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    patientJourney: "Chronic seasonal allergies for 10 years requiring daily medication. After homeopathic treatment, allergy symptoms disappeared and no longer needs any medication.",
    initialSymptoms: ["Sneezing fits", "Watery eyes", "Nasal congestion", "Daily medication"],
    afterTreatment: ["No sneezing", "Clear eyes", "Normal breathing", "Medication-free"]
  },
];

const filters = [
  "All",
  "Skin",
  "Hair",
  "Allergies",
  "Chronic Issues",
  "Mental Health",
];

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const filteredStories =
    activeFilter === "All"
      ? stories
      : stories.filter((story) => story.category === activeFilter);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition"
            style={{
              backgroundColor: activeFilter === filter ? theme.primary[600] : '#e5e7eb',
              color: activeFilter === filter ? 'white' : '#374151'
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== filter) {
                e.target.style.backgroundColor = theme.primary[100];
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter) {
                e.target.style.backgroundColor = '#e5e7eb';
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Before/After Images */}
            <div className="relative flex">
              <div className="w-1/2 relative">
                <img
                  src={story.imgBefore}
                  alt="before"
                  className="h-40 sm:h-48 w-full object-cover"
                />
                <span className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-red-500 text-white text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  Before
                </span>
              </div>
              <div className="w-1/2 relative">
                <img
                  src={story.imgAfter}
                  alt="after"
                  className="h-40 sm:h-48 w-full object-cover"
                />
                <span 
                  className="absolute top-1 sm:top-2 right-1 sm:right-2 text-white text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                  style={{ backgroundColor: theme.primary[500] }}
                >
                  After
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5">
              <span 
                className="text-xs font-semibold uppercase"
                style={{ color: theme.primary[600] }}
              >
                {story.category}
              </span>
              <h3 className="text-base sm:text-lg font-semibold mt-1 mb-2 text-gray-800 line-clamp-2">
                {story.title}
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> 
                  <span>{story.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" /> 
                  <span>{story.age}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 mb-3">
                {story.description}
              </p>

              <button 
                onClick={() => openModal(story)}
                className="text-xs sm:text-sm font-medium hover:underline"
                style={{ color: theme.primary[600] }}
              >
                <span className="hidden sm:inline">Read full story →</span>
                <span className="sm:hidden">Read more →</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Story Modal */}
      <StoryModal 
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default SuccessStories;
