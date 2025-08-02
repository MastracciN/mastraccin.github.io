import React from "react";
import Header from "./components/Header.jsx"
import Skills from "./components/Skills.jsx"
import Build from "./components/Build.jsx"
import pic from './assets/profile.jpg'

const Portfolio = () => {

  return (
    <div className="text-white bg-linear-to-br from-black to-[#110d1f] min-h-screen">
      {/* Navbar */}
      {/* <Header /> */}
      {/* <div className="relative lg:flex lg:w-5/7 mx-auto max-w-[1400px] px-6 md:px-10 gap-4"> */}
      <div className="relative lg:flex w-full max-w-[1350px] mx-auto gap-4 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Intro Section */}
        <aside id="intro" 
          className="flex flex-col py-10 w-full
             lg:sticky lg:top-0 lg:h-screen lg:w-[44%] lg:pt-[10%]">
          <img src={pic} alt="Profile" 
            className="w-50 md:w-56 lg:w-64 xl:w-70 aspect-square rounded-full object-cover mb-6 lg:mb-10 
              transition-transform duration-300 hover:scale-103"/>
          <div>
            <h1 className="text-4xl mb-1">Nathaniel Mastracci</h1>
            <p className="text-lg text-gray-400">Full-Stack Developer</p>
            <Build />
          </div>

          {/* Links */}
          <div className="flex flex-row gap-x-3 justify-start">
            <a href="https://github.com/MastracciN" target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              <svg viewBox="0 0 128 128" width="30" height="30">
                <g fill="#ffffff"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mastracci/" target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              <svg viewBox="0 0 128 128" width="30" height="30">
                <g fill="#ffffff"><path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path></g>
              </svg>
            </a>
          </div>
          
        </aside>

        {/* Right Column */}
        <main className="w-full lg:w-[56%] pb-4 lg:py-18">
          {/* About Section */}
          <section id="about" className="mb-15">
            <h2 className="text-xl mb-5">About</h2>
            <p className="text-gray-400">I enjoy building things that people actually <b>want</b> to use. 
              Whether it's a big project or a small feature, there's something really satisfying about creating something useful.
               I've had the opportunity to work on a variety of different projects—from <b>web</b> apps to <b>machine learning</b> projects—which 
               has helped me pick up new skills quickly and stay curious.
               <br/><br/>
               When I'm not at my computer, I'm probably watching movies or walking my dog.
               <br/><br/>
               I’m always open to new opportunities. If you think I’d be a good fit, feel free to reach out.
              </p>
          </section>

          {/* Work Experience Section */}
          <section id="workexperience" className="mb-15">
            <h2 className="text-xl mb-3">Work Experience</h2>
            {/* Experience 1 */}
            {/* <div className="transition-colors duration-300 hover:bg-gray-900 rounded-lg py-6"> */}
            <div className="transition-all duration-300 hover:bg-gray-900 rounded-lg py-6 -mx-6 px-6">
              <p className="text-gray-500 mb-1 text-sm">2023 — 2024</p>
              <p className="mb-1 text-lg">Research Assistant • Sheridan Centre for Applied AI</p>
              <p className="text-gray-400 mb-1">Developed a machine learning model for the classification of heart sounds collected via electronic stethoscope.
                Presented and published a paper on this research available here.
              </p>
              <p className="text-gray-500  text-sm">Python • TensorFlow • Pandas • NumPy</p>
            </div>

            {/* Experience 2 */}
            <div className="transition-all duration-300 hover:bg-gray-900 rounded-lg py-6 -mx-6 px-6">
              <p className="text-gray-500 mb-1 text-sm">May — Aug 2022</p>
              <p className="mb-1 text-lg">Research Assistant • Sheridan Centre for Applied AI</p>
              <p className="text-gray-400 mb-1">Researched state-of-the-art voice cloning solutions, emphasizing cross-lingual capabilities, AI model effectiveness,
                and optimal dataset practices. Developed voice clones with Python and PyCaret, utilizing Wav2Lip to produce AI-generated lip-synced videos and explore
                practical applications of voice cloning technology.
              </p>
              <p className="text-gray-500 text-sm">Python • PyCaret • NumPy</p>
            </div>

            {/* Experience 3 */}
            <div className="transition-all duration-300 hover:bg-gray-900 rounded-lg py-6 -mx-6 px-6">
              <p className="text-gray-500 mb-1 text-sm">2019 — 2020</p>
              <p className="mb-1 text-lg">Front-End Developer • Claret Asset Management</p>
              <p className="text-gray-400 mb-1">Developed the front end of a client-onboarding web application, creating extensive forms to manage client personal
                and financial information.
              </p>
              <p className="text-gray-500 text-sm">HTML • CSS • JavaScript • AngularJS</p>
            </div>

            <div className="py-6">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="hover:underline hover:text-blue-500 transition-colors duration-300">View Full Resume ↗</a>
            </div>

          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-15">
              <h2 className="text-xl mb-3">Projects</h2>
              <a href="https://github.com/MastracciN/Clearer" target="_blank" rel="noopener noreferrer"
                className="block group transition-all duration-300 hover:bg-gray-900 rounded-lg py-6 -mx-6 px-6">
                <p className="text-lg mb-1 group-hover:underline group-hover:text-blue-500 transition-colors duration-300">Clearer ↗</p>
                <p className="text-gray-400 mb-1">An assistive reading tool for children with Auditory Processing Disorder built in Android.</p>
                <p className="text-gray-500 mb-1 text-sm">Kotlin • React • Firestore • Figma</p>
              </a>
          </section>

          {/* Links Section */}
          {/* <section id="links" className="px-6">
            <h2 className="text-2xl mb-4">Links</h2>
            <div className="flex w-full">
              <div className="w-1/4 grid gap-3">
                <div className="text-gray-400">GitHub</div>
                <div className="text-gray-400">LinkedIn</div>
                <div className="text-gray-400">Resume</div>
              </div>
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
          </section> */}

        </main>
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
            <form className="gap-y-6">
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
