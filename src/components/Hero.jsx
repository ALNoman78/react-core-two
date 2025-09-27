import React from 'react'
import PropTypes from 'prop-types'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content md:w-[1280px] mx-auto flex-col justify-between lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='md:w-2xl'>
                    <h1 className="text-5xl font-bold">3M</h1>
                    <p className="py-6 md:w-[600px]">
                        A passionate and results-driven Digital Marketing Expert who helps businesses grow their online presence with smart, data-driven strategies. With expertise in SEO, social media management, content marketing, and paid advertising, impactful campaigns are crafted to reach the right audience and deliver measurable results.
                    </p>
                    <div className='md:flex gap-3'>
                        <button className="btn btn-primary">Resume</button>
                        <button className="btn btn-primary"><FaLinkedin></FaLinkedin></button>
                        <button className="btn btn-primary"><FaGithub></FaGithub></button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {}

export default Hero