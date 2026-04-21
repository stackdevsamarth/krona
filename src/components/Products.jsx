import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap } from 'lucide-react';
import ContactButton from './ContactButton';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: "KROMA PRO-X",
    category: "Helmets",
    subtitle: "Advanced Impact Helmet",
    specs: "Class E • 450g",
    image: "https://images.unsplash.com/photo-1662309376159-b95fb193d96b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhbCUyMHNhZmV0eXxlbnwwfHwwfHx8MA%3D%3D",
    description: "The PRO-X is our flagship industrial helmet, featuring a high-density polyethylene shell and a 6-point suspension system for maximum impact protection and comfort during long shifts.",
    features: ["Impact Resistant Shell", "6-Point Suspension", "Ventilation Control"]
  },
  {
    id: 2,
    name: "AERO HARNESS v2",
    category: "Harnesses",
    subtitle: "Full Body Fall Protection",
    specs: "OSHA Compliant • 3 D-Rings",
    image: "https://images.unsplash.com/photo-1690973692388-239878450c7b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZHVzdHJpYWwlMjBzYWZldHl8ZW58MHx8MHx8fDA%3D",
    description: "Designed for high-altitude work, the AERO HARNESS v2 combines lightweight breathable mesh with heavy-duty webbing. It features quick-connect buckles and dorsal/side D-rings.",
    features: ["Breathable Mesh Padding", "Quick-Connect Buckles", "3 D-Ring Support"]
  },
  {
    id: 3,
    name: "VISON SHIELD",
    category: "Eyewear",
    subtitle: "Anti-Fog Safety Goggles",
    specs: "UV400 • Scratch Resistant",
    image: "https://images.unsplash.com/photo-1642873965200-4dd3753336b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZHVzdHJpYWwlMjBzYWZldHl8ZW58MHx8MHx8fDA%3D",
    description: "Crystal clear vision in the toughest conditions. The VISION SHIELD uses a permanent anti-fog coating and high-impact polycarbonate lenses that exceed ANSI Z87.1 standards.",
    features: ["Anti-Fog Coating", "Scratch Resistant", "Wide Field of View"]
  },
  {
    id: 4,
    name: "KROMA TOUGH-G",
    category: "Gloves",
    subtitle: "Cut-Resistant Grip",
    specs: "Level 5 Cut • Nitrile Coated",
    image: "https://images.unsplash.com/photo-1642873965200-4dd3753336b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZHVzdHJpYWwlMjBzYWZldHl8ZW58MHx8MHx8fDA%3D",
    description: "Protect your hands from sharp edges without sacrificing dexterity. Our TOUGH-G series features a reinforced nitrile palm for superior grip in oily or wet environments.",
    features: ["ANSI Level 5 Cut Protection", "Oil-Resistant Grip", "Touchscreen Compatible"]
  },
  {
    id: 5,
    name: "TITAN STEP",
    category: "Footwear",
    subtitle: "Steel-Toe Utility Boot",
    specs: "Waterproof • Slip-Resistant",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop",
    description: "Built for the most demanding sites. The TITAN STEP features a premium leather upper, electrical hazard protection, and a deep-lug outsole for ultimate traction.",
    features: ["Steel Toe Protection", "Electrical Hazard Rated", "Waterproof Leather"]
  }
];

const categories = ["All", "Helmets", "Harnesses", "Eyewear", "Gloves", "Footwear"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const targetRef = useRef(null);

  const filteredProducts = activeCategory === "All"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollDistance = filteredProducts.length > 1 ? `-${(filteredProducts.length - 1) * 30}%` : "0%";
  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollDistance]);

  return (
    <section className="products-section" id="products" ref={targetRef}>
      <div className="products-sticky">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="products-bg-video"
          src="/1 (4).mp4"
        />

        <div className="products-overlay"></div>

        <div className="products-content-wrapper">
          <div className="products-header container">
            <motion.h2
              className="products-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              THE PERFECT GEAR FOR EVERY JOB
            </motion.h2>

            <motion.div
              className="products-tabs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map(category => (
                <button
                  key={category}
                  className={`tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          <div className="products-carousel-container">
            <motion.div style={{ x }} className="products-track">
              <AnimatePresence mode='wait'>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="product-card"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="product-image-container">
                      <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-info">
                      <div className="product-logo-wrapper">
                        <h3 className="product-name">{product.name}</h3>
                      </div>
                      <div className="product-specs-bar">
                        <div className="specs-text">
                          <span>{product.subtitle}</span>
                          <span className="specs-divider">|</span>
                          <span>{product.specs}</span>
                        </div>
                        <button className="btn-primary product-buy-btn">View Details</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="product-modal-content"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProduct(null)}>
                <X size={24} />
              </button>

              <div className="modal-body">
                <div className="modal-image-side">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <div className="modal-info-side">
                  <span className="modal-category">{selectedProduct.category}</span>
                  <h2 className="modal-title">{selectedProduct.name}</h2>
                  <p className="modal-subtitle">{selectedProduct.subtitle}</p>

                  <div className="modal-description">
                    <h3>Overview</h3>
                    <p>{selectedProduct.description}</p>
                  </div>

                  <div className="modal-features">
                    <h3>Key Features</h3>
                    <ul>
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}><Zap size={14} className="feature-icon" /> {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-specs">
                    <Shield size={16} /> <span>{selectedProduct.specs}</span>
                  </div>

                  <ContactButton
                    productName={selectedProduct.name}
                    className="modal-action-btn"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
