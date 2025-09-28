import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
    {
        title: "BANGLADESH RED CRESCENT SOCIETY",
        description: "Demonstrated proficiency in online advertising and campaign management.",
        image: "https://i.ibb.co.com/TBVnCPHD/73afbd28-78a9-4316-b2a2-f6fa7d82ba41.jpg",
    },
    {
        title: "Web Development Certificate",
        description: "Certified in creating effective content marketing strategies and lead generation tactics.",
        image: "https://i.ibb.co.com/XfQ2Vgj6/52293672-495f-4385-87ba-0ab78b0dc343.jpg",
    },
    // {
    //     title: "Facebook Blueprint Certification",
    //     description: "Expertise in Facebook and Instagram advertising campaigns with measurable results.",
    //     image: "https://via.placeholder.com/400x250.png?text=Facebook+Certificate",
    // },
];

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

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
                        className="card bg-base-100 shadow-xl cursor-pointer"
                        onClick={() => setSelectedCertificate(item)} // Keep the modal functionality
                    >
                        <figure className="h-64 bg-gray-100 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-contain transform rotate-[270deg]"
                            />
                        </figure>

                        <div className="card-body text-black">
                            <h2 className="card-title items-start justify-start text-xl">
                                {item.title}
                                <div className="badge badge-primary">Certificate</div>
                            </h2>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCertificate(null)} // Close on backdrop click
                    >
                        <motion.div
                            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                            exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
                        >
                            <img
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="absolute top-2 right-2 bg-white/50 hover:bg-white rounded-full p-2 text-black"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
