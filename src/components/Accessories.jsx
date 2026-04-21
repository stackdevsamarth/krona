import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Accessories.css';

const accessories = [
  {
    id: 1,
    name: "KROMA PRO-X Visor",
    price: "$45",
    image: "https://images.unsplash.com/photo-1566417108845-5ba9c2f9ea1b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZHVzdHJpYWwlMjBzYWZldHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Heavy Duty Carabiner Set",
    price: "$85",
    image: "https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZHVzdHJpYWwlMjBzYWZldHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Reflective Vest Pro",
    price: "$120",
    image: "https://images.unsplash.com/photo-1582489851864-4b4bddaf6a1b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZHVzdHJpYWwlMjBzYWZldHl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    name: "Industrial Gloves",
    price: "$35",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Accessories = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const duplicatedAccessories = [...accessories, ...accessories, ...accessories]; // duplicate to make it long like a crawler

  return (
    <section className="accessories-section" id="accessories" ref={targetRef}>
      <div className="accessories-sticky">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="accessories-bg-video"
          src="/1 (5).mp4"
        />
        <div className="accessories-overlay"></div>

        <div className="accessories-content-wrapper">
          <div className="accessories-header">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">NEW &<br />TRENDING</h2>
              <button className="btn-primary">View All</button>
            </motion.div>
          </div>

          <div className="accessories-carousel-container">
            <motion.div
              className="accessories-track"
              style={{ x }}
            >
              {duplicatedAccessories.map((item, index) => (
                <div key={`${item.id}-${index}`} className="accessory-card">
                  <div className="accessory-img-container">
                    <img src={item.image} alt={item.name} className="accessory-img" />
                    <button className="add-to-cart-btn">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="accessory-info">
                    <h4 className="accessory-name">{item.name}</h4>
                    <p className="accessory-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
