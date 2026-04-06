/**
 * PerspectiveButtons Component
 * Toggle buttons for Header perspective (Business/Technical)
 */

export default function PerspectiveButtons({ isTechnical, setIsTechnical }) {
  return (
    <div className="flex items-center gap-3 mb-4 bg-gray-100 dark:bg-white/10 p-1 rounded-full border border-gray-200 dark:border-white/20">
      <button
        onClick={() => setIsTechnical(false)}
        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
          !isTechnical
            ? 'bg-white dark:bg-darkTheme shadow-sm text-black dark:text-white'
            : 'text-gray-500'
        }`}
      >
        Business Impact
      </button>
      <button
        onClick={() => setIsTechnical(true)}
        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
          isTechnical
            ? 'bg-white dark:bg-darkTheme shadow-sm text-black dark:text-white'
            : 'text-gray-500'
        }`}
      >
        Technical Depth
      </button>
    </div>
  );
}
