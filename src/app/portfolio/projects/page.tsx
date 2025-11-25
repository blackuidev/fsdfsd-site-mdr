import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

const dummyProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform Redesign',
    description: 'A comprehensive UI/UX overhaul for a fashion e-commerce platform, focusing on user flow optimization, visual appeal, and conversion rate improvement.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-dce5d57b561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '#',
    tags: ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'E-commerce'],
  },
  {
    id: '2',
    title: 'Mobile Banking App Experience',
    description: 'Designed an intuitive and secure mobile banking application from the ground up, enhancing user experience for daily financial transactions and account management.',
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b1a3013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '#',
    tags: ['Mobile UI', 'Interaction Design', 'User Testing', 'Sketch', 'FinTech'],
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'Developed a responsive and interactive data visualization dashboard for business intelligence, prioritizing clarity, actionable insights, and customizability.',
    imageUrl: 'https://images.unsplash.com/photo-1518655293290-db0d5885c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '#',
    tags: ['Data Visualization', 'Dashboard Design', 'Wireframing', 'React', 'Analytics'],
  },
  {
    id: '4',
    title: 'Healthcare Patient Portal',
    description: 'Improved the patient experience for an online healthcare portal, streamlining appointment booking, medical record access, and communication with providers.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-bf83141f967a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '#',
    tags: ['Healthcare UX', 'Accessibility', 'Service Design', 'Adobe XD', 'User Flows'],
  },
  {
    id: '5',
    title: 'SaaS Onboarding Flow',
    description: 'Designed and implemented a seamless onboarding experience for a new SaaS product, reducing churn and increasing feature adoption through intuitive guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1551288259-7b7d7f7e9f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '#',
    tags: ['SaaS UX', 'Onboarding', 'User Journeys', 'Figma', 'Product Design'],
  },
  {
    id: '6',
    title: 'Educational App Gamification',
    description: 'Integrated gamification elements into an educational mobile application to boost student engagement and motivation, leading to higher completion rates.',
    imageUrl: 'https://images.unsplash.com/photo-1533745848666-4e58b9d3b1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '#',
    tags: ['Gamification', 'EdTech', 'User Engagement', 'Interaction Design', 'UI Animation'],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My UI/UX Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-card border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primarylw">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primarylw hover:underline font-medium"
                >
                  View Project
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
