export default function Hamberger({ showSidebar, setShowSidebar }) {
    return (
        <div onClick={() => setShowSidebar(!showSidebar)} className="z-50 flex flex-col items-center justify-center gap-1 cursor-pointer md:hidden rounded-full   ">
            <div className={`w-10 h-1 bg-black rounded-2xl mb-1 transition-all duration-200 ease-in-out ${showSidebar ? 'transform rotate-45 translate-y-2 bg-white' : 'bg-black'}`}></div>
            <div className={`w-10 h-1 bg-black rounded-2xl mt-1 transition-all duration-200 ease-in-out ${showSidebar ? 'transform -rotate-45 -translate-y-2 bg-white' : 'bg-black'}`}></div>
        </div>
    );
}