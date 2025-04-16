import { motion } from 'framer-motion';
import { GraduationCap, User, Building2, Award } from 'lucide-react';
import type { Education as EducationType } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
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
            Educational Background
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic qualifications and research focus areas.
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree} in {edu.field}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
                <div className="md:ml-auto">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>

              {edu.thesis_title && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Thesis
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.thesis_title}
                  </p>
                </div>
              )}

              {(edu.supervisor || edu.supervisors) && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {edu.supervisors ? 'Supervisors' : 'Supervisor'}
                  </h4>
                  <div className="space-y-4">
                    {edu.supervisor && (
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {edu.supervisor.name}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            {edu.supervisor.designation}
                            {edu.supervisor.department && `, ${edu.supervisor.department}`}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            {edu.supervisor.institution}
                          </p>
                        </div>
                      </div>
                    )}
                    {edu.supervisors?.map((supervisor, supIndex) => (
                      <div key={supIndex} className="flex items-start gap-3">
                        <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {supervisor.name}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            {supervisor.designation}
                            {supervisor.department && `, ${supervisor.department}`}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400">
                            {supervisor.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}