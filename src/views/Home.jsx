import React from 'react'
import NavBar from '../components/Header/NavBar'
import Banner from '../components/Banner/Banner'
import WhoWeareComponent from '../components/whoweare/WhoWeareComponent'
import OurServicesComponent from '../components/Services/OurServicesComponent'
import BrandsLogo from '../components/Brandslogo/BrandsLogo'
import CtaComponent from '../components/CTA/CtaComponent'
import PricingPlanComponent from '../components/PricingPlan/PricingPlanComponent'
import OurJourneyComponent from '../components/OurJourney/OurJourneyComponent.jsX'
import Footer from '../components/footer/Footer'
import TestimonialComponent from '../components/Testimonial/TestimonialComponent'

const Home = () => {
  return (
    <>
     <NavBar/>
     <Banner/>
     <WhoWeareComponent/>
     <OurServicesComponent/>
     <BrandsLogo/>
     <OurJourneyComponent/>
     <PricingPlanComponent/>
     <TestimonialComponent/>
     <CtaComponent/>
     <Footer/>
    </>
  )
}

export default Home