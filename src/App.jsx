/**
 * App Component
 * Main application entry point
 * 
 * Layout:
 * - LenisScroll: Smooth scrolling provider
 * - Navbar: Main navigation (left sidebar)
 * - Main Content: Header and About sections
 */

import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LenisScroll from './components/LenisScroll';

export default function App() {
  return (
    <>
      {/* Smooth Scroll Provider */}
      <LenisScroll />

      {/* Navigation Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Header />
        <About />
      </main>
    </>
  );
}