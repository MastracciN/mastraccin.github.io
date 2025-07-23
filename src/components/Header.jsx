import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-2 z-50 flex justify-center transition-all duration-300 ${
            // scrolled ? "bg-white shadow-md" : "bg-transparent"
           scrolled ? "bg-transparent" : "bg-transparent"
      }`}>
            {/* <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center"> */}
              <nav className={`inline-flex px-8 py-4 bg-white rounded-xl items-center shadow-md space-x-10`}>
                {/* <div className="text-xl font-bold">NM</div> */}
                <ul className="flex space-x-6 text-md font-semibold">
                    <li><a href="#intro" className="hover:text-blue-500 py-4">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500 py-4">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500 py-4">Projects</a></li>
                    <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 py-4">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;