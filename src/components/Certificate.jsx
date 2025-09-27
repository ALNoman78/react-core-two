import { motion } from "framer-motion"; // optional, for animation

const certificates = [
    {
        title: "Google Ads Certification",
        description: "Demonstrated proficiency in online advertising and campaign management.",
        image: "https://i.ibb.co.com/RpCYQg3B/Chat-GPT-Image-Sep-27-2025-08-42-20-PM.png",
    },
    {
        title: "HubSpot Content Marketing Certification",
        description: "Certified in creating effective content marketing strategies and lead generation tactics.",
        image: "https://i.ibb.co.com/RpCYQg3B/Chat-GPT-Image-Sep-27-2025-08-42-20-PM.png",
    },
    // {
    //     title: "Facebook Blueprint Certification",
    //     description: "Expertise in Facebook and Instagram advertising campaigns with measurable results.",
    //     image: "https://via.placeholder.com/400x250.png?text=Facebook+Certificate",
    // },
];

const Certificates = () => {
    return (
        <section id="certificates" className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-8">
                {certificates.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)" }}
                        className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden cursor-pointer relative"
                    >
                        {/* Badge */}
                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                            Certificate
                        </span>

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover transform transition duration-500 hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
