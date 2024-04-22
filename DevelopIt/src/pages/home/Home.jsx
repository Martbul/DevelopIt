import BookACall from '../../components/bookACall/BookACall'
import Footer from '../../components/footer/Footer'
import Heading from '../../components/heading/Heading'
import Navigation from '../../components/navigation/Navigation'
import Partners from '../../components/partners/Partners'
import Services from '../../components/services/Services'
import Whyus from '../../components/whyus/Whyus'
import './Home.css'

export default function Home(){
    return(
        <>
        <Navigation></Navigation>
        <Heading></Heading>
        <Partners></Partners>
        <Whyus></Whyus>
        <Services></Services>
        <BookACall></BookACall>
        <Footer></Footer>
        </>
    )
}