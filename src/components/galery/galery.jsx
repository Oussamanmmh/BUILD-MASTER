import React, { useState, useMemo, lazy, Suspense } from 'react';
import Points from "./points";

const Page1 = lazy(() => import("./page1"));
const Page2 = lazy(() => import("./page2"));
const Page3 = lazy(() => import("./page3"));

export default function Galery() {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = useMemo(() => [<Page1 />, <Page2 />, <Page3 />], []);

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };

    const Arrow = ({ direction, onClick }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className={`size-20 absolute ${direction === 'next' ? 'right-0' : 'left-0'} bottom-1/2 z-40 cursor-pointer ${direction === 'prev' && 'translate-y-2'}`}
            onClick={onClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'next' ? 'm8.25 4.5 7.5 7.5-7.5 7.5' : 'M15.75 19.5 8.25 12l7.5-7.5'} />
        </svg>
    );

    return (
        <section className="relative">
            <Arrow direction="next" onClick={handleNext} />
            <Arrow direction="prev" onClick={handlePrev} />
            <Points currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Suspense fallback={
                <div className=' flex items-center justify-center animate-spin h-20 w-full bg-g'>Loading...</div>
                }>
                {pages[currentPage]}
            </Suspense>
        </section>
    );
}
