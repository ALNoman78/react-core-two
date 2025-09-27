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
                            className="flex gap-8"
                            variants={marqueeVariants}
                            animate="animate"
                        >
                            {[...techLogos, ...techLogos].map((tech, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-full px-6 py-3 space-x-3 shadow-md">
                                    <span className="text-2xl text-blue-300">{tech.icon}</span>
                                    <span className="font-semibold text-gray-200 whitespace-nowrap">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1a2942] to-transparent pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a2942] to-transparent pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;