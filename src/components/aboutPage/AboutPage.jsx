import React from 'react'
import AboutHero from './AboutHero'
import OurStory from './OurStory'
import CoreValues from './CoreValues'
import CallToAction from './CallToAction'
import Footer from '../common/Footer'
import SEO from '../common/SEO'

const AboutPage = () => {
  return (
   <>
   <SEO 
    title="Holistic Treatment For Chronic Diseases | Dr. Guneet"
    description="A holistic treatment approach for all chronic diseases, where conventional treatment only focus on managing symptoms."
   />
   <AboutHero/>
   <OurStory/>
   <CoreValues/>
   <CallToAction/>
   <Footer/>
   </>
  )
}

export default AboutPage