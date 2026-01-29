import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { FacilitySection } from './components/FacilitySection';
import { ServicesGrid } from './components/ServicesGrid';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';
export function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  return (
    <main className="min-h-screen bg-polidiesel-black text-white selection:bg-polidiesel-neon selection:text-polidiesel-black">
      <HeroSection />
      <FacilitySection />
      <ServicesGrid />
      <LeadershipSection />
      <TestimonialsSection />
      <Footer />
      <StickyWhatsApp />
    </main>);

}