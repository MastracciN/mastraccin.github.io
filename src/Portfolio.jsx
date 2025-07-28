import React from "react";
import Header from "./components/Header.jsx"
import Skills from "./components/Skills.jsx"
import pic from './assets/profile.jpg'

const Portfolio = () => {

  return (
    <div className="min-h-screen w-full font-sans text-white bg-black py-10">
      {/* Navbar */}
      {/* <Header /> */}
      <div className="max-w-3xl mx-auto px-4">

      {/* Intro Section */}
      <section id="intro" className="flex flex-col lg:flex-row  items-center text-left space-x-8 px-6 py-10">
        <img src={pic} alt="Profile" className="w-52 aspect-square rounded-full object-cover mb-6 lg:mb-0"/>
        <div>
          <h1 className="text-5xl mb-1">Nathaniel Mastracci</h1>
          <p className="text-lg text-gray-400">
            I usually <s>break</s> build things.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 mb-7">
        <h2 className="text-2xl mb-1">About</h2>
        <p className="text-gray-400">I enjoy coding the most when I'm building solutions for others. 
            I want to work on projects that solve real problems, no matter how big or small.</p>
      </section>

      {/* TODO: projects centered, image on left, desc. on right */}
      {/* Projects Section */}
      <section id="projects" className="px-6 mb-7">
          <h2 className="text-2xl mb-4">Projects</h2>
          {/* Project 1 */}
          <div className="rounded-2xl">
            <h3 className="text-xl mb-1">Clearer</h3>
            <p className="text-gray-400 mb-1">An assistive reading tool for children with Auditory Processing Disorder built in Android.</p>
            <a href="https://github.com/MastracciN/Clearer" className="text-blue-600 hover:underline">View Project →</a>
          </div>
      </section>

      <section id="links" className="px-6">
        <h2 className="text-2xl mb-4">Links</h2>
        <div className="flex w-full">
          {/* Left Column */}
          <div className="w-1/4 grid gap-3">
            <div className="text-gray-400">GitHub</div>
            <div className="text-gray-400">LinkedIn</div>
            <div className="text-gray-400">Resume</div>
          </div>

          {/* Right Column */}
          <div className="flex-1 grid gap-3">
            <div className="text-blue-600 hover:underline">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">@MastracciN →</a>
            </div>
            <div className="text-blue-600 hover:underline">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">@Mastracci →</a>
            </div>
            <div className="text-blue-600 hover:underline">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <Skills /> */}

    {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-6 dark:bg-gray-900">
        <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input type="text" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input type="email" className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white" required />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white" rows="5" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Send</button>
            </form>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-6 border-t text-center text-sm text-gray-500">
        © 2025 Your Name. All rights reserved.
      </footer> */}
      </div>
    </div>
  );
};

export default Portfolio;
