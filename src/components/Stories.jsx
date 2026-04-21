import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Stories.css';

const stories = [
  {
    id: 1,
    title: "The Backbone of Construction",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kdXN0cmlhbCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "Engineering the Perfect Harness",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kdXN0cmlhbCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "Why Material Matters",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kdXN0cmlhbCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "Safety Standards Explained",
    category: "Stories",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= stories.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="stories-section" id="stories">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="stories-bg-video"
        src="/1 (1).mp4"
      />
      <div className="stories-bg-overlay"></div>
      
      <div className="stories-content-wrapper">
        <div className="stories-header container">
        <h2 className="section-title text-center">KROMA STORIES</h2>
        <p className="section-subtitle text-center">
          The Kroma community extends to every corner of the world and never ceases to amaze us.<br/>
          Check it out if you want to make new friends, learn something new or have your mind blown.
        </p>
      </div>

      <div className="stories-carousel-wrapper">
        <button className="carousel-btn prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="stories-track-container" ref={trackRef}>
          <motion.div 
            className="stories-track"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {stories.map((story) => (
              <div key={story.id} className="story-card-wrapper">
                <div className="story-card">
                <div className="story-bg-wrapper">
                  <img src={story.image} alt={story.title} className="story-bg" />
                </div>
                <div className="story-overlay"></div>
                
                <div className="story-content-top">
                  <span className="story-badge">{story.category}</span>
                </div>
                
                <div className="story-content-bottom">
                  <h3 className="story-title">{story.title}</h3>
                </div>
              </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="stories-footer">
        <button className="btn-dark">Check It Out</button>
      </div>
      </div>
    </section>
  );
};

export default Stories;
