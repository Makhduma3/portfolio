import { motion } from 'framer-motion';
import {
  Shield,
  Cpu,
  Brain,
  School,
  Award,
  Users,
  BookOpen,
  Globe,
  Zap,
  Trophy,
  Rocket,
  MapPin,
  Mail,
} from 'lucide-react';
import DocumentButtons from '../components/DocumentButtons';
import ParticlesBackground from '../components/ParticlesBackground';

export default function About() {
  const expertise = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Specialized in DDoS attack detection and defence mechanisms for IoT networks.',
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
        'Design and deployment of secure IoT testbed environments for modeling real-world network behavior and attack scenarios.',
      achievements: [
        'Edge IoT Testbed Development',
        'Traffic Monitoring (Zeek, Packet Analysis)',
        'Sensor & Device-Level Modelling',
      ],
    },
    {
      icon: Brain,
      title: 'AI for Security',
      description:
        'Development of intelligent and scalable security models using machine learning, federated learning, and lightweight LLM-assisted reasoning.',
      achievements: [
        'Federated Learning Models',
        'Intent-Aware Detection Systems',
        'Lightweight LLM Integration',
        'Real-Time Anomaly Detection',
      ],
    },
    {
      icon: School,
      title: 'Academia',
      description: 'Extensive experience in teaching and research mentorship.',
      achievements: [
        'Graduate & Undergraduate Mentorship',
        'Course Development (AI & Security)',
        'Research Supervision & Collaboration',
      ],
    },
  ];

  const stats = [
    { icon: BookOpen, value: '15+', label: 'Research Papers' },
    { icon: Award, value: '10+', label: 'Awards' },
    { icon: Users, value: '50+', label: 'Students Mentored' },
    { icon: Globe, value: '5', label: 'Countries' },
  ];

  const achievements = [
    {
      icon: Zap,
      title: 'Research Impact',
      description:
        'Published groundbreaking research in top-tier IEEE journals, advancing the field of IoT security.',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description:
        'Maintained a perfect 4.0 GPA throughout Ph.D. studies while conducting cutting-edge research.',
    },
    {
      icon: Rocket,
      title: 'Innovation Leadership',
      description:
        'Led multiple successful research projects with international collaborations.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* ── Hero / Two-Column Section ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* ── LEFT COLUMN: Identity ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/5 lg:sticky lg:top-24"
            >
              {/* Name & Title */}
              <div className="mb-8">
                <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3">
                  Faculty Profile
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                  About Me
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6" />
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  As an Assistant Professor, I work in AI-driven cybersecurity,
                  with a focus on IoT and distributed systems. My research
                  investigates intent-aware detection, federated learning, and
                  lightweight LLM-based analysis to understand and defend
                  against complex cyber threats. I aim to build intelligent,
                  scalable, and real-world security frameworks for
                  next-generation smart and connected systems.
                </p>
              </div>

              {/* Current Designation Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8 border border-blue-100 dark:border-gray-600">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shrink-0">
                    <School className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      July 2025 – Present
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Assistant Professor
                    </h3>
                  </div>
                </div>
                <div className="pl-13 space-y-2 ml-1">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Department of Computer Science
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Trent University
                  </p>
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>Oshawa, Ontario, Canada</span>
                  </div>
                </div>
              </div>

              {/* CV / Document Buttons */}
              <DocumentButtons />
            </motion.div>

            {/* ── RIGHT COLUMN: Stats + Expertise ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-3/5 space-y-12"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 text-center flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-2">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Achievements */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full inline-block" />
                  Key Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="inline-block p-2.5 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-3">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full inline-block" />
                  Areas of Expertise
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
