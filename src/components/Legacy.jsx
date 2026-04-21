import React from 'react';
import { motion } from 'framer-motion';
import './Legacy.css';

const Legacy = () => {
  return (
    <section className="legacy-section" id="legacy">
       <div className="legacy-bg-container">
         {/* Professional video background for Legacy section */}
         <video 
           autoPlay 
           loop 
           muted 
           playsInline 
           className="legacy-bg-video"
           src="/1 (3).mp4"
         />
         <div className="legacy-overlay"></div>
      </div>
      <div className="legacy-content container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="legacy-text-wrapper"
        >
          <h2 className="legacy-title">OUR LEGACY</h2>
          <p className="legacy-text">
            For over two decades, KROMA IND. has been at the forefront of industrial safety innovation. What started as a small workshop dedicated to crafting better climbing harnesses has evolved into a global standard for uncompromising protection. We look back with pride, but our focus is always on the future of safety.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;
