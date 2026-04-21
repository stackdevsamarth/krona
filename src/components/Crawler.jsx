import React from 'react';
import { motion } from 'framer-motion';
import './Crawler.css';

const Crawler = () => {
  // A premium, bold statement to scroll infinitely
  const text = "ENGINEERED FOR THE EXTREMES • UNCOMPROMISING SAFETY • BIS APPROVED • ";
  // Duplicate multiple times to ensure the screen is filled
  const repeatedText = text.repeat(3);

  return (
    <div className="crawler-container">
      <motion.div
        className="crawler-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20 // Adjust speed here
        }}
      >
        <span className="crawler-text">{repeatedText}</span>
        <span className="crawler-text">{repeatedText}</span>
      </motion.div>
    </div>
  );
};

export default Crawler;
