import React from "react";

const Portfolio = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">YourName</div>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#intro" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          </ul>
        </nav>
      </header>

      {/* Intro Section */}
      <section id="intro" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Nathaniel</h1>
        <p className="text-lg text-gray-600 max-w-xl">A software developer passionate about creating for others.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 text-lg">I specialize in frontend development using React and Tailwind CSS. I enjoy solving real problems and creating interfaces that feel intuitive and smooth.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 mb-4">A short description about what this project does and what tech stack it uses.</p>
              <a href="#" className="text-blue-600 hover:underline">View Project →</a>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4">Another project focused on performance, accessibility, or unique design challenges.</p>
              <a href="#" className="text-blue-600 hover:underline">View Project →</a>
            </div>
          </div>
        </div>
      </section>

    {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input type="text" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white" rows="5" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Send</button>
            </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-6 bg-white border-t text-center text-sm text-gray-500">
        © 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
