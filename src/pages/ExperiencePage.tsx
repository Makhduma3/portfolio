import { motion } from 'framer-motion';
import { GraduationCap, Users, Building2 } from 'lucide-react';
import type { Experience } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const categories = [
    {
      title: 'Teaching Experience',
      icon: Users,
      key: 'Teaching Experience',
    },
    {
      title: 'Research Experience',
      icon: GraduationCap,
      key: 'Research Experience',
    },
    {
      title: 'Industry Experience',
      icon: Building2,
      key: 'Industry Experience',
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Experience
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Academic, research, and industry background.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const roles =
              experiences.find((exp) => exp.category === category.key)?.roles || [];

            if (roles.length === 0) return null;

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Category label */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {category.title}
                  </h3>
                </div>

                {/* Role cards */}
                <div className="space-y-4 border-l border-gray-200 dark:border-gray-700 pl-6 ml-3">
                  {roles.map((role, roleIndex) => (
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: roleIndex * 0.06 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <span className="absolute -left-[1.65rem] top-4 w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900" />

                      {/* Card */}
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5">

                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                              {role.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                              {role.organization}
                            </p>
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 sm:text-right mt-0.5">
                            {role.duration}
                          </span>
                        </div>

                        {/* Responsibilities */}
                        {role.responsibilities && role.responsibilities.length > 0 && (
                          <ul className="space-y-1.5 mt-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                            {role.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-600 dark:text-gray-300 flex gap-2"
                              >
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        )}

                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
