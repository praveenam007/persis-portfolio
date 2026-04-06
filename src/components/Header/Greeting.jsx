/**
 * Greeting Component
 * Displays greeting with waving hand emoji
 */

export default function Greeting() {
  return (
    <h3 className="flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo">
      Hi! I&apos;m Persis Praveena
      <img src="./assets/hand-icon.png" alt="Wave" className="w-6 mb-1" />
    </h3>
  );
}
