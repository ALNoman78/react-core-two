import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Services from './Services'
import ProjectSection from './Project'
import Achievements from './Certificate'


const Home = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Services></Services>
            <ProjectSection></ProjectSection>
            <Achievements></Achievements>
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home