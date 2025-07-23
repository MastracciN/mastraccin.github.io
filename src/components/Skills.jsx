import React from 'react'

const Skills = () => {
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
    )
}

export default Skills;