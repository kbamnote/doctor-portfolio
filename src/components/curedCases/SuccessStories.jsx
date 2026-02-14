import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, User, ArrowRight } from "lucide-react";
import { theme } from "../../theme/colors";
import StoryModal from "./StoryModal";

// Importing Images
import acneBefore from '../../assets/acne-before.jpg';
import acneAfter from '../../assets/acne-after.jpg';
import pcodBefore from '../../assets/Pcod-before.jpg';
import pcodAfter from '../../assets/Pcod-after.jpg';
import sebBefore from '../../assets/Seborrheic dermatitis before.jpg';
import sebAfter from '../../assets/Seborrheic dermatitis after.jpg';
import diabetesBefore from '../../assets/diabetes-before.jpg';
import diabetesAfter from '../../assets/diabetes-after.jpg';
import herpesBefore from '../../assets/herpes simplex before.jpg';
import herpesAfter from '../../assets/herpes simplex after.jpg';
import woundBefore from '../../assets/non-healing-wound-before.jpg';
import woundAfter from '../../assets/non-healing-wound-after.jpg';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    id: 1,
    category: "Skin",
    title: "Severe Acne Treatment",
    duration: "4 Months",
    age: "24 Years",
    description: "Severe cystic acne treated effectively without harsh chemicals or suppression.",
    imgBefore: acneBefore,
    imgAfter: acneAfter,
    patientJourney: "Patient suffered from painful cystic acne for 3 years, trying various antibiotics and creams with no lasting results. Homeopathy addressed the hormonal imbalance and skin sensitivity.",
    initialSymptoms: ["Painful cysts", "Redness", "Scarring", "Low confidence"],
    afterTreatment: ["Clear skin", "No new breakouts", "Faded scars", "Restored confidence"]
  },
  {
    id: 2,
    category: "Women's Health",
    title: "PCOD & Hormonal Balance",
    duration: "8 Months",
    age: "28 Years",
    description: "Successful management of PCOD symptoms and restoration of natural hormonal balace.",
    imgBefore: pcodBefore,
    imgAfter: pcodAfter,
    patientJourney: "Struggled with irregular cycles, weight gain, and acne due to PCOD. Constitutional homeopathy treatment successfully regulated the menstrual cycle and improved overall metabolism.",
    initialSymptoms: ["Irregular periods", "Weight gain", "Hormonal acne", "Mood swings"],
    afterTreatment: ["Regular cycles", "Weight loss", "Clear skin", "Emotional balance"]
  },
  {
    id: 3,
    category: "Skin",
    title: "Seborrheic Dermatitis",
    duration: "6 Months",
    age: "35 Years",
    description: "Chronic scalp and skin inflammation resolved naturally.",
    imgBefore: sebBefore,
    imgAfter: sebAfter,
    patientJourney: "Patient had severe flaking, itching, and redness on the scalp and face. Homeopathy treated the underlying immune response, clearing the skin completely.",
    initialSymptoms: ["Severe flaking", "Intense itching", "Red patches", "Social anxiety"],
    afterTreatment: ["Clear scalp", "No itching", "Healthy skin", "Improved quality of life"]
  },
  {
    id: 4,
    category: "Chronic Issues",
    title: "Diabetes Management",
    duration: "1 Year",
    age: "52 Years",
    description: "Non-healing diabetic ulcers healed and blood sugar levels stabilized.",
    imgBefore: diabetesBefore,
    imgAfter: diabetesAfter,
    patientJourney: "Patient with uncontrolled diabetes developed non-healing ulcers. Homeopathic treatment aided wound healing and helped stabilize blood sugar levels alongside lifestyle changes.",
    initialSymptoms: ["Non-healing wound", "High blood sugar", "Fatigue", "Risk of infection"],
    afterTreatment: ["Complete wound healing", "Stable sugar levels", "Better energy", "Reduced infection risk"]
  },
  {
    id: 5,
    category: "Skin",
    title: "Herpes Simplex Recovery",
    duration: "3 Months",
    age: "30 Years",
    description: "Recurrent painful outbreaks managed and frequency reduced significantly.",
    imgBefore: herpesBefore,
    imgAfter: herpesAfter,
    patientJourney: "Patient experienced frequent, painful herpes outbreaks. Homeopathy strengthened the immune system, reducing the severity and frequency of recurrence.",
    initialSymptoms: ["Painful blisters", "Burning sensation", "Frequent recurrence", "Stress"],
    afterTreatment: ["Healed skin", "Reduced recurrence", "Pain relief", "Stronger immunity"]
  },
  {
    id: 6,
    category: "Chronic Issues",
    title: "Non-Healing Wound",
    duration: "5 Months",
    age: "45 Years",
    description: "Chronic non-healing wound fully closed and healed.",
    imgBefore: woundBefore,
    imgAfter: woundAfter,
    patientJourney: "A chronic wound that refused to heal for months despite conventional care. Homeopathy stimulated the body's natural healing mechanism to close the wound.",
    initialSymptoms: ["Open wound", "Pain", "Discharge", "Immobility"],
    afterTreatment: ["Fully closed wound", "No pain", "Scar formation", "Full mobility"]
  },
];

const filters = [
  "All",
  "Skin",
  "Women's Health",
  "Chronic Issues",
];

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const filtersRef = useRef(null);
  const gridRef = useRef(null);

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

  useEffect(() => {
    const section = sectionRef.current;
    const filters = filtersRef.current;
    const grid = gridRef.current;

    if (!section || !filters || !grid) return;

    // Filter buttons animation
    const filterButtons = filters.querySelectorAll('button');
    gsap.fromTo(filterButtons, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: filters,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Story cards animation
    const storyCards = grid.querySelectorAll('.story-card');
    gsap.fromTo(storyCards, 
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Re-animate cards when filter changes
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const storyCards = grid.querySelectorAll('.story-card');
    gsap.fromTo(storyCards, 
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );
  }, [activeFilter]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      {/* Explanatory Text */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why We Show Before & After Results</h2>
        <p className="text-gray-600 mb-6">
          Many patients come to us feeling confused, anxious, and unsure because they have tried multiple treatments without lasting relief. 
          Showing real cured cases helps you understand:
        </p>
        <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-700 list-disc pl-5">
           <li>How homeopathy treatment works</li>
           <li>What type of diseases improve naturally</li>
           <li>How long chronic conditions take to show visible improvement</li>
           <li>Our clinic’s expertise in complex cases</li>
        </ul>
        <p className="text-gray-600 mt-6">
          These transformations are proof that accurate homeopathy can lead to meaningful change—inside and out.
        </p>
      </div>

      {/* Filter Buttons */}
      <div ref={filtersRef} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
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
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="story-card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ willChange: 'transform' }}
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
