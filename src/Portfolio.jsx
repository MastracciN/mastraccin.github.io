import React from "react";
import Header from "./components/Header.jsx"
import Skills from "./components/Skills.jsx"
import pic from './assets/profile.jpg'

const Portfolio = () => {

  return (
    <div className="text-white bg-black min-h-screen">
      {/* Navbar */}
      {/* <Header /> */}
      <div className="relative lg:flex lg:w-5/7 mx-auto">
        {/* Intro Section */}
        <section id="intro" 
          className="flex flex-col items-center text-left px-6 py-10
             lg:sticky lg:top-0 lg:h-screen lg:w-2/5 lg:items-center lg:justify-start lg:pt-[10%]">
          <img src={pic} alt="Profile" className="w-70 aspect-square rounded-full object-cover mb-6 lg:mb-10"/>
          <div>
            <h1 className="text-4xl mb-1">Nathaniel Mastracci</h1>
            <p className="text-lg text-gray-400">Full-Stack Developer</p>
            <p className="text-lg text-gray-500">
              I usually <s>break</s> build things.
            </p>
          </div>
        </section>

        {/* Right Column */}
        <div className="w-full lg:w-3/5 overflow-y-auto lg:p-10">
          {/* About Section */}
          <section id="about" className="px-6 mb-10">
            <h2 className="text-2xl mb-5">About</h2>
            <p className="text-gray-400">I enjoy coding the most when I'm building solutions for others. 
                I want to work on projects that solve real problems, no matter how big or small.</p>
          </section>

          {/* Work Experience Section */}
          <section id="workexperience" className="px-6 mb-10">
            <h2 className="text-2xl mb-5">Work Experience</h2>
            {/* Experience 1 */}
            <div className="flex">
              <p className="mb-1">Research Assistant — Sheridan Centre for Applied AI</p>
              <p className="text-gray-500 mb-1 ml-auto">Jan. 2023 - Apr. 2024</p>
            </div>
            <p className="text-gray-400 mb-1">Developed a machine learning model for the classification of heart sounds collected via electronic stethoscope.
              Presented and published a paper on this research available here.
            </p>
            <p className="text-gray-500 mb-5">Python • TensorFlow • Pandas • NumPy</p>

            {/* Experience 2 */}
            <div className="flex">
              <p className="mb-1">Research Assistant — Sheridan Centre for Applied AI</p>
              <p className="text-gray-500 mb-1 ml-auto">May 2022 - Aug. 2023</p>
            </div>
            <p className="text-gray-400 mb-1">Researched state-of-the-art voice cloning solutions, emphasizing cross-lingual capabilities, AI model effectiveness,
              and optimal dataset practices. Developed voice clones with Python and PyCaret, utilizing Wav2Lip to produce AI-generated lip-synced videos and explore
              practical applications of voice cloning technology.
            </p>
            <p className="text-gray-500 mb-5">Python • PyCaret • NumPy</p>

            {/* Experience 3 */}
            <div className="flex">
              <p className="mb-1">Front-End Developer — Claret Asset Management</p>
              <p className="text-gray-500 mb-1 ml-auto">July 2019 - Apr. 2020</p>
            </div>
            <p className="text-gray-400 mb-1">Developed the front end of a client-onboarding web application, creating extensive forms to manage client personal
              and financial information.
            </p>
            <p className="text-gray-500 mb-5">AngularJS • JavaScript • HTML • CSS</p>


          </section>

          {/* Projects Section */}
          <section id="projects" className="px-6 mb-10">
              <h2 className="text-2xl mb-5">Projects</h2>
              {/* Project 1 */}
              <div className="rounded-2xl">
                <a href="https://github.com/MastracciN/Clearer" className="text-lg mb-1 hover:underline"
                  target="_blank" rel="noopener noreferrer">Clearer →</a>
                <p className="text-gray-400 mb-1">An assistive reading tool for children with Auditory Processing Disorder built in Android.</p>
                <p className="text-gray-500 mb-1">Kotlin • React • Firestore • Figma</p>
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
                  <a href="https://github.com/MastracciN" target="_blank" rel="noopener noreferrer">@MastracciN →</a>
                </div>
                <div className="text-blue-600 hover:underline">
                  <a href="https://www.linkedin.com/in/mastracci/" target="_blank" rel="noopener noreferrer">@Mastracci →</a>
                </div>
                <div className="text-blue-600 hover:underline">
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume →</a>
                </div>
              </div>
            </div>
         </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

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
