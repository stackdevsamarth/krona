import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={containerRef}>
      <motion.div
        className="hero-bg"
        style={{ y }}
      >
        <div className="hero-overlay"></div>
        {/* Professional industrial/manufacturing background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          src="/new.mp4"
        />
      </motion.div>

      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: opacity }}
        >
          <h1 className="hero-title">
            The New Standard<br />
            <span className="text-accent">In Safety</span>
          </h1>
          <p className="hero-subtitle">
            Engineering safety footwear and workwear for the world's most demanding industrial environments.          </p>
          <div className="hero-actions">
            <a href="#products" className="btn-primary">
              Explore The Gear
            </a>
            <a href="#stories" className="btn-outline">
              Our Legacy
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: opacity }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
