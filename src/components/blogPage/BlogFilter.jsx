import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, User, ArrowRight } from "lucide-react";
import { theme } from "../../theme/colors";

gsap.registerPlugin(ScrollTrigger);

const BlogFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterRef = useRef(null);
  const postsRef = useRef(null);
  const sidebarRef = useRef(null);

  const categories = ["All", "Wellness", "Treatment", "Nutrition", "Mental Health", "Prevention"];

  const posts = [
    {
      id: 1,
      title: "Understanding Homeopathic Remedies: How They Work",
      category: "Treatment",
      author: "Dr. Arpita Mehta",
      date: "October 18, 2025",
      img: "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      excerpt: "Discover the science behind homeopathy and how minute doses can trigger profound healing responses.",
    },
    {
      id: 2,
      title: "Natural Ways to Boost Your Immune System",
      category: "Prevention",
      author: "Dr. Rajesh Kumar",
      date: "October 10, 2025",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      excerpt: "Learn effective homeopathic approaches to strengthen your immunity and protect against seasonal illnesses.",
    },
    {
      id: 3,
      title: "Managing Chronic Pain with Homeopathy",
      category: "Treatment",
      author: "Dr. Sarah Williams",
      date: "October 5, 2025",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80",
      excerpt: "Explore gentle yet effective homeopathic solutions for chronic pain without dependency or side effects.",
    },
    {
      id: 4,
      title: "The Mind–Body Connection in Homeopathic Healing",
      category: "Mental Health",
      author: "Dr. Arpita Mehta",
      date: "September 29, 2025",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
      excerpt: "Understanding how homeopathy treats the whole person, addressing mental and emotional health together.",
    },
    {
      id: 5,
      title: "Nutrition and Homeopathy: A Synergistic Approach",
      category: "Nutrition",
      author: "Dr. Neha Kapoor",
      date: "September 18, 2025",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
      excerpt: "How dietary choices complement homeopathic treatments to create lasting wellness.",
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  useEffect(() => {
    const filter = filterRef.current;
    const posts = postsRef.current;
    const sidebar = sidebarRef.current;

    if (!filter || !posts || !sidebar) return;

    // Filter buttons animation
    const filterButtons = filter.querySelectorAll('button');
    gsap.fromTo(filterButtons, 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: filter,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Blog posts animation
    const postCards = posts.querySelectorAll('.blog-post-card');
    gsap.fromTo(postCards, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: posts,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Sidebar animation
    const sidebarItems = sidebar.querySelectorAll('.sidebar-item');
    gsap.fromTo(sidebarItems, 
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sidebar,
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

  // Re-animate posts when category changes
  useEffect(() => {
    const posts = postsRef.current;
    if (!posts) return;

    const postCards = posts.querySelectorAll('.blog-post-card');
    gsap.fromTo(postCards, 
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );
  }, [selectedCategory]);

  return (
    <div className="bg-gray-50 py-8 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Category Filter */}
      <div ref={filterRef} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition ${
              selectedCategory === cat
                ? "text-white"
                : "bg-white text-gray-700 border-gray-200"
            }`}
            style={selectedCategory === cat 
              ? { backgroundColor: theme.primary[500] }
              : { ':hover': { backgroundColor: theme.primary[50] } }
            }
            onMouseEnter={(e) => {
              if (selectedCategory !== cat) {
                e.target.style.backgroundColor = theme.primary[50];
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== cat) {
                e.target.style.backgroundColor = 'white';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Blog Posts Section */}
        <div ref={postsRef} className="lg:col-span-2 space-y-4 sm:space-y-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="blog-post-card bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow duration-300"
              style={{ willChange: 'transform' }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full sm:w-1/3 h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <span 
                    className="inline-block text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-2"
                    style={{ backgroundColor: theme.primary[100], color: theme.primary[700] }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2 sm:line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-gray-500 text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span className="truncate max-w-[120px]">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span className="hidden sm:inline">{post.date}</span>
                      <span className="sm:hidden">{post.date.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="flex items-center font-medium transition-colors self-start sm:self-auto"
                    style={{ color: theme.primary[600] }}
                    onMouseEnter={(e) => e.target.style.color = theme.primary[700]}
                    onMouseLeave={(e) => e.target.style.color = theme.primary[600]}
                  >
                    <span className="hidden sm:inline">Read more</span>
                    <span className="sm:hidden">Read</span>
                    <ArrowRight size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside ref={sidebarRef} className="space-y-4 sm:space-y-6">
          {/* Popular Posts */}
          <div className="sidebar-item bg-white shadow-md rounded-xl p-4 sm:p-5" style={{ willChange: 'transform' }}>
            <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Popular Posts</h4>
            {posts.slice(0, 3).map((p) => (
              <div key={p.id} className="flex items-center gap-3 mb-3 last:mb-0">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2">{p.title}</p>
                  <span className="text-xs text-gray-500">
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="sidebar-item bg-[#35AB9A] text-white rounded-xl p-4 sm:p-5" style={{ willChange: 'transform' }}>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(1).map((c) => (
                <li
                  key={c}
                  className="flex justify-between items-center bg-white/10 rounded-md px-3 py-2 text-xs sm:text-sm"
                >
                  <span>{c}</span>
                  <span>+</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="sidebar-item bg-white shadow-md rounded-xl p-4 sm:p-5" style={{ willChange: 'transform' }}>
            <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Stay Updated</h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Subscribe to our newsletter for the latest health insights and wellness tips.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-md px-3 py-2 mb-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="w-full bg-[#35AB9A] text-white py-2 rounded-md hover:bg-green-600 transition text-xs sm:text-sm">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogFilter;
