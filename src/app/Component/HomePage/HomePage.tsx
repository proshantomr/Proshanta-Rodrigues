import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className="relative">
            <Image
                src="https://img.freepik.com/premium-photo/green-smoke-black-background-with-green-smoke-like-background_520665-30795.jpg"
                alt="Modern futuristic technology background in green"
                width={1500} // set width
                height={1000} // set height for aspect ratio
                layout="responsive" // makes it responsive
                unoptimized={true} // bypass optimization for external images
                className="bg-transparent opacity-50"
            />
            <div className="absolute top-48 left-0 text-white text-5xl font-bold  translate-x-40 ">
                <h1 >
                    Hello....
                </h1>
                <h2 className="mt-2">
                This Is Proshanta Rodrigues
                </h2>
                <h3 className="mt-2">
                    I'm working with PHP, Laravel, and React
                </h3>
            </div>

        </div>
    );
};

export default HomePage;
