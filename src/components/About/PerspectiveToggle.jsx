/**
 * PerspectiveToggle Component
 * Toggle between Business and Technical perspectives
 */

export default function PerspectiveToggle({ isTechnical, setIsTechnical }) {
  return (
    <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
      <span
        className={`text-sm ${!isTechnical ? 'font-bold text-black dark:text-white' : 'text-gray-400'}`}
      >
        Business Lens
      </span>
      <button
        onClick={() => setIsTechnical(!isTechnical)}
        className="w-12 h-6 bg-gray-300 rounded-full relative transition-colors duration-300 dark:bg-gray-600"
        aria-label="Toggle perspective"
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
            isTechnical ? 'left-7 bg-purple-500' : 'left-1'
          }`}
        />
      </button>
      <span
        className={`text-sm ${isTechnical ? 'font-bold text-black dark:text-white' : 'text-gray-400'}`}
      >
        Technical Lens
      </span>
    </div>
  );
}
