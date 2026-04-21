import { motion } from 'framer-motion';
import { Shield, Cpu, Brain, School, MapPin } from 'lucide-react';
import DocumentButtons from '../components/DocumentButtons';
import ParticlesBackground from '../components/ParticlesBackground';

export default function About() {
  const expertise = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'DDoS attack detection and mitigation for IoT environments.',
      tags: ['DDoS Detection & Mitigation', 'Game-Theoretic Defence', 'Explainable AI for Security'],
    },
    {
      icon: Cpu,
      title: 'IoT Systems',
      description: 'Design of secure IoT testbeds and real-world network modeling.',
      tags: ['Edge IoT Testbed Development', 'Traffic Monitoring (Zeek)', 'Device-Level Behaviour Modelling'],
    },
    {
      icon: Brain,
      title: 'AI for Security',
      description: 'Machine learning, federated learning, and lightweight LLM-based security systems.',
      tags: ['Federated Learning Models', 'Intent-Aware Detection', 'Real-Time Anomaly Detection'],
    },
    {
      icon: School,
      title: 'Academia',
      description: 'Teaching, mentoring, and curriculum development in AI and cybersecurity.',
      tags: ['Graduate & Undergraduate Mentorship', 'Course Development', 'Research Supervision'],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* LEFT COLUMN — sticky profile card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-2/5 lg:sticky lg:top-24 self-start"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">

                {/* Photo */}
                <div className="flex justify-center mb-5">
                  <img
                    src={`${import.meta.env.BASE_URL}Mak.JPG`}
                    alt="Makhdumabanu Saiyed"
                    className="w-36 h-36 object-cover rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm"
                  />
                </div>

                {/* Name & role */}
                <div className="text-center mb-5">
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Makhdumabanu Saiyed
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Assistant Professor · Computer Science
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-5">
                  My research focuses on AI-driven cybersecurity, particularly in IoT and
                  distributed systems. I work on intent-aware detection, federated learning,
                  and lightweight LLM-based reasoning to design scalable and practical
                  defence systems.
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 dark:border-gray-700 mb-5" />

                {/* Affiliation */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                    <School className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500">July 2025 – Present</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Trent University</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      Peterborough, Canada
                    </p>
                  </div>
                </div>

                {/* Document buttons (e.g. Google Scholar, LinkedIn — whatever DocumentButtons renders) */}
                <div className="mt-5 border-t border-gray-100 dark:border-gray-700 pt-5">
                  <DocumentButtons />
                </div>

              </div>
            </motion.div>

            {/* RIGHT COLUMN — expertise */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-3/5 space-y-4"
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
                Areas of Expertise
              </h2>

              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="mt-0.5 p-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shrink-0">
                        <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title + description */}
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                          {item.description}
                        </p>

                        {/* Tag pills */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
