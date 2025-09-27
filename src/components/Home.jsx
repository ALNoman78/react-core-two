import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Services from './Services'
import ProjectSection from './Project'
import Achievements from './Certificate'
import ContactForm from './Contact'
import Skills from './Skills'


const Home = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Skills></Skills>
            <Services></Services>
            <ProjectSection></ProjectSection>
            <Achievements></Achievements>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home