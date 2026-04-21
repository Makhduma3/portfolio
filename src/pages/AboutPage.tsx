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
  Target,
  Trophy,
  Rocket,
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
      achievements: [ 'Edge IoT Testbed Development',
        'Traffic Monitoring (Zeek, Packet Analysis)',
        'Sensor & Device-Level Modelling'],
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

  const highlights = [
    {
      year: 'July 2025 - Present',
      title: 'Assistant Professor',
      description: `Department of Computer Science, Trent University \n Oshawa, Ontario, ON`,
      achievements: [
        // 'Developed novel defence mechanisms',
        // 'Published in top-tier journals',
        // 'Received multiple academic awards',
      ],
    },
    // {
    //   year: '2021-2024',
    //   title: 'Multiple Research Publications',
    //   description: 'Published in prestigious IEEE journals and conferences',
    //   achievements: [
    //     'High impact factor publications',
    //     'International conference presentations',
    //     'Research collaboration with industry',
    //   ],
    // },
    // {
    //   year: '2017-2021',
    //   title: 'Assistant Professor',
    //   description: 'Led cybersecurity and IoT initiatives at Parul University',
    //   achievements: [
    //     'Curriculum development',
    //     'Student mentorship',
    //     'Industry partnerships',
    //   ],
    // },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <br />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient mb-6">
              About Me
              <br />
              <br />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                As an Assistant Professor, I work in AI-driven cybersecurity, with a focus on IoT and distributed systems. 
                My research investigates intent-aware detection, federated learning, and lightweight LLM-based analysis to understand and defend against complex cyber threats. 
                I aim to build intelligent, scalable, and real-world security frameworks for next-generation smart and connected systems.
              </p>
              <DocumentButtons />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-4 pb-16 from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
<section className="py-20 relative">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
    >
      Key Achievements
    </motion.h2>

    {/* Centered grid layout */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="inline-block p-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Expertise Section */}
<section className="py-20 from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 relative">
  <div className="container mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
    >
      Areas of Expertise
    </motion.h2>

    {/* Adjusted grid layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {expertise.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl mx-auto"
        >
          <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6">
            <item.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {item.description}
          </p>
          <ul className="space-y-2">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Current Designation
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {item.year}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: item.description.replace(/\n/g, '<br />'), // Replace \n with <br />
                  }}
                />
                <ul className="space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
