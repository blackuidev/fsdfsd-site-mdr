"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
// Assuming 'cn' utility is available from '@/components/lib/utils'
// import { cn } from "@/components/lib/utils"; 

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillCategory {
  title: string;
  skills: string[];
}

const uiUxSkills: SkillCategory[] = [
  {
    title: "Design Tools",
    skills: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator", "Miro"],
  },
  {
    title: "Prototyping & Wireframing",
    skills: ["Figma", "Axure RP", "InVision", "Marvel", "Principle", "Adobe XD"],
  },
  {
    title: "User Research",
    skills: ["User Interviews", "Surveys", "Usability Testing", "Card Sorting", "Persona Development", "Journey Mapping"],
  },
  {
    title: "Interaction Design",
    skills: ["Information Architecture", "Wireframing", "Prototyping", "User Flows", "Interaction Patterns", "Accessibility"],
  },
  {
    title: "Visual Design",
    skills: ["Typography", "Color Theory", "Layout", "Iconography", "Branding", "Design Systems"],
  },
  {
    title: "Front-end Basics",
    skills: ["HTML5", "CSS3", "JavaScript", "React (Basic)", "Tailwind CSS", "Git"],
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primarylw to-purple-600">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate UI/UX developer dedicated to crafting intuitive, engaging, and beautiful digital experiences.
            With a keen eye for detail and a user-centric approach, I transform complex problems into elegant solutions.
          </p>
        </motion.section>

        {/* Biography Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-8 rounded-lg shadow-lg border border-gray-200 dark:border-[#1a1b1b]"
        >
          <h2 className="text-3xl font-semibold mb-6 text-primarylw">Biography</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hello! I'm [Your Name], a UI/UX developer with [X years] of experience in creating user-centered design solutions.
            My journey into the world of design began with a fascination for how people interact with technology.
            I believe that great design is invisible, allowing users to achieve their goals effortlessly.
            I thrive on understanding user needs, translating them into compelling designs, and collaborating with development teams to bring these visions to life.
            When I'm not designing, you can find me exploring new design trends, reading sci-fi, or hiking.
          </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card p-8 rounded-lg shadow-lg border border-gray-200 dark:border-[#1a1b1b]"
        >
          <h2 className="text-3xl font-semibold mb-6 text-primarylw">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Senior UI/UX Designer - Tech Innovators Inc.</h3>
              <p className="text-sm text-muted-foreground">Jan 2021 – Present</p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Led the design of a flagship mobile application, increasing user engagement by 25%.</li>
                <li>Conducted extensive user research, including interviews and usability testing, to inform design decisions.</li>
                <li>Collaborated with product managers and engineers to ensure design feasibility and implementation accuracy.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">UI Designer - Creative Solutions LLC</h3>
              <p className="text-sm text-muted-foreground">Jun 2018 – Dec 2020</p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Designed responsive web interfaces for various clients across different industries.</li>
                <li>Developed design systems and style guides to maintain brand consistency.</li>
                <li>Worked closely with front-end developers to implement designs with pixel precision.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-card p-8 rounded-lg shadow-lg border border-gray-200 dark:border-[#1a1b1b]"
        >
          <h2 className="text-3xl font-semibold mb-6 text-primarylw">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">M.Sc. Human-Computer Interaction - University of Design</h3>
              <p className="text-sm text-muted-foreground">Sept 2016 – May 2018</p>
              <p className="text-muted-foreground mt-1">Focused on advanced interaction design principles and user research methodologies.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">B.A. Graphic Design - Art & Tech College</h3>
              <p className="text-sm text-muted-foreground">Sept 2012 – May 2016</p>
              <p className="text-muted-foreground mt-1">Developed strong foundational skills in visual communication and aesthetics.</p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-card p-8 rounded-lg shadow-lg border border-gray-200 dark:border-[#1a1b1b]"
        >
          <h2 className="text-3xl font-semibold mb-6 text-primarylw">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uiUxSkills.map((category, catIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      custom={skillIndex}
                    >
                      <Badge variant="secondary" className="px-4 py-2 text-md rounded-full bg-primarylw/10 text-primarylw border-primarylw/20">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
