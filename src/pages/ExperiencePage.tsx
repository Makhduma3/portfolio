import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Users, Building2 } from 'lucide-react';
import type { Experience } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const categories = [
    {
      title: "Research Experience",
      icon: GraduationCap,
      color: "#3B82F6",
      roles: experiences.find(exp => exp.category === "Research Experience")?.roles || []
    },
    {
      title: "Teaching Experience",
      icon: Users,
      color: "#10B981",
      roles: experiences.find(exp => exp.category === "Teaching Experience")?.roles || []
    },
    {
      title: "Industry Experience",
      icon: Building2,
      color: "#6366F1",
      roles: experiences.find(exp => exp.category === "Industry Experience")?.roles || []
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my academic, research, and industry experience.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl" style={{ backgroundColor: category.color }}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </motion.div>

            <VerticalTimeline animate={true}>
              {category.roles.map((role, roleIndex) => (
                <VerticalTimelineElement
                  key={roleIndex}
                  className="vertical-timeline-element"
                  contentStyle={{
                    background: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid var(--border-color)' }}
                  date={role.duration}
                  iconStyle={{
                    background: category.color,
                    color: '#fff',
                    boxShadow: `0 0 0 4px ${category.color}40`,
                  }}
                  icon={<category.icon />}
                  position={roleIndex % 2 === 0 ? 'left' : 'right'}
                >
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                    {role.organization}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {role.responsibilities.map((resp, index) => (
                      <li key={index} className="text-base">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        ))}
      </div>
    </section>
  );
}