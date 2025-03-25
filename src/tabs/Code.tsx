import React from "react";
import { motion } from "framer-motion";
import '../css/code.css';

const Code: React.FC = () => {
  return (
    <motion.div
      className="code-section"
      id="code-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="code-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Code Section</h1>
        <p>Coding stuff...</p>
      </motion.div>
    </motion.div>
  );
};

export default Code;
