import React, { useEffect } from 'react'
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
import { trackPageViewConversion } from './googleTag'
import SEO from '../common/SEO'

const GoogleLandingPage = () => {
  // Counts arrivals on the landing page, reported alongside form submissions.
  useEffect(() => {
    trackPageViewConversion()
  }, [])

  return (
   <BookingProvider>
   <SEO
    title="Homeopathy Treatment in Delhi | Dr. Guneet Singh Gaba"
    description="Personalized homeopathy treatment in Delhi by Dr. Guneet Singh Gaba. Root-cause treatment for chronic and difficult-to-treat conditions, online and in-person."
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
