import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container container">
        <a href="/" className="logo">
          KROMA<span className="logo-accent">IND.</span>
        </a>

        <div className="nav-links desktop-only">
          <a href="#products" className="nav-link">Gear</a>
          <a href="#accessories" className="nav-link">Accessories</a>
          <a href="#innovation" className="nav-link">Innovation</a>
          <a href="#stories" className="nav-link">Stories</a>
          <a href="#support" className="nav-link">Support</a>
        </div>

        <div className="nav-actions">
          <button className="contact-btn" onClick={() => window.location.href = 'mailto:info@kromaind.com'}>
            <span className="desktop-only">Contact Us</span>
            <Mail size={20} />
          </button>

          <button
            className="mobile-menu-btn mobile-only"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button 
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="mobile-menu-content">
              {[
                { name: 'Gear', href: '#products' },
                { name: 'Accessories', href: '#accessories' },
                { name: 'Innovation', href: '#innovation' },
                { name: 'Stories', href: '#stories' },
                { name: 'Support', href: '#support' }
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
