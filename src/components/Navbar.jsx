import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("#hero");

    const navLinks = [
        { href: "#hero", text: "Home" },
        { href: "#about", text: "About Us" },
        { href: "#services", text: "Services" },
        { href: "#projects", text: "Projects" },
        { href: "#skill", text: "Skill" },
        { href: "#certificates", text: "Certificates" },
    ];

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveLink(navLinks[i].href);
                    break;
                }
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div
            className={`navbar fixed top-0 left-1/2 -translate-x-1/2 md:w-[1360px] w-full z-50 transition-all duration-300 ${
                scrolled ? "top-2 py-2 bg-white/10 backdrop-blur-lg rounded-full shadow-lg" : "py-5 bg-transparent"
            }`}
        >
            <div className="navbar-start justify-between md:justify-normal">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#1a2942] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks.map((link) => (
                            <li key={link.href}><a href={link.href} onClick={(e) => handleScroll(e, link.href)}>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
                <a
                    href="#hero"
                    onClick={(e) => handleScroll(e, '#hero')}
                    className="text-2xl font-bold font-heading"
                >
                    <img className="md:w-[80px] w-[50px] rounded-full" src="https://i.ibb.co.com/pjmr5nM4/Chat-GPT-Image-Sep-27-2025-11-21-04-PM.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks.map((link) => (
                        <li key={link.href} className="relative">
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`relative z-10 px-4 py-2 rounded-md transition-colors text-base ${activeLink === link.href ? "text-white" : "text-gray-300 hover:text-white"}`}
                            >
                                {link.text}
                            </a>
                            {activeLink === link.href && (
                                <motion.div className="absolute inset-0 bg-white/10 rounded-full" layoutId="active-pill" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="btn hide md:flex rounded-full border-none bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/50 transition-shadow"
                >
                    Contact Me
                </a>
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar