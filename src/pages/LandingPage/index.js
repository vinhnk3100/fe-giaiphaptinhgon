import DataAnalysis from "../../components/LandingComponents/DataAnalysis/index"
import HeroBanner from "../../components/LandingComponents/HeroBanner/index"
import OurFeaturesSection from "../../components/LandingComponents/OurFeaturesSection"
import { DefaultLayout } from "../../layouts/Default.layout"

export const LandingPage = () => {
    return (
        <DefaultLayout>
            <HeroBanner />
            <DataAnalysis />
            <OurFeaturesSection />
        </DefaultLayout>
    )
}