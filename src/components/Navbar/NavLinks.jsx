/**
 * NavLinks Component
 * Renders the desktop navigation links with hover expand/collapse effect
 */
import { NAV_LINKS } from '../../constants';
import NavIcon from './NavIcon';

export default function NavLinks({ isExpanded, navLinkRef }) {
  return (
    <ul
      ref={navLinkRef}
      className="hidden md:flex flex-col items-center gap-6 lg:gap-8 px-2 py-6 font-Ovo mt-8 w-full border-0 shadow-none outline-none ring-0"
      style={{ border: 'none', boxShadow: 'none' }}
    >
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a
            className="flex items-center gap-3 justify-center hover:text-gray-500 dark:hover:text-gray-300 transition py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 w-full"
            href={link.href}
          >
            <span className="text-lg">
              <NavIcon name={link.icon} />
            </span>
            <span className={`overflow-hidden transition-all whitespace-nowrap ${isExpanded ? 'w-auto' : 'w-0'}`}>
              {link.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
