"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillsSectionProps {
  title?: string;
  skills?: {
    category: string;
    items: string[];
  }[];
}

const defaultSkills = [
  {
    category: "UI/UX Tools",
    items: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "Miro",
      "Maze",
      "UserTesting.com",
      "Axure RP",
      "ProtoPie",
      "Blender (Basic)"
    ]
  },
  {
    category: "Design Principles",
    items: [
      "User-Centered Design",
      "Information Architecture",
      "Interaction Design",
      "Usability Testing",
      "Accessibility (A11y)",
      "Design Systems",
      "Atomic Design",
      "Gestalt Principles",
      "Visual Hierarchy"
    ]
  },
  {
    category: "Front-end Technologies",
    items: [
      "HTML5",
      "CSS3 (Sass/Less)",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "RESTful APIs"
    ]
  },
  {
    category: "Other Expertise",
    items: [
      "Wireframing & Prototyping",
      "User Research",
      "Competitor Analysis",
      "Data Visualization",
      "Agile Methodologies",
      "Git & GitHub",
      "Webflow",
      "Storybook"
    ]
  }
];

const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "My Expertise",
  skills = defaultSkills,
}) => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="bg-white dark:bg-[#1a1b1b] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
