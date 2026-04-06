/**
 * ThemeToggle Component
 * Button to toggle between light and dark mode
 */
import { toggleTheme } from '../../utils/theme';

export default function ThemeToggle({ isExpanded }) {
  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-3 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition flex items-center gap-3"
      aria-label="Toggle theme"
    >
      <img src="./assets/moon_icon.png" alt="Light mode" className="w-5 dark:hidden" />
      <img src="./assets/sun_icon.png" alt="Dark mode" className="w-5 hidden dark:block" />
      {isExpanded && (
        <span className="hidden lg:inline text-sm overflow-hidden transition-all whitespace-nowrap">
          Theme
        </span>
      )}
    </button>
  );
}
