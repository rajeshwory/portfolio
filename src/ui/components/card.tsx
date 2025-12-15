import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/domain/types";

interface CardProps {
  project: Project;
}

/**
 * Card Component
 * Displays project information with hover effects
 */
export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-gray-50 rounded-lg overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image */}
      {project.imageUrl && (
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white text-gray-500 text-sm rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Live Demo →
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

