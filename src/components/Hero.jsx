import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
    },
};

const Hero = () => {
    return (
        <div id='hero' className="hero min-h-screen">
            <div className="hero-content md:w-[1280px] mx-auto flex-col-reverse md:flex-col lg:flex-row-reverse justify-between">
                <motion.div className='w-full lg:w-1/2 flex justify-center'
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}

                >
                    <div className="bg-white rounded-full w-80 h-80 lg:w-[450px] lg:h-[450px] overflow-hidden shadow-2xl">
                        <img
                            src="https://i.ibb.co.com/MXvfGN2/pp2-removebg-preview.png"
                            alt="hero image"
                            className="w-full h-full object-cover scale-105"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                    className='md:w-2xl'
                >
                    <motion.h1
                        variants={containerVariant}
                        className="md:text-5xl text-2xl font-bold"
                    >
                        {"Maisa Monoara Moule".split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariant} style={{ display: 'inline-block' }}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p variants={letterVariant} className="py-6 md:w-[600px] w-full">
                        A Digital Marketing Expert is a professional who helps businesses grow their online presence, attract the right audience, and convert them into loyal customers. They specialize in areas such as SEO (Search Engine Optimization), social media marketing, content strategy, paid advertising (Google Ads, Facebook Ads), and email marketing.
                    </motion.p>
                    <motion.div variants={letterVariant} className='flex items-center gap-4 mt-4'>
                        <motion.a
                            href="https://drive.google.com/file/d/1xZyOXgIeT-1lbEC6pL3zkuVpXlZZeD2U/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="Maisa_Moule_Resume.pdf"
                            className="btn btn-primary shadow-lg text-base"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaDownload className="mr-2" />
                            Resume
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/your-profile"
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-outline btn-circle"
                            whileHover={{ scale: 1.1, y: -2, backgroundColor: '#0077b5', color: 'white', borderColor: '#0077b5' }}
                            whileTap={{ scale: 0.9 }}
                        ><FaLinkedin className="text-2xl" /></motion.a>
                        <motion.a
                            href="https://github.com/your-username"
                            target="_blank" rel="noopener noreferrer"
                            className="btn btn-outline btn-circle"
                            whileHover={{ scale: 1.1, y: -2, backgroundColor: '#333', color: 'white', borderColor: '#333' }}
                            whileTap={{ scale: 0.9 }}
                        ><FaGithub className="text-2xl" /></motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

Hero.propTypes = {}

export default Hero