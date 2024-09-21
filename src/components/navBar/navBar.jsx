import { useState  } from 'react';
import Links from './links';
import Sidebar from './sidebar';
import Hamberger from './hamberger';
export default function NavBar() {
    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <nav className="navbar h-24  flex items-center justify-between px-10 py-6    bg-transparent w-full sticky top-0 z-50">
            <a className="text-2xl xl:text-4xl font-bold font-oswald text-primary" href='/'>
                BuildMaster

            </a>
            <ul className="md:flex items-center gap-20 navlist xl:text-xl hidden font-semibold">
                {Links.map((link, index) => (
                    <li key={index}> <a href={link.url}>{link.title}</a></li>
                ))}
            </ul>
          <Hamberger showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
           
           
        </nav>
    );
}