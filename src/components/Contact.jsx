import { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setIsModalOpen(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0b1120] text-white rounded-2xl shadow-2xl p-8">
                {/* Left Side Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold">Contact Information</h2>

                    <div className="space-y-4">
                        <div className="bg-[#141c2c] rounded-xl px-4 py-3 flex items-center gap-3">
                            <FaEnvelope className="text-cyan-400 text-xl" />
                            <span>maisamoule@gmail.com</span>
                        </div>
                        {/* <div className="bg-[#141c2c] rounded-xl px-4 py-3 flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
              <span>+8801318969328</span>
            </div> */}
                        <div className="bg-[#141c2c] rounded-xl px-4 py-3 flex items-center gap-3">
                            <FaWhatsapp className="text-cyan-400 text-xl" />
                            <span>Chat with me</span>
                        </div>
                        <div className="bg-[#141c2c] rounded-xl px-4 py-3 flex items-center gap-3">
                            <FaLinkedin className="text-cyan-400 text-xl" />
                            <span>Connect professionally</span>
                        </div>
                        <div className="bg-[#141c2c] rounded-xl px-4 py-3 flex items-center gap-3">
                            <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                            <span> Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold">Send Me a Message</h2>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-[#141c2c] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full bg-[#141c2c] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        required
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        rows={5}
                        className="w-full bg-[#141c2c] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
                    >
                        <span>📨</span> Send Message
                    </button>
                </motion.form>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#0b1120] p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full text-white"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.4, ease: "easeOut" },
                            }}
                            exit={{
                                scale: 0.5,
                                opacity: 0,
                                transition: { duration: 0.3, ease: "easeIn" },
                            }}
                        >
                            <FaCheckCircle className="text-cyan-400 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                            <p className="text-gray-300 mb-6">
                                We will reach out to you within 24 hours.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-cyan-500 text-white font-semibold px-8 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
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
