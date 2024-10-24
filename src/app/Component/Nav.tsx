import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="bg-transparent bg-gray-950 ">
                <nav className="bg-transparent shadow-sm">
                    <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
                        <div>
                            <a href="#" className="text-2xl font-bold text-green-300"> <span className=" text-5xl">/&gt;</span> roshanta Rodrigues</a>
                        </div>
                        <div className="nav">
                            <ul className="flex space-x-6 px-12">
                                <li>
                                    <a href="#"
                                       className="link-93 text-green-300 text-lg relative">
                                        Home /&gt;
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="link-93 text-green-300 text-lg relative">
                                        About Me /&gt;
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="link-93 text-green-300 text-lg relative">
                                        Activities /&gt;
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="link-93 text-green-300 text-lg relative">
                                        Contact /&gt;
                                    </a>
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