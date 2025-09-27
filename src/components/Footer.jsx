import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navLinks = [
        { href: "#hero", text: "Home" },
        { href: "#about", text: "About" },
        { href: "#services", text: "Services" },
        { href: "#projects", text: "Projects" },
        { href: "#skill", text: "Skills" },
        { href: "#certificates", text: "Certificates" },
        { href: "#contact", text: "Contact" },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="bg-gray-900"
        >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: Brand */}
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Maisa Monoara Moule</h3>
                    <p className="text-gray-400 pr-4">Digital Marketing Expert focused on delivering results-driven strategies.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="hover:text-white transition-colors">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Socials */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        <motion.a
                            href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className="text-2xl text-gray-400 hover:text-white"
                            whileHover={{ y: -3, scale: 1.1 }}
                        >
                            <FaTwitter />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="text-2xl text-gray-400 hover:text-white"
                            whileHover={{ y: -3, scale: 1.1 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="https://github.com" target="_blank" rel="noopener noreferrer"
                            className="text-2xl text-gray-400 hover:text-white"
                            whileHover={{ y: -3, scale: 1.1 }}
                        >
                            <FaGithub />
                        </motion.a>
                    </div>
                </div>

                {/* Column 4: Contact Info */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
                    <div className="space-y-3">
                        <a href="mailto:maisamoule@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                            <FaEnvelope /> maisamoule@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black/20 py-4">
                <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} 3M. All Rights Reserved.</p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer