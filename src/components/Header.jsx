import { useState } from 'react';

export default function Header() {
    const [isTechnical, setIsTechnical] = useState(true);

    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 transition-all duration-500">
            {/* The Perspective Switcher */}
            <div className="flex items-center gap-3 mb-4 bg-gray-100 dark:bg-white/10 p-1 rounded-full border border-gray-200 dark:border-white/20">
                <button 
                    onClick={() => setIsTechnical(false)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${!isTechnical ? 'bg-white dark:bg-darkTheme shadow-sm text-black dark:text-white' : 'text-gray-500'}`}
                >
                    Business Impact
                </button>
                <button 
                    onClick={() => setIsTechnical(true)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${isTechnical ? 'bg-white dark:bg-darkTheme shadow-sm text-black dark:text-white' : 'text-gray-500'}`}
                >
                    Technical Depth
                </button>
            </div>

            <h3 className="flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo">
                Hi! I&apos;m Persis Praveena
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>

            {/* Dynamic Role Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-Ovo transition-all duration-300">
                I&apos;m a {isTechnical ? 'Data Analyst' : 'Business Analyst'} 
            </h1>

            <div className="max-w-2xl mx-auto text-center font-Ovo">
                <p className="text-lg sm:text-xl lg:text-2xl text-purple-600 dark:text-purple-400 font-medium">
                    {isTechnical ? 'Data. AI. Pipelines at Scale.' : 'Data. Strategy. Growth at Scale.'}
                </p>
                
            <p className="text-base sm:text-lg lg:text-xl mt-4 leading-relaxed text-gray-700 dark:text-white/80 transition-all duration-300">
                {isTechnical 
                    ? "Data Analyst with 2 years of experience in building high-performance SQL pipelines and AI dashboards that process 1M+ records daily." 
                    : "Leveraging data insights to drive 40% revenue growth and automating workflows to reduce analysis time by 60%."
                }
            </p>
            </div>

            {/* <div className="flex gap-4 mt-8">
                <button className="px-8 py-3 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
                    View Projects
                </button>
                <button className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 transition duration-300">
                    Contact Me
                </button>
            </div> */}
        </div>
    );
}