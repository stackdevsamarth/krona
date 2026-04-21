import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap } from 'lucide-react';
import ContactButton from './ContactButton';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: "KROMA KA-1",
    category: "Workwear",
    subtitle: "High-Visibility Active Vest",
    specs: "ISO 20471 • Reflective",
    image: "https://i.postimg.cc/CxYNZyvy/KA.webp",
    description: "The KA-1 is a high-visibility active vest designed for maximum breathability and safety in low-light industrial environments.",
    features: ["Breathable Mesh", "4-Way Reflective Strips", "Quick-Access Pockets"]
  },
  {
    id: 2,
    name: "KROMA KC-CORE",
    category: "Workwear",
    subtitle: "Heavy-Duty Utility Jacket",
    specs: "Thermal • Water-Resistant",
    image: "https://i.postimg.cc/x1RPMs7f/KC.webp",
    description: "Built for extreme weather, the KC-CORE jacket provides thermal insulation and a reinforced outer shell to protect against the elements.",
    features: ["Thermal Lining", "Reinforced Shoulders", "Windproof Zippers"]
  },
  {
    id: 3,
    name: "KROMA K-COMPACT",
    category: "Workwear",
    subtitle: "Ergonomic Tool Belt",
    specs: "Adjustable • 12 Slots",
    image: "https://i.postimg.cc/VLXgLsW3/KCo.webp",
    description: "An ergonomic tool belt designed to distribute weight evenly across the waist, reducing fatigue during long shifts.",
    features: ["Padded Waistband", "Modular Attachments", "Heavy-Duty Buckle"]
  },
  {
    id: 4,
    name: "KROMA KD-X",
    category: "Gloves",
    subtitle: "Impact Protection Gloves",
    specs: "Level 4 Impact • ANSI rated",
    image: "https://i.postimg.cc/4x51V8MN/KD.webp",
    description: "The KD-X gloves feature molded TPR back-of-hand protection to shield against heavy impact and vibrations.",
    features: ["Impact Shielding", "Vibration Dampening", "Secure Wrist Closure"]
  },
  {
    id: 5,
    name: "KROMA KE-LITE",
    category: "Footwear",
    subtitle: "Lightweight Safety Sneaker",
    specs: "Composite Toe • Anti-Slip",
    image: "https://i.postimg.cc/13HKwWT6/KE.webp",
    description: "The KE-LITE combines the comfort of a sneaker with the protection of a safety boot. Perfect for indoor warehouse work.",
    features: ["Lightweight Sole", "Breathable Fabric", "Composite Safety Toe"]
  },
  {
    id: 6,
    name: "KROMA KF-FLEX",
    category: "Gloves",
    subtitle: "Precision Grip Gloves",
    specs: "Nitrile Coated • Cut A2",
    image: "https://i.postimg.cc/0yfCDt30/kf.webp",
    description: "Designed for high-dexterity tasks, the KF-FLEX provides a superior grip in both wet and dry conditions.",
    features: ["Ultra-Thin Knit", "Superior Grip", "Skin-Safe Material"]
  },
  {
    id: 7,
    name: "KROMA KO-PRO",
    category: "Footwear",
    subtitle: "All-Terrain Work Boot",
    specs: "Steel Toe • Waterproof",
    image: "https://i.postimg.cc/W1jnDR9j/Ko.webp",
    description: "The KO-PRO is built for the toughest outdoor sites, featuring a waterproof membrane and a deep-tread outsole.",
    features: ["Steel Toe Box", "Waterproof Membrane", "Self-Cleaning Tread"]
  },
  {
    id: 8,
    name: "KROMA KP-SHIELD",
    category: "Workwear",
    subtitle: "Flame-Resistant Coverall",
    specs: "NFPA 2112 • ARC Rated",
    image: "https://i.postimg.cc/0yxf6gVH/KP.webp",
    description: "Maximum protection for electrical and fire hazards. The KP-SHIELD is treated with advanced flame-resistant technology.",
    features: ["FR Treated Fabric", "Reinforced Stitching", "Multi-Hazard Protection"]
  },
  {
    id: 9,
    name: "KROMA KPA-TECH",
    category: "Footwear",
    subtitle: "Ankle-Support Safety Boot",
    specs: "6-inch • Puncture Resistant",
    image: "https://i.postimg.cc/4NpPN4QP/KPA.webp",
    description: "Providing superior ankle stability and a puncture-resistant midsole for dangerous environments.",
    features: ["Padded Collar", "Kevlar Midsole", "Anti-Fatigue Footbed"]
  },
  {
    id: 10,
    name: "KROMA KPR-RUNNER",
    category: "Footwear",
    subtitle: "Athletic Safety Shoe",
    specs: "ESD Rated • Breathable",
    image: "https://i.postimg.cc/yY0jY6yG/KPR.webp",
    description: "Ideal for electronics manufacturing where electrostatic discharge protection is critical.",
    features: ["ESD Protection", "Memory Foam Insole", "Non-Metallic"]
  },
  {
    id: 11,
    name: "KROMA KQ-QUICK",
    category: "Workwear",
    subtitle: "Fast-Dry Work Shirt",
    specs: "UPF 50+ • Moisture Wicking",
    image: "https://i.postimg.cc/6pw07sHy/KQ.webp",
    description: "Keep cool in the sun. The KQ-QUICK shirt wicks moisture away and protects against UV radiation.",
    features: ["Moisture Management", "Odor Resistant", "Sun Protection"]
  },
  {
    id: 12,
    name: "KROMA KR-ROBUST",
    category: "Workwear",
    subtitle: "Reinforced Work Pants",
    specs: "Cordura Knee • Triple Stitched",
    image: "https://i.postimg.cc/hPVsP41w/KR.webp",
    description: "Built for heavy lifting and crawling. These pants feature Cordura-reinforced knees and triple-stitched seams.",
    features: ["Knee Pad Pockets", "Utility Loop", "Abrasion Resistant"]
  },
  {
    id: 13,
    name: "KROMA AD-ULTRA",
    category: "Gloves",
    subtitle: "Cold-Weather Thermal Glove",
    specs: "Thinsulate • -20°C Rated",
    image: "https://i.postimg.cc/KY8DNPSn/krome-AD.webp",
    description: "Work comfortably in freezing temperatures with Thinsulate lining and a wind-blocking outer shell.",
    features: ["Thermal Insulation", "Waterproof Insert", "Grip Palm"]
  },
  {
    id: 14,
    name: "KROMA K-TOUGH",
    category: "Gloves",
    subtitle: "General Purpose Work Glove",
    specs: "Micro-Foam • Breathable",
    image: "https://i.postimg.cc/N0jk46q7/Krome-T.webp",
    description: "The versatile choice for everyday tasks, offering a perfect balance of protection and dexterity.",
    features: ["Micro-Foam Coating", "Ergonomic Fit", "Washable"]
  },
  {
    id: 15,
    name: "KROMA KS-SPEC",
    category: "Gloves",
    subtitle: "Specialized Handling Glove",
    specs: "Chemical Resistant • ANSI A4",
    image: "https://i.postimg.cc/DwgcLCD5/ks.webp",
    description: "High-level chemical resistance combined with cut protection for hazardous material handling.",
    features: ["Chemical Barrier", "Extended Cuff", "Textured Grip"]
  },
  {
    id: 16,
    name: "KROMA KST-STATIC",
    category: "Footwear",
    subtitle: "Anti-Static Safety Clog",
    specs: "Cleanroom Safe • Autoclavable",
    image: "https://i.postimg.cc/x1RPMs7q/Kst.webp",
    description: "Perfect for laboratories and pharmaceutical environments where static control and cleanliness are vital.",
    features: ["Static Dissipative", "Easy Sterilization", "Slip Resistant"]
  },
  {
    id: 17,
    name: "KROMA KTA-ARMOR",
    category: "Workwear",
    subtitle: "Tactical Response Vest",
    specs: "Modular • High Load",
    image: "https://i.postimg.cc/x1YRkrsS/KTA.webp",
    description: "A high-load tactical vest designed for rapid response and emergency management teams.",
    features: ["MOLLE Compatible", "Reinforced Drag Handle", "Quick Release"]
  },
  {
    id: 18,
    name: "KROMA KV-VISUAL",
    category: "Workwear",
    subtitle: "Enhanced Visibility Jacket",
    specs: "Class 3 • Weatherproof",
    image: "https://i.postimg.cc/MpDYVs4j/KV.webp",
    description: "The ultimate visibility solution for highway and airport ground crews.",
    features: ["Class 3 Standards", "Radio Loops", "Detachable Hood"]
  },
  {
    id: 19,
    name: "KROMA KZ-ZERO",
    category: "Footwear",
    subtitle: "Zero-Gravity Safety Boot",
    specs: "Composite • Ultra-Light",
    image: "https://i.postimg.cc/2SmwqpHj/KZ.webp",
    description: "Using advanced aerospace materials to create the lightest safety boot on the market.",
    features: ["Carbon Fiber Toe", "Weightless Sole", "Sport Fit"]
  },
  {
    id: 20,
    name: "KROMA KZE-X",
    category: "Gloves",
    subtitle: "Extreme Cut Shield",
    specs: "ANSI A9 • Highest Protection",
    image: "https://i.postimg.cc/QdsbBLf2/Kze.webp",
    description: "When only the highest level of protection will do. Designed for metal fabrication and glass handling.",
    features: ["Maximum Cut Resistance", "Heat Resistant", "Steel Fiber Reinforced"]
  }
];

const categories = ["All", "Footwear", "Workwear", "Gloves",];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const targetRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;
      setScrollAmount(Math.max(0, width - viewport));
    }
  }, [activeCategory, isMobile]);

  const filteredProducts = (activeCategory === "All"
    ? productsData
    : productsData.filter(p => p.category === activeCategory)).slice(0, 10);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollAmount]);

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
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="products-track"
            >
              <AnimatePresence mode='wait'>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="product-card"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="product-image-container">
                      <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-mobile-meta">
                        <span className="mobile-specs">{product.specs}</span>
                        <button className="mobile-view-btn">VIEW DETAILS</button>
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
