import React from 'react';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div>
            <div className="relative">
                <Image
                    src="https://img.freepik.com/premium-photo/green-smoke-black-background-with-green-smoke-like-background_520665-30795.jpg"
                    alt="Modern futuristic technology background in green"
                    width={1500}
                    height={1000}
                    layout="responsive"
                    unoptimized={true}
                    className="bg-transparent opacity-50"
                />
                <div
                    className="absolute top-60 transform  -translate-y-1/2  text-white font-bold px-4 sm:px-8 md:px-16 lg:px-32">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Hello....
                    </h1>
                    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        This Is Proshanta Rodrigues
                    </h2>
                    <h3 className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        I am working with PHP, Laravel, and React
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
