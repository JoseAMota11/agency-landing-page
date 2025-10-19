import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/hero-section';
import ServiceSection from './components/service-section';
import TestimonialsSection from './components/testimonials-section';
import OurTeamSection from './components/our-team-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <main className="main-container">
        <HeroSection />
        <ServiceSection />
        <TestimonialsSection />
        <OurTeamSection />
        <ContactSection />
      </main>
      <Footer /> */}
    </>
  );
}

export default App;
