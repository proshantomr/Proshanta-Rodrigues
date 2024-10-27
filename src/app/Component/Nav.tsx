"use client"
import React, { useState } from 'react';

const Nav = () => {
    // State to track whether the mobile menu is open
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <div className="bg-transparent bg-gray-950">
                <nav className="bg-transparent shadow-sm border-b border-gray-800">
                    <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8">
                        <div>
                            <a href="#" className=" text-2xl font-bold text-green-300">
                                <span className="text-5xl">/&gt;</span>roshanta Rodrigues
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-6 px-12">
                                <li>
                                    <a href="#" className="link-93 text-green-300 text-lg relative">Home /&gt;</a>
                                </li>
                                <li>
                                    <a href="#" className="link-93 text-green-300 text-lg relative">About Me /&gt;</a>
                                </li>
                                <li>
                                    <a href="#" className="link-93 text-green-300 text-lg relative">Activities /&gt;</a>
                                </li>
                                <li>
                                    <a href="#" className="link-93 text-green-300 text-lg relative">Contact /&gt;</a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:hidden">
                            <button
                                id="menu-button"
                                className="text-green-300 focus:outline-none"
                                onClick={toggleMobileMenu}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col space-y-2 px-4 py-2 bg-gray-800">
                            <li>
                                <a href="#" className="link-93 text-green-300 text-lg relative">Home /&gt;</a>
                            </li>
                            <li>
                                <a href="#" className="link-93 text-green-300 text-lg relative">About Me /&gt;</a>
                            </li>
                            <li>
                                <a href="#" className="link-93 text-green-300 text-lg relative">Activities /&gt;</a>
                            </li>
                            <li>
                                <a href="#" className="link-93 text-green-300 text-lg relative">Contact /&gt;</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
