/**
 * Domain Types
 * Type definitions for the portfolio application
 */

export interface Profile {
  name: string;
  title: string;
  intro: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

export interface AboutContent {
  description: string;
  passions: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "core" | "library" | "tool" | "testing";
}

export interface NavItem {
  label: string;
  href: string;
}

