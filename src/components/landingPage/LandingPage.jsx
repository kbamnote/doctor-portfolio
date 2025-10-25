import React from 'react'
import HeroSection from './HeroSection'
import HealingSection from './HealingSection'
import WhyHomeopathy from './WhyHomeopathy'
import CaseStudies from './CaseStudies'
import HealingJourney from './HealingJourney'
import Testimonials from './Testimonials'
import HealingJourneyCTA from './HealingJourneyCta'
import Footer from '../common/Footer'

const LandingPage = () => {
  return (
   <>
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