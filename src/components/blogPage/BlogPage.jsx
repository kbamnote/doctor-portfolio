import React from 'react'
import SEO from '../common/SEO'
import Navbar from '../common/Navbar'
import BlogHero from './BlogHero'
import Footer from '../common/Footer'

import BlogFilter from './BlogFilter'

const BlogPage = () => {
  return (
    <div>
        <SEO 
            title="Latest News & Articles | Dr. Guneet"
            description="Stay updated with the latest news, articles, and health tips from Dr. Guneet."
        />
        <Navbar/>
        <BlogHero/>
        <BlogFilter/>
        <Footer/>
    </div>
  )
}

export default BlogPage