"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/ui/layouts/navbar";
import { photoCards } from "@/data/photos";
import { PhotoCard } from "@/ui/components/photo-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="py-20 min-h-screen bg-gray-50">
        <div className="container-custom">
          {/* Back button */}
          <Link 
            href="/#about" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Photo Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6"
          >
            <h2 className="text-3xl font-semibold text-foreground mb-8">
              Life Beyond Code
            </h2>
            <div className="space-y-12">
              {photoCards.map((card, index) => (
                <PhotoCard
                  key={card.id}
                  images={card.images}
                  title={card.title}
                  description={card.description}
                  reversed={index % 2 !== 0}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}