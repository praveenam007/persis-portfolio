import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();
    const [isExpanded, setIsExpanded] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <nav ref={navRef} className="h-screen fixed left-0 top-0 p-0 flex flex-col items-center justify-start z-50 border-0 outline-none shadow-none ring-0" style={{ border: 'none', boxShadow: 'none' }} onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>

                <ul ref={navLinkRef} className="hidden md:flex flex-col items-center gap-6 lg:gap-8 px-2 py-6 font-Ovo mt-8 w-full border-0 shadow-none outline-none ring-0" style={{ border: 'none', boxShadow: 'none' }}>
                    <li><a className='flex items-center gap-3 justify-center hover:text-gray-500 dark:hover:text-gray-300 transition py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 w-full' href="#top">
                        <span className="text-lg">🏠</span>
                        <span className={`overflow-hidden transition-all ${isExpanded ? 'w-auto' : 'w-0'}`}>Home</span>
                    </a></li>
                    <li><a className='flex items-center gap-3 justify-center hover:text-gray-500 dark:hover:text-gray-300 transition py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 w-full' href="#about">
                        <span className="text-lg">👤</span>
                        <span className={`overflow-hidden transition-all ${isExpanded ? 'w-auto' : 'w-0'}`}>About me</span>
                    </a></li>
                    <li><a className='flex items-center gap-3 justify-center hover:text-gray-500 dark:hover:text-gray-300 transition py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 w-full' href="#services">
                        <span className="text-lg">⚙️</span>
                        <span className={`overflow-hidden transition-all ${isExpanded ? 'w-auto' : 'w-0'}`}>Services</span>
                    </a></li>
                    <li><a className='flex items-center gap-3 justify-center hover:text-gray-500 dark:hover:text-gray-300 transition py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 w-full' href="#work">
                        <span className="text-lg">💼</span>
                        <span className={`overflow-hidden transition-all ${isExpanded ? 'w-auto' : 'w-0'}`}>My Work</span>
                    </a></li>
                    <li><a className='flex items-center gap-3 justify-center hover:text-gray-500 dark:hover:text-gray-300 transition py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 w-full' href="#contact">
                        <span className="text-lg">✉️</span>
                        <span className={`overflow-hidden transition-all ${isExpanded ? 'w-auto' : 'w-0'}`}>Contact me</span>
                    </a></li>
                </ul>

                <div className="flex flex-col items-center gap-4 mt-8 w-full px-2">
                    <button onClick={toggleTheme} className="py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition">
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    {/* <a href="#contact" className="hidden lg:flex items-center gap-3 px-3 py-2 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-lg font-Ovo w-full justify-center transition">
                        <span className={`overflow-hidden transition-all ${isExpanded ? 'w-auto' : 'w-0'}`}>Contact</span>
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a> */}

                    <button className="block md:hidden mt-8" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -left-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}