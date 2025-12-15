"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/ui/components/section-heading";
import { Card } from "@/ui/components/card";
import { projects } from "@/data/projects";

/**
 * Projects Section
 * Grid display of project cards
 */
export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <SectionHeading subtitle="Some of my recent work">
          Projects
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 italic">
            More projects coming soon. Check back later!
          </p>
        </motion.div>
      </div>
    </section>
  );
};


