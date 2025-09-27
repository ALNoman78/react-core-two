import { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectDetails: "",
        message: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        "Digital Marketing Strategy",
        "SEO Optimization",
        "Social Media Management",
        "Email Marketing",
        "Content Marketing",
        "PPC Advertising",
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setIsModalOpen(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            projectDetails: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Side Info */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-semibold text-gray-800">Let’s Work Together</h3>
                    <p className="text-gray-600">
                        Have a project in mind? Whether you need strategy, content, or full digital
                        marketing support, I’m here to help bring your ideas to life. Fill out the form
                        or reach me directly via the details below.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <a href="mailto:maisamoule@gmail.com" className="flex items-center gap-3">
                            <FaEnvelope className="text-blue-600" /> maisamoule@gmail.com
                        </a>
                        <p className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-blue-600" /> Dhaka, Bangladesh
                        </p>
                    </div>
                </motion.div>

                {/* Right Side Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border border-gray-200 shadow-md rounded-xl p-8 space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                        />
                    </div>

                    <div>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                            required
                        >
                            <option value="">Select Consulting Service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <textarea
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            placeholder="Project Details"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full resize-none"
                            rows={4}
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full resize-none"
                            rows={4}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-30 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full"
                            initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0, transition: { duration: 0.5, ease: "easeOut" } }}
                            exit={{ scale: 0.5, opacity: 0, rotateY: -90, transition: { duration: 0.3, ease: "easeIn" } }}
                        >
                            <FaCheckCircle className="text-blue-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                            <p className="text-gray-600 mb-6">We will reach out to you within 24 hours.</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactForm;
