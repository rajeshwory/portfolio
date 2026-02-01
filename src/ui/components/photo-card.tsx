"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageCarousel } from "./image-carousel";

interface PhotoCardProps {
  images: string[];
  title: string;
  description: string;
  reversed?: boolean;
}

/**
 * PhotoCard Component
 * Displays an image (or carousel) alongside text content
 * Supports alternating layout with the `reversed` prop
 */
export const PhotoCard: React.FC<PhotoCardProps> = ({
  images,
  title,
  description,
  reversed = false,
}) => {
  // Render single image or carousel based on images array length
  const renderImageContent = () => {
    if (images.length === 1) {
      return (
        <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      );
    }
    return <ImageCarousel images={images} alt={title} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Image Section */}
        <div className="md:[direction:ltr] h-[300px] md:h-[400px] flex items-center">
          {renderImageContent()}
        </div>

        {/* Text Content Section */}
        <div className="md:[direction:ltr] flex flex-col justify-center p-8 md:p-12">
          <motion.h3
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
