/**
 * MobileMenu Component
 * Renders the mobile sidebar menu that slides in from the left
 */
import { NAV_LINKS } from '../../constants';
import NavIcon from './NavIcon';

export default function MobileMenu({ sideMenuRef, closeMenu }) {
  return (
    <ul
      ref={sideMenuRef}
      className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -left-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
    >
      {/* Close Button */}
      <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
        <img src="./assets/close-black.png" alt="Close" className="w-5 dark:hidden" />
        <img src="./assets/close-white.png" alt="Close" className="w-5 hidden dark:block" />
      </div>

      {/* Mobile Navigation Links */}
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href} onClick={closeMenu} className="flex items-center gap-3">
            <NavIcon name={link.icon} className="h-5 w-5" />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
