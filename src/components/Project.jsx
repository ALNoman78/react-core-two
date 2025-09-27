const projects = [
    {
        title: "SocialBuzz – Social Media Campaign",
        image: "/socialbuzz.png",
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
        image: "/seoboost.png",
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
        image: "/emailpro.png",
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
        <section className="py-16 bg-gray-50" id="projects">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Featured Campaigns</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    A showcase of key digital marketing projects, demonstrating expertise in social media, SEO, email marketing, and data-driven campaign strategies.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>

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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
