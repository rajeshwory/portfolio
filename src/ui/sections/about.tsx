"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/ui/components/section-heading";
import { aboutContent } from "@/data/profile";
import { ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
         subtitle="More about me" 
         subtitleLink="/about"
         subtitleIcon={<ArrowRight className="w-4 h-4" />}
        >
          About Me
        </SectionHeading>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-500 mb-12 leading-relaxed"
          >
            {aboutContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              What Drives Me
            </h3>
            <div className="space-y-4">
              {aboutContent.passions.map((passion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-500 text-lg">{passion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


