"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

/**
 * ImageCarousel Component
 * A reusable carousel with smooth Framer Motion transitions
 * Supports navigation via arrows and dot indicators
 */
export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  alt = "Photo" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Handle navigation to previous slide
  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle navigation to next slide
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle dot indicator click
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // If only one image, render without carousel controls
  if (images.length === 1) {
    return (
      <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden group">
      {/* Image slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-gray-500" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-gray-500" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-white w-4"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
