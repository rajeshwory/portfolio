"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/ui/components/button";
import { profile } from "@/data/profile";

/**
 * Hero Section
 * Landing section with name, title, and call-to-action
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="avatar.png"
              alt={profile.name}
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-gray-100 shadow-lg object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm {profile.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-2xl md:text-3xl text-gray-400 mb-8">
              {profile.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              {profile.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 text-center bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Resume
            </a>
            <Button href="#about" variant="secondary">
              About Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

