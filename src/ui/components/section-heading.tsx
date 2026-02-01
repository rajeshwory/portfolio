import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  subtitleLink?: string;
  subtitleIcon?: React.ReactNode;
}

/**
 * SectionHeading Component
 * Consistent heading style for all sections
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  subtitle,
  subtitleLink,
  subtitleIcon,
}) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
      >
        {children}
      </motion.h2>
      {subtitle && (
         <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: 0.1 }}
       >
         {subtitleLink ? (
           <Link
             href={subtitleLink}
             className="text-gray-400 text-lg max-w-2xl mx-auto inline-flex items-center gap-2 hover:text-primary transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
           >
             {subtitle}
             {subtitleIcon && subtitleIcon}
           </Link>
         ) : (
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             {subtitle}
           </p>
         )}
       </motion.div>
      )}
    </div>
  );
};


