import React, { useState } from "react";
import { Calendar, User } from "lucide-react";
import { theme } from "../../theme/colors";

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
      "https://images.unsplash.com/photo-1588774069160-635b7b84c2a3?w=800&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46b3?w=800&q=80",
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
      "https://images.unsplash.com/photo-1576765607924-3f7b88a58f09?w=800&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1603398749941-35fc4e84e6e7?w=800&q=80",
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
      "https://images.unsplash.com/photo-1606788075761-04846e1b5e6e?w=800&q=80",
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
      "https://images.unsplash.com/photo-1599351430140-7396a84bdb2b?w=800&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1617339860278-3c0b66c3adab?w=800&q=80",
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
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1556906781-9a412961c28b?w=800&q=80",
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
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800&q=80",
    imgAfter:
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800&q=80",
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

  const filteredStories =
    activeFilter === "All"
      ? stories
      : stories.filter((story) => story.category === activeFilter);

  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-4 py-2 rounded-full text-sm font-medium transition"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  className="h-48 w-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Before
                </span>
              </div>
              <div className="w-1/2 relative">
                <img
                  src={story.imgAfter}
                  alt="after"
                  className="h-48 w-full object-cover"
                />
                <span 
                  className="absolute top-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ backgroundColor: theme.primary[500] }}
                >
                  After
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <span 
                className="text-xs font-semibold uppercase"
                style={{ color: theme.primary[600] }}
              >
                {story.category}
              </span>
              <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-800">
                {story.title}
              </h3>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {story.duration}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {story.age}
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {story.description}
              </p>

              <button 
                className="text-sm font-medium hover:underline"
                style={{ color: theme.primary[600] }}
              >
                Read full story →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
