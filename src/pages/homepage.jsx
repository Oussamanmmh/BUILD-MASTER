import React, { useState, useEffect } from 'react';
import asana from '../assets/svg/asana.svg';
import buzzfeed from '../assets/svg/buzzfeed.svg';
import chase from '../assets/svg/chase.svg';
import walmart from '../assets/svg/walmart.svg';
import background from '../assets/svg/background.svg';
import { motion } from 'framer-motion';
import Galery from '../components/galery/galery';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
            window.scrollTo(0, 0);
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Notice</h2>
                        <p className="mb-4">The website is not complete. Thank you for your comprehension.</p>
                        <button
                            onClick={closeModal}
                            className="bg-secondary text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <section
                className='px-20 md:space-y-40 z-40 homepage mb-20 md:-mt-10 mt-20'
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain', backgroundRepeat: 'repeat', backgroundAttachment: "scroll" }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-6 py-6"
                >
                    <div className='flex flex-col gap-20 items-center'>
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl md:text-7xl font-semibold mt-20"
                        >
                            <span className='text-primary'>Master</span> of Consistency and <span className="text-primary">Quality</span>.
                        </motion.h1>
                        <Galery />
                        <div className="flex gap-16">
                            <p className="flex flex-col items-center"><span className="text-2xl font-semibold">25,756</span> <span className="text-light font-semibold">Projects Done</span></p>
                            <p className="flex flex-col items-center"><span className="text-2xl font-semibold">1,200</span> <span className="text-light font-semibold">Happy Clients</span></p>
                            <p className="flex flex-col items-center"><span className="text-2xl font-semibold">1,500+</span><span className="text-light font-semibold"> Awards</span></p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration: 0.5 }}
                    className='flex items-center gap-10 md:gap-20 justify-center relative text-primary font-bold font-oswald text-3xl rounded-2xl mt-40 md:mt-10 pb-5'
                >
                    <div className='flex items-center gap-2'>
                        <p className='uppercase'>chase</p>
                        <img src={chase} alt="chase" className='md:size-10 size-6' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='uppercase'>asana</p>
                        <img src={asana} alt="asana" className='md:size-10 size-6' />
                    </div>
                    <div className='items-center gap-2 hidden md:block'>
                        <img src={buzzfeed} alt="buzzfeed" className='md:size-32' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='uppercase'>walmart</p>
                        <img src={walmart} alt="walmart" className='md:size-10 size-6' />
                    </div>
                </motion.div>
            </section>
        </>
    );
}