import React from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div id='hero' className="hero bg-base-200 min-h-screen">
            <div className="hero-content md:w-[1280px] mx-auto flex-col justify-between lg:flex-row-reverse">
                <motion.div
                className='md:w-2xl'
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://i.ibb.co.com/SDgCXwsS/pp2.jpg"
                        className="w-full h-[800px] object-cover rounded-lg shadow-2xl"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='md:w-2xl'
                >
                    <h1 className="text-5xl font-bold">Maisa Monoara Moule</h1>
                    <p className="py-6 md:w-[600px]">
                        A passionate and results-driven Digital Marketing Expert who helps businesses grow their online presence with smart, data-driven strategies. With expertise in SEO, social media management, content marketing, and paid advertising, impactful campaigns are crafted to reach the right audience and deliver measurable results.
                    </p>
                    <div className='md:flex gap-3'>
                        <button className="btn btn-primary">Resume</button>
                        <button className="btn btn-primary"><FaLinkedin></FaLinkedin></button>
                        <button className="btn btn-primary"><FaGithub></FaGithub></button>
                        
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

Hero.propTypes = {}

export default Hero