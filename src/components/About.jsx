import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-container">
         {/* Professional video background for About section */}
         <video 
           autoPlay 
           loop 
           muted 
           playsInline 
           className="about-bg-video"
           src="/1 (2).mp4"
         />
         <div className="about-overlay"></div>
      </div>
      <div className="about-content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="about-text-wrapper"
        >
          <h2 className="about-title">BUILT FOR<br/><span className="text-accent">THE TRENCHES</span></h2>
          <p className="about-text">
            We don't just manufacture safety gear; we engineer survival tools. Every helmet, harness, and shield that leaves our facility is rigorously tested against the most extreme industrial conditions imaginable. Because when you're on the line, second best isn't an option.
          </p>
          <button className="btn-primary">Discover Our Process</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
