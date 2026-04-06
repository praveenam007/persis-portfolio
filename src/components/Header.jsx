/**
 * Header Component
 * Hero section displaying:
 * - Greeting
 * - Dynamic role based on perspective
 * - Perspective toggle buttons
 * - Dynamic description
 */

import { getHeaderContent } from '../constants';
import PerspectiveButtons from './Header/PerspectiveButtons';
import Greeting from './Header/Greeting';

export default function Header({ isTechnical, setIsTechnical }) {
  const { role, title, description } = getHeaderContent(isTechnical);

  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 transition-all duration-500"
    >
      {/* Perspective Buttons */}
      <PerspectiveButtons isTechnical={isTechnical} setIsTechnical={setIsTechnical} />

      {/* Greeting */}
      <Greeting />

      {/* Dynamic Role Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-Ovo transition-all duration-300">
        I&apos;m a {role}
      </h1>

      {/* Dynamic Content */}
      <div className="max-w-2xl mx-auto text-center font-Ovo">
        <p className="text-lg sm:text-xl lg:text-2xl text-purple-600 dark:text-purple-400 font-medium">
          {title}
        </p>

        <p className="text-base sm:text-lg lg:text-xl mt-4 leading-relaxed text-gray-700 dark:text-white/80 transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}