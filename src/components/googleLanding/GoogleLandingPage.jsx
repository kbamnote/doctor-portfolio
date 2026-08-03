import React from 'react'
import GoogleHero from './GoogleHero'
import TreatmentVideo from './TreatmentVideo'
import PainPoints from './PainPoints'
import CuredCasesSection from './CuredCasesSection'
// import PatientVideos from './PatientVideos'
import MeetDoctor from './MeetDoctor'
import WhyChooseUs from './WhyChooseUs'
import HowItWorks from './HowItWorks'
import GoogleReviews from './GoogleReviews'
import Faq from './Faq'
import FinalCta from './FinalCta'
// import Footer from '../common/Footer'
import FloatingCta from './FloatingCta'
import BookingProvider from './BookingProvider'
import SEO from '../common/SEO'

const GoogleLandingPage = () => {
  return (
   <BookingProvider>
   <SEO
    title="Best Homeopathic Doctor in Delhi for incurable disease | Dr. Guneet"
    description="are you Looking for the best homeopathic doctor in Delhi ? Dr. Guneet uses advance German Homeopathy Method to identify the real root cause of every disease."
   />
   <GoogleHero/>
   <TreatmentVideo/>
   <PainPoints/>
   <CuredCasesSection/>
   {/* <PatientVideos/> */}
   <MeetDoctor/>
   <WhyChooseUs/>
   <HowItWorks/>
   <GoogleReviews/>
   <Faq/>
   <FinalCta/>
   {/* <Footer/> */}
   <FloatingCta/>
   </BookingProvider>
  )
}

export default GoogleLandingPage
