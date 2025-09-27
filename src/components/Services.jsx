import React from "react";
import {
    FaBullseye,
    FaChartLine,
    FaUsers,
    FaLightbulb,
    FaEnvelopeOpenText,
    FaAd
} from "react-icons/fa";

const services = [
    {
        icon: <FaBullseye className="text-4xl text-blue-600 mb-4" />,
        title: "Digital Marketing Strategy",
        description:
            "Planning and executing comprehensive marketing campaigns aligned with business goals.",
    },
    {
        icon: <FaChartLine className="text-4xl text-blue-600 mb-4" />,
        title: "Data-Driven Insights",
        description:
            "Analyzing metrics and trends to optimize marketing performance and ROI.",
    },
    {
        icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
        title: "Audience Research & Analysis",
        description:
            "Understanding target customers to create personalized and effective campaigns.",
    },
    {
        icon: <FaLightbulb className="text-4xl text-blue-600 mb-4" />,
        title: "Brand Storytelling",
        description:
            "Developing compelling narratives that engage audiences and build brand loyalty.",
    },
    {
        icon: <FaEnvelopeOpenText className="text-4xl text-blue-600 mb-4" />,
        title: "Email Marketing",
        description:
            "Creating email campaigns that boost engagement, nurture leads, and drive conversions.",
    },
    {
        icon: <FaAd className="text-4xl text-blue-600 mb-4" />,
        title: "PPC & Online Advertising",
        description:
            "Managing paid campaigns across platforms to maximize visibility and ROI.",
    },
];

const Services = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* About Section */}
            {/* Services Section */}
            <div>
                <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border md:flex flex-col gap-3 items-center border-gray-200 shadow-md rounded-xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
