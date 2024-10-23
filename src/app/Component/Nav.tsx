import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="bg-transparent ">
                <nav className="bg-white shadow-md bg-transparent">
                    <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
                        <div>
                            <a href="#" className="text-2xl font-bold text-green-300 ">Proshanta
                                Rodrigues</a>
                        </div>
                        <div>
                            <ul className="flex space-x-6 px-12">
                                <li>
                                    <a href="#"
                                       className="text-green-300 text-lg hover:text-white-500 transition-colors duration-300">Home</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-green-300 text-lg hover:text-white-500 transition-colors duration-300">About
                                        Me</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-green-300 text-lg hover:text-white-500 transition-colors duration-300">Activities</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-green-300 text-lg hover:text-white transition-colors duration-300">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;