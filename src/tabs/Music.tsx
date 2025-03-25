import React from "react";
import { motion } from "framer-motion";
import '../css/music.css';

  


const Music: React.FC = () => {
    
  return (
    <motion.div
      className="music-section"
      id="music-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}

    >
      <motion.div
        className="music-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Music Section</h2>
        <p>Music Stuff</p>
      </motion.div>
    </motion.div>
  );
};

export default Music;
