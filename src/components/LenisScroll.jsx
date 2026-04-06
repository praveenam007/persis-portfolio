/**
 * LenisScroll Component
 * Provides smooth scrolling functionality using the Lenis library
 * 
 * Features:
 * - Smooth scroll animation with configurable duration
 * - Smooth wheel scrolling
 * - Anchor offset for fixed headers
 */

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Scroll animation duration
      smoothWheel: true, // Enable smooth wheel scrolling
      smoothTouch: false, // Disable smooth touch for better mobile experience
      anchors: {
        offset: -100, // Offset for anchor links (account for fixed header)
      },
    });

    /**
     * RAF loop for continuous Lenis updates
     */
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    /**
     * Cleanup on unmount
     */
    return () => {
      lenis.destroy();
    };
  }, []);

  // This component doesn't render anything, it just enables smooth scrolling
  return null;
}