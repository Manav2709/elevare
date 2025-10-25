"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
  "Impactful Storytelling",
  "Creative Campaigns",
  "Data-Driven Strategy",
  "Brand Transformation",
];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-18 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}