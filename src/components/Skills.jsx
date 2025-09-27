import { motion } from "framer-motion";
import { FaGithub, FaGoogle, FaHubspot, FaMailchimp, FaSlack, FaFigma } from "react-icons/fa";

const techLogos = [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Google Analytics", icon: <FaGoogle /> },
    { name: "HubSpot", icon: <FaHubspot /> },
    { name: "Mailchimp", icon: <FaMailchimp /> },
    { name: "Slack", icon: <FaSlack /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "SEMrush", icon: "SEMrush" },
    { name: "Ahrefs", icon: "Ahrefs" },
    { name: "Google Ads", icon: <FaGoogle /> },
    { name: "Facebook Ads", icon: "f" },
    { name: "Canva", icon: "Canva" },
];

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        },
    },
};

const Skills = () => {
    return (
        <section id="skill" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Marquee for Technologies */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Technologies I Use</h3>
                    <div className="relative w-full overflow-hidden py-4">
                        <motion.div
                            className="flex"
                            variants={marqueeVariants}
                            animate="animate"
                        >
                            {[...techLogos, ...techLogos].map((tech, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-center mx-6 space-x-2">
                                    <span className="text-2xl text-gray-600">{tech.icon}</span>
                                    <span className="font-semibold text-gray-700">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base-200 to-transparent"></div>
                        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base-200 to-transparent"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;