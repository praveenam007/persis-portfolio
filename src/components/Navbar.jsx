/**
 * Navbar Component
 * Main navigation bar with:
 * - Desktop expandable sidebar
 * - Mobile hamburger menu
 * - Theme toggle
 * - Smooth scroll handling
 */

import { useEffect, useRef, useState } from 'react';
import { initializeTheme } from '../utils/theme';
import NavLinks from './Navbar/NavLinks';
import MobileMenu from './Navbar/MobileMenu';
import ThemeToggle from './Navbar/ThemeToggle';

export default function Navbar() {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Handle mobile menu open
   */
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  /**
   * Handle mobile menu close
   */
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  /**
   * Handle mobile menu toggle
   */
  const toggleMobileMenu = () => {
    const isOpen = sideMenuRef.current.style.transform === 'translateX(16rem)';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  /**
   * Initialize theme and add scroll listeners
   */
  useEffect(() => {
    initializeTheme();

    const handleScroll = () => {
      if (!navRef.current) return;

      if (scrollY > 50) {
        navRef.current.classList.add(
          'bg-white',
          'bg-opacity-50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-darkTheme',
          'dark:shadow-white/20'
        );
      } else {
        navRef.current.classList.remove(
          'bg-white',
          'bg-opacity-50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-darkTheme',
          'dark:shadow-white/20'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="h-screen fixed left-0 top-0 p-0 flex flex-col items-center justify-start z-50 border-0 outline-none shadow-none ring-0"
        style={{ border: 'none', boxShadow: 'none' }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Desktop Navigation Links */}
        <NavLinks isExpanded={isExpanded} navLinkRef={navLinkRef} />

        {/* Bottom Actions */}
        <div className="flex flex-col items-center gap-4 mt-8 w-full px-2">
          {/* Theme Toggle */}
          <ThemeToggle isExpanded={isExpanded} />

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden mt-8"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <img src="./assets/menu-black.png" alt="Menu" className="w-6 dark:hidden" />
            <img src="./assets/menu-white.png" alt="Menu" className="w-6 hidden dark:block" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <MobileMenu sideMenuRef={sideMenuRef} closeMenu={closeMenu} />
    </>
  );
}