import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        // handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-2 z-50 flex justify-end w-full">
            {/* <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center"> */}
              {/* <nav className={`inline-flex items-center space-x-10 rounded-xl transition-all duration-300 ${scrolled ? "bg-white shadow-md px-8 py-4" : "bg-transparent px-8 py-4"}`}> */}
                <nav className={`inline-flex items-center space-x-10 rounded-xl transition-all duration-300`}>
                <ul className="flex space-x-6 text-md font-semibold">
                    <li><a href="#intro" onClick={() => setScrolled(true)} 
                        className="hover:text-blue-500 py-4">Home</a></li>
                    <li><a href="#about" onClick={() => setScrolled(true)} 
                        className="hover:text-blue-500 py-4">About</a></li>
                    <li><a href="#projects" onClick={() => setScrolled(true)} 
                        className="hover:text-blue-500 py-4">Projects</a></li>
                    <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" 
                        className="hover:text-blue-500 py-4">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;