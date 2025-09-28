import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "SEO Growth Campaign",
        description:
            "Increased organic traffic by 180% in 6 months using advanced SEO, keyword targeting, and content optimization.",
        details:
            "This project focused on technical SEO fixes, keyword mapping, backlink strategies, and content marketing. Result: higher Google rankings and sustainable growth in organic traffic.",
        image:
            "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
    {
        id: 2,
        title: "Social Media Strategy",
        description:
            "Boosted engagement by 65% with creative ad campaigns across Facebook, Instagram, and LinkedIn.",
        details:
            "Created a consistent content calendar, leveraged video ads, and ran A/B tested campaigns. Increased brand visibility and generated quality leads with targeted ads.",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
    {
        id: 3,
        title: "Email Marketing Automation",
        description:
            "Implemented email funnels that raised conversions by 30% for an e-commerce brand.",
        details:
            "We built segmented campaigns with personalized product recommendations. Open rates hit 45% and click-through rates reached 18%.",
        image:
            "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
    {
        id: 4,
        title: "PPC Advertising Campaign",
        description:
            "Reduced ad spend by 25% while doubling conversions using optimized Google Ads campaigns.",
        details:
            "Restructured campaigns, improved ad copy, and applied audience targeting. ROI significantly improved while lowering CPC.",
        image:
            "https://images.unsplash.com/photo-1559028006-44d5a2b3e3f4?auto=format&fit=crop&w=800&q=80",
        link: "#",
    },
];

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="bg-black text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        View all →
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                            }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2 ">
                                    <span className="flex items-center gap-2">
                                        {project.title} <FaExternalLinkAlt />
                                    </span>
                                </h3>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 relative border border-gray-700"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Image */}
                        <div className="aspect-video mb-4">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold mb-2">
                            {selectedProject.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{selectedProject.details}</p>
                        <a
                            href={selectedProject.link}
                            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
                        >
                            Visit Project
                        </a>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
