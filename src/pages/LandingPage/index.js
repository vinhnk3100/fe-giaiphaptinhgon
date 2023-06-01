import React from "react"
import DataAnalysis from "../../components/LandingComponents/DataAnalysis/index"
import HeroBanner from "../../components/LandingComponents/HeroBanner/index"
import { OurFeaturedAgents } from "../../components/LandingComponents/OurFeaturedAgents"
import OurFeaturesSection from "../../components/LandingComponents/OurFeaturesSection"
import { OurProjects } from "../../components/LandingComponents/OurProjects"
import { ReviewSection } from "../../components/LandingComponents/ReviewSection"
import { ServicesSection } from "../../components/LandingComponents/ServicesSection"
import { DefaultLayout } from "../../layouts/Default.layout"


import AOS from 'aos';
import "aos/dist/aos.css"


export const LandingPage = () => {
    React.useEffect(() => {
        AOS.init({});
      }, []);

    return (
        <DefaultLayout>
            <HeroBanner />
            <DataAnalysis />
            <OurFeaturesSection />
            <ServicesSection />
            <OurProjects />
            <ReviewSection />
            <OurFeaturedAgents />
        </DefaultLayout>
    )
}