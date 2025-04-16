import { motion } from 'framer-motion';
import { Award as AwardIcon, Calendar, Building, DollarSign } from 'lucide-react';
import type { Award } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';

interface AwardsProps {
  awards: Award[];
}

export default function Awards({ awards }: AwardsProps) {
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
            Awards & Achievements
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition and accolades received throughout my academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                  <AwardIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {award.award}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>{award.year} {award.term}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Building className="w-5 h-5" />
                  <span>{award.institution}</span>
                </div>

                {award.amount && (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                    <DollarSign className="w-5 h-5" />
                    <span>{award.amount}</span>
                  </div>
                )}

                {award.project && (
                  <div className="mt-4 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Project: </span>
                      {award.project}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}