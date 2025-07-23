import React from "react";
import Header from "./components/Header.jsx"
import pic from './assets/profile.jpg'

const Portfolio = () => {
  const deviconSvgs = [
    {
      name: 'Javascript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Python',
      src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    {
      name: 'Tailwind',
      src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Node.js',
      src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Angular',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg'
    },
    {
      name: 'Kotlin',
      src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg'
    },
        {
      name: 'SQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'React',
      src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
      name: 'C#',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    {
      name: 'Bootstrap',
      src:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    },

  ]

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <div className='bg-gradient-to-b from-blue-100 to-white'>
        <Header />

        {/* Intro Section */}
        <section id="intro" className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
          <img src={pic} alt="Profile" className="w-64 h-64 rounded-full object-cover mb-10"/>
          <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Nathaniel</h1>
          <p className="text-lg text-gray-600 max-w-xl">I'm searching for problems to solve.</p>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 text-lg">I enjoy coding the most when I'm building solutions for others. 
            I want to work on projects that solve real problems, no matter how big or small.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Clearer</h3>
              <p className="text-gray-600 mb-4">An assistive reading tool for children with Auditory Processing Disorder built in Android.</p>
              <a href="https://github.com/MastracciN/Clearer" className="text-blue-600 hover:underline">View Project →</a>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2">Collectors</h3>
              <p className="text-gray-600 mb-4">A tool to manage collections using UPCs (barcodes).</p>
              <a href="#" className="text-blue-600 hover:underline">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="flex flex-wrap">
            {deviconSvgs.map((icon, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2 flex flex-col items-center group">
                <img src={icon.src} alt={icon.name} className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-2 text-sm text-gray-700 group-hover:text-blue-600">{icon.name}</p>
              </div>
            ))}
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
        {/* © 2025 Your Name. All rights reserved. */}
      </footer>
    </div>
  );
};

export default Portfolio;
