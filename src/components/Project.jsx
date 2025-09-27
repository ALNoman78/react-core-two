import { motion } from "framer-motion";

const projects = [
    {
        title: "SocialBuzz – Social Media Campaign",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Managed a multi-platform social media campaign that increased engagement and follower growth using targeted content and analytics-driven strategy.",
        tools: ["Facebook Ads", "Instagram", "Canva", "Buffer"],
        points: [
            "Boosted engagement by 45% in 3 months",
            "Created content calendars for consistent posting",
            "Analyzed performance metrics to optimize campaigns",
            "Collaborated with influencers for wider reach",
        ],
    },
    {
        title: "SEOBoost – Website SEO Optimization",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Optimized website content, metadata, and backlinks to improve organic search rankings, driving more traffic and leads for the client.",
        tools: ["Google Analytics", "Ahrefs", "Yoast SEO", "Screaming Frog"],
        points: [
            "Increased organic traffic by 60%",
            "Improved keyword rankings for 20+ target terms",
            "Conducted technical SEO audits and fixes",
            "Enhanced user experience for better engagement",
        ],
    },
    {
        title: "EmailPro – Email Marketing Campaign",
        image: "https://images.unsplash.com/photo-1557200134-90327ee9f6d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
            "Designed and executed email marketing campaigns that improved customer retention and conversion rates through personalized content and automation.",
        tools: ["Mailchimp", "HubSpot", "Canva", "Zapier"],
        points: [
            "Achieved 35% open rate and 12% CTR",
            "Segmented audience for personalized messaging",
            "Automated welcome and follow-up sequences",
            "Analyzed campaign performance to optimize strategy",
        ],
    },
];

export default function ProjectSection() {
    return (
        <section className="py-16" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-4"
                >
                    Featured Campaigns
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12 max-w-2xl mx-auto text-center">
                    A showcase of key digital marketing projects, demonstrating expertise in social media, SEO, email marketing, and data-driven campaign strategies.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm flex-grow ">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                <ul className="list-disc pl-5 text-gray-700 text-sm text-left space-y-1 mb-4">
                                    {project.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
                                    View Case Study
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
