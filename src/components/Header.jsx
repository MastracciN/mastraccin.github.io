import React from 'react'

function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
            <div className="text-xl font-bold">NM</div>
            <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#intro" className="hover:text-blue-500">Home</a></li>
                <li><a href="#about" className="hover:text-blue-500">About</a></li>
                <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Resume</a></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;