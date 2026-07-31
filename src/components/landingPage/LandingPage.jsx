import React from 'react'
import HeroSection from './HeroSection'
import HealingSection from './HealingSection'
import WhyHomeopathy from './WhyHomeopathy'
import CaseStudies from './CaseStudies'
import HealingJourney from './HealingJourney'
import Testimonials from './Testimonials'
import HealingJourneyCTA from './HealingJourneyCta'
import Footer from '../common/Footer'
import SEO from '../common/SEO'

const LandingPage = () => {
  return (
   <>
   <SEO 
    title="Best Homeopathic Doctor in Delhi for incurable disease | Dr. Guneet"
    description="are you Looking for the best homeopathic doctor in Delhi ? Dr. Guneet uses advance German Homeopathy Method to identify the real root cause of every disease."
   />
   <HeroSection/>
   <HealingSection/>
   <WhyHomeopathy/>
   <CaseStudies/>
   <HealingJourney/>
   <Testimonials/>
   <HealingJourneyCTA/>
   <Footer/>
   </>
  )
}

export default LandingPage