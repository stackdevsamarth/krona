import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Crawler from './components/Crawler';
import About from './components/About';
import Accessories from './components/Accessories';
import Legacy from './components/Legacy';
import Products from './components/Products';
import Stories from './components/Stories';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Crawler />
        <Products />
        <About />
        <Accessories />
        <Legacy />
        <Products />
        <Stories />
      </main>
      <Footer />
    </>
  );
}

export default App;
