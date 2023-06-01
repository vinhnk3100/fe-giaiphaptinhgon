
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}