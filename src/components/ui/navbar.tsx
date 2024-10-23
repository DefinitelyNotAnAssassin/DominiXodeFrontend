import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';





const links = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Events', href: '/events' },
   // { name: 'About Us', href: '/' },
   // { name: 'Testimonies', href: '/' },
    { name: 'Contact Us', href: '/contact' },
];

export default function Navbar(props : {isDark? : boolean, isTransparent? : boolean}) {
    const [isOpen, setIsOpen] = useState(false);
    const isDark = props.isDark;
    const isTransparent = props.isTransparent;

    return (
        <nav
            className={`w-full ${isTransparent ? 'bg-transparent' : 'bg-white'} ${
                isDark ? 'text-white' : 'text-black'
            } absolute top-0 z-50 shadow-md`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="font-semibold text-xl">Domini Xode</h1>
                    </motion.div>
                    <div className="hidden md:flex space-x-4">
                        {links.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={link.href}
                                    className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}