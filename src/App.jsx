/**
 * App Component
 * Main application entry point
 * 
 * Layout:
 * - LenisScroll: Smooth scrolling provider
 * - Navbar: Main navigation (left sidebar)
 * - Main Content: Header and About sections
 * 
 * State:
 * - isTechnical: Shared state between Header and About to control perspective
 */

import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LenisScroll from './components/LenisScroll';

export default function App() {
  const [isTechnical, setIsTechnical] = useState(true);

  return (
    <>
      {/* Smooth Scroll Provider */}
      <LenisScroll />

      {/* Navigation Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Header isTechnical={isTechnical} setIsTechnical={setIsTechnical} />
        <About isTechnical={isTechnical} />
      </main>
    </>
  );
}