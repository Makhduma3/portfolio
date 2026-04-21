import { motion } from 'framer-motion';
import {
  Shield,
  Cpu,
  Brain,
  School,
  MapPin,
} from 'lucide-react';
import DocumentButtons from '../components/DocumentButtons';
import ParticlesBackground from '../components/ParticlesBackground';

export default function About() {
  const expertise = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'DDoS attack detection and mitigation for IoT environments.',
      achievements: [
        'DDoS Detection & Mitigation',
        'Game-Theoretic Defence Models',
        'Explainable AI for Security',
      ],
    },
    {
      icon: Cpu,
      title: 'IoT Systems',
      description:
        'Design of secure IoT testbeds and real-world network modeling.',
      achievements: [
        'Edge IoT Testbed Development',
        'Traffic Monitoring (Zeek)',
        'Device-Level Behaviour Modelling',
      ],
    },
    {
      icon: Brain,
      title: 'AI for Security',
      description:
        'Machine learning, federated learning, and lightweight LLM-based security systems.',
      achievements: [
        'Federated Learning Models',
        'Intent-Aware Detection',
        'Real-Time Anomaly Detection',
      ],
    },
    {
      icon: School,
      title: 'Academia',
      description:
        'Teaching, mentoring, and curriculum development in AI and cybersecurity.',
      achievements: [
        'Graduate & Undergraduate Mentorship',
        'Course Development',
        'Research Supervision',
      ],
    },
  ];

  const stats = [
    { value: '15+', label: 'Publications' },
    { value: '10+', label: 'Awards' },
    { value: '50+', label: 'Students Mentored' },
    { value: '5', label: 'Countries' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-2/5 lg:sticky lg:top-24"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">

                {/* PROFILE IMAGE */}
                <div className="flex justify-center mb-6">
                  <img
                    src={`${import.meta.env.BASE_URL}website-pic.jpg`}
                    alt="Makhduma Saiyed"
                    className="w-40 h-40 object-cover rounded-xl border border-gray-200 shadow-sm"
                  />
                </div>

                {/* NAME */}
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Makhdumabanu Saiyed
                  </h1>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Assistant Professor
                  </p>

                  <p className="text-sm text-gray-500">
                    Computer Science
                  </p>
                </div>

                {/* BIO */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-6">
                  My research focuses on AI-driven cybersecurity, particularly
                  in IoT and distributed systems. I work on intent-aware
                  detection, federated learning, and lightweight LLM-based
                  reasoning to design scalable and practical defence systems.
                </p>

                {/* POSITION */}
                <div className="border-t pt-4">
                  <div className="flex items-start gap-3">
                    <School className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">
                        July 2025 – Present
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Trent University
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Oshawa, Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="mt-6">
                  <DocumentButtons />
                </div>

              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-3/5 space-y-12"
            >

              {/* AREAS OF EXPERTISE */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Areas of Expertise
                </h2>

                <div className="space-y-8">
                  {expertise.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 pb-4"
                    >
                      <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-2">
                        {item.description}
                      </p>

                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {item.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS (NO TITLE) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-md p-4 text-center"
                  >
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
