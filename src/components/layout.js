import TopHeader from './topHeader'
import Footer from './footer'

export default function Layout({ children }) {
    return(
    <>
    <TopHeader />
    {children}
    <Footer/>
    </>
    )
}