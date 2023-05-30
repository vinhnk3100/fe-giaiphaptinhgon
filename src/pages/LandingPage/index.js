import DataAnalysis from "../../components/LandingComponents/DataAnalysis"
import HeroBanner from "../../components/LandingComponents/HeroBanner"
import { DefaultLayout } from "../../layouts/Default.layout"

export const LandingPage = () => {
    return (
        <DefaultLayout>
            <HeroBanner />
            <DataAnalysis />
        </DefaultLayout>
    )
}