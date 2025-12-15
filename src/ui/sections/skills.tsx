"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/ui/components/section-heading";
import { SkillBadge } from "@/ui/components/skill-badge";
import { skills } from "@/data/skills";

/**
 * Skills Section
 * Display of technical skills organized by category
 */
export const Skills: React.FC = () => {
  const categories = {
    core: skills.filter((s) => s.category === "core"),
    library: skills.filter((s) => s.category === "library"),
    tool: skills.filter((s) => s.category === "tool"),
    testing: skills.filter((s) => s.category === "testing"),
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading subtitle="Technologies I work with">
          Skills & Technologies
        </SectionHeading>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.core.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Libraries & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Libraries & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.library.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Tools & Build Systems
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.tool.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Testing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Testing
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.testing.map((skill, index) => (
                <SkillBadge key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


