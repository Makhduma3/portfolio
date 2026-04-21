import { motion } from 'framer-motion';
import { GraduationCap, Users, Building2 } from 'lucide-react';
import type { Experience } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const categories = [
    { title: 'Teaching Experience', icon: Users, key: 'Teaching Experience' },
    { title: 'Research Experience', icon: GraduationCap, key: 'Research Experience' },
    { title: 'Industry Experience', icon: Building2, key: 'Industry Experience' },
  ];

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            Experience
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Academic, research, and industry background.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const roles =
              experiences.find((exp) => exp.category === category.key)?.roles || [];

            if (roles.length === 0) return null;

            return (
              <div key={categoryIndex}>

                {/* Category heading */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {category.title}
                  </h3>
                </div>

                {/* Role cards */}
                <div className="grid gap-6">
                  {roles.map((role, roleIndex) => (
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: roleIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card rounded-xl p-6"
                    >
                      {/* Title + date */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {role.title}
                        </h4>
                        <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 sm:text-right">
                          {role.duration}
                        </span>
                      </div>

                      {/* Organization */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {role.organization}
                      </p>

                      {/* Responsibilities */}
                      {role.responsibilities && role.responsibilities.length > 0 && (
                        <ul className="space-y-1.5 border-t border-gray-100 dark:border-gray-700 pt-3">
                          {role.responsibilities.map((resp, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
