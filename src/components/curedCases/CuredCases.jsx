import React from 'react'
import CuredCasesHero from './CuredCasesHero'
import SuccessStories from './SuccessStories'
import Footer from '../common/Footer'
import StoryCta from './StoryCta'
import SEO from '../common/SEO'

const CuredCases = () => {
  return (
  <>
  <SEO 
    title="Real Before & After Results of Homeopathy Treatment | Dr. Guneet"
    description="See real before & after results of homeopathy treatment at our homeopathic clinic. Proven improvements in skin, hair, thyroid, allergies, PCOS, and chronic diseases."
   />
  <CuredCasesHero/>
  <SuccessStories/>
  <StoryCta/>
  <Footer/>
  </>
  )
}

export default CuredCases