import { useState } from 'react';

export default function About() {
    // 1. State to track the active "Lens"
    const [isTechnical, setIsTechnical] = useState(false);

    const tools = [
        { name: 'bigquery', icon: './assets/bigquery.png' }, 
        { name: 'python', icon: './assets/python.png' },    
        { name: 'react', icon: './assets/react.png' },      
        { name: 'sql', icon: './assets/sql.png' },          
        { name: 'git', icon: './assets/git.png' },
    ];

    // 2. Data structured to "Flip" based on the toggle
    const experienceData = [
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            // Consistent across both lenses
            description: 'B.Tech + M.Tech in Biological Engineering, IIT Madras', // 
        },
        {
            name: isTechnical ? 'Technical Depth' : 'Business Impact',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            // Content flips based on state
            description: isTechnical 
                ? 'Optimized SQL for 1M+ daily records & built AI dashboards using React/REST APIs.' // [cite: 16, 17]
                : 'Driven 40% revenue growth for clients & automated workflows to save 60% analysis time.', // [cite: 15, 18]
        },
        {
            name: 'Quantitative Rank',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'World Quant Brain Gold Medalist (Ranked 1.5k/37k).', // 
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>

                <div className="flex-1">
                    {/* Perspective Toggle Switch */}
                    <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                        <span className={`text-sm ${!isTechnical ? 'font-bold text-black' : 'text-gray-400'}`}>Business Lens</span>
                        <button 
                            onClick={() => setIsTechnical(!isTechnical)}
                            className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors duration-300 dark:bg-gray-600"
                        >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${isTechnical ? 'left-7 bg-purple-500' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-sm ${isTechnical ? 'font-bold text-black' : 'text-gray-400'}`}>Technical Lens</span>
                    </div>

                    <p className="mb-10 max-w-2xl font-Ovo leading-relaxed">
                        {isTechnical 
                            ? "I am a Data Analyst specializing in building scalable AI-powered pipelines and interactive dashboards. I focus on optimizing complex SQL queries and engineering end-to-end data products." // [cite: 52, 63]
                            : "I am a Business Analyst with a track record of translating complex datasets into growth opportunities, contributing to significant revenue increases and operational efficiency." // [cite: 7, 9]
                        }
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {experienceData.map((item, index) => (
                            <li key={index} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white transition-all duration-300">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80 transition-all duration-300">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I leverage</h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}