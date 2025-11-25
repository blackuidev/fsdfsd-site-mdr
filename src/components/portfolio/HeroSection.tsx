import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Subtle Background Gradient and Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black opacity-70"></div>
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-5 dark:opacity-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border-b border-r border-gray-300 dark:border-gray-800"></div>
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            variants={itemVariants}
          >
            Crafting Intuitive <br className="hidden sm:inline" /> Digital Experiences
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            I'm a UI/UX designer passionate about creating user-centered designs that are both beautiful and functional. Let's build something amazing together.
          </motion.p>
          <motion.div className="flex justify-center md:justify-start gap-4" variants={itemVariants}>
            <Button size="lg" className="px-8 py-3 text-base font-medium">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base font-medium">
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Image/Avatar Section */}
        <motion.div
          className="flex-shrink-0 mt-8 md:mt-0"
          variants={itemVariants}
        >
          <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primarylw dark:border-purple-600 shadow-xl">
            <AvatarImage src="https://via.placeholder.com/300" alt="UI/UX Designer Avatar" />
            <AvatarFallback className="text-6xl font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              JD
            </AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
