import React, { useState, useMemo, useCallback } from 'react';
import CardPerson from "./card";

import { motion } from 'framer-motion';

export default function OurEngineers() {
    const engineers = useMemo(() =>  [
        {
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'jhon@gmail.com',
            job: 'Software Engineer',
            img: "https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936926/build-master/p6_e3flsd.png",
        },
        {
            name: 'William Smith',
            phone: '123-456-7890',
            job: 'Frontend Developer',
            email: 'smith@gmail.com',
            img: "https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936917/build-master/p5_jxxpju.png"
        },
        {
            name: 'Jane Doe',
            phone: '987-654-3210',
            email: 'jane@gmail.com',
            job: 'Backend Developer',
            img: "https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936910/build-master/p4_xljmos.png",
        },
        {
            name: 'Emily Johnson',
            phone: '555-123-4567',
            email: 'emily@gmail.com',
            job: 'Fullstack Developer',
            img:"https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936902/build-master/p3_p0u3e7.png",
        },
        {
            name: 'Michael Brown',
            phone: '555-987-6543',
            email: 'michael@gmail.com',
            job: 'Software Engineer',
            img: "https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936879/build-master/p2_jghhxo.png",
        },
        {
            name: 'Robert Wilson',
            phone: '555-123-4567',
            email: 'wilson@gmail.com',
            job: 'Frontend Developer',
            img: "https://res.cloudinary.com/dlzc4m2xu/image/upload/v1726936864/build-master/p1_n575mc.png",
        }
    ] , []);
    const [currentPage, setCurrentPage] = useState(0);
    const engineersPerPage = 3;

    const handleNextPage = useCallback(() => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(engineers.length / engineersPerPage) - 1));
    }, [engineers.length, engineersPerPage]);

    const handlePrevPage = useCallback(() => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    }, []);

    const currentEngineers = useMemo(() => {
        return engineers.slice(
            currentPage * engineersPerPage,
            (currentPage + 1) * engineersPerPage
        );
    }, [currentPage, engineers, engineersPerPage]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
                margin: "-200px"
            }}
            transition={{ duration: 0.5 }}
            className="px-10"
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    margin: "-200px"
                }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-2 mt-20"
            >
                <h1 className="text-5xl font-semibold font-oswald">Our Best Engineer</h1>
                <p className="text-light">Meet our team of highly skilled engineers, dedicated to delivering the best solutions for your needs.</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                {currentEngineers.map((engineer, index) => (
                    <CardPerson key={index} {...engineer} />
                ))}
            </div>
            <div className="flex justify-center gap-6 mt-10">
                <button onClick={handlePrevPage} disabled={currentPage === 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`size-12 -rotate-180 ${currentPage === 0 ? "bg-slate-300" : "bg-primary"} rounded-full p-2`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(engineers.length / engineersPerPage) - 1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`size-12 ${currentPage >= Math.ceil(engineers.length / engineersPerPage) - 1 ? "bg-slate-300" : "bg-primary"}  rounded-full p-2`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </motion.div>
    );
}
