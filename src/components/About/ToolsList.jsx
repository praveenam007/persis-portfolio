/**
 * ToolsList Component
 * Displays the tools/technologies with icons
 */
import { TOOLS } from '../../constants';

export default function ToolsList() {
  return (
    <div className="text-center">
      <h4 className="mb-4 text-gray-700 font-Ovo dark:text-white/80">Tools I leverage</h4>
      <ul className="flex items-center justify-center gap-3 sm:gap-5">
        {TOOLS.map((tool) => (
          <li
            key={tool.name}
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
          >
            <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
          </li>
        ))}
      </ul>
    </div>
  );
}
