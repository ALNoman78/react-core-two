const AboutUs = () => {
    return (
        <section id="about" className="bg-base-100 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                {/* Left Side - Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-lg text-gray-500 mb-8">
                        A passionate designer bridging the gap between code and creativity
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        My journey into digital marketing began with a fascination for understanding people. I’ve always been curious about trends and love exploring how brands can connect with audiences in meaningful ways. Over time, I realized that the real impact happens at the intersection of strategy and storytelling.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        What started as curiosity about "how to reach people" quickly turned into a passion for "how to inspire and engage them." I’ve learned that successful marketing isn’t just about visibility—it’s about understanding the audience’s needs, anticipating their behavior, and crafting campaigns that truly resonate.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Today, I bring a unique perspective to every project, combining data-driven insights with creative thinking. I believe the best marketing happens when strategy and creativity work hand in hand, creating solutions that are both impactful and memorable.
                    </p>
                </div>

                {/* Right Side - Cards */}
                <div className="space-y-6">
                    {[
                        {
                            icon: "💡",
                            title: "User-Centered Approach",
                            desc: "Every design decision starts with understanding the user. I combine research, testing, and iteration to create experiences that truly serve people's needs.",
                        },
                        {
                            icon: "💻",
                            title: "Technical Foundation",
                            desc: "My Computer Science background helps me design with implementation in mind, ensuring seamless collaboration between design and development teams.",
                        },
                        {
                            icon: "⚡",
                            title: "Problem Solving",
                            desc: "I thrive on complex challenges, breaking them down into simple, elegant solutions that make users’ lives easier and businesses more successful.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="card bg-base-200 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="card-body flex items-start gap-4">
                                <span className="bg-primary/10 text-primary p-3 rounded-lg text-xl">
                                    {item.icon}
                                </span>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

AboutUs.propTypes = {}

export default AboutUs