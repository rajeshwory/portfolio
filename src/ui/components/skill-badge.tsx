import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/domain/types";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

/**
 * SkillBadge Component
 * Individual skill display with animation
 */
export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  const categoryColors = {
    core: "bg-primary/10 text-primary border-primary/20",
    library: "bg-secondary/10 text-secondary border-secondary/20",
    tool: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    testing: "bg-foreground/10 text-foreground border-foreground/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`px-4 py-2 rounded-full border-2 font-medium text-sm ${categoryColors[skill.category]}`}
    >
      {skill.name}
    </motion.div>
  );
};


