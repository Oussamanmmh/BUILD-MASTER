    import { useEffect, useState } from 'react';

    const UpArrow = () => {
        const [showArrow, setShowArrow] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 100) {
                    setShowArrow(true);
                } else {
                    setShowArrow(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
            <>
                
                    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-10 right-10 bg-gradient-to-br from-secondary to-primary p-3 rounded-full ${showArrow ?"opacity-100 ":"opacity-0"} cursor-pointer transition-all duration-300 ease-in-out`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
            
            </>
        );
    };

    export default UpArrow;
