import links from './links';

export default function Sidebar({ showSidebar, setShowSidebar }) {
    return (
        <>
            <div 
            onClick={() => setShowSidebar(false)}
                className={`h-full w-full fixed bottom-0 left-0 bg-black mt-96 opacity-80 flex md:hidden justify-center items-center z-40 text-white text-3xl transform ${
                    showSidebar ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300`}
            >
                <ul className='space-y-16 font-semibold font-oswald navlist'>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>
               
            </div>
        </>
    );
}