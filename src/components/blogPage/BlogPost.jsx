
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import SEO from '../common/SEO';
import { theme } from '../../theme/colors';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Dr. Guneet`} 
        description={post.excerpt}
      />
      <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header Image */}
            <div className="w-full h-64 md:h-96 relative">
                <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 md:p-10 text-white w-full">
                         <span 
                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-white/20 backdrop-blur-sm border border-white/30"
                         >
                            {post.category}
                        </span>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div 
                className="prose prose-lg max-w-none p-6 md:p-10 text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer */}
            <div className="p-6 md:p-10 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
                 <Link 
                    to="/blogs"
                    className="flex items-center gap-2 font-medium transition-colors"
                    style={{ color: theme.primary[600] }}
                 >
                    <ArrowLeft size={18} />
                    Back to Blog
                 </Link>
            </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
