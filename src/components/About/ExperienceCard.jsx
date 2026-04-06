/**
 * ExperienceCard Component
 * Displays a card with icon, title, and description
 */

export default function ExperienceCard({ icon1, icon2, title, description }) {
  return (
    <li className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
      <img src={icon1} alt="" className="w-7 mt-3 dark:hidden" />
      <img src={icon2} alt="" className="w-7 mt-3 hidden dark:block" />
      <h3 className="my-4 font-semibold text-gray-700 dark:text-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm dark:text-white/80 transition-all duration-300">
        {description}
      </p>
    </li>
  );
}
