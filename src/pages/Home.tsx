import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Brain, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <img
                src="website-pic.jpg"
                alt="Makhduma Saiyed"
                className="object-cover -ml-2"
              />
            </motion.div>
          </div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Makhduma Saiyed
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
              Cybersecurity Researcher & IoT Specialist
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              Postdoctoral Fellow at University of Regina, advancing the frontiers of IoT security
              through innovative research in machine learning and cybersecurity defense mechanisms.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {[
              { icon: Shield, text: "Cybersecurity" },
              { icon: Cpu, text: "IoT Systems" },
              { icon: Brain, text: "Machine Learning" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-4 rounded-xl flex items-center gap-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors"
              >
                <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-900 dark:text-gray-100">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/about"
              className="group flex items-center gap-2 px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-8 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors"
            >
              Get in Touch
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/makhduma-saiyed-0981b8107/" },
              { icon: Mail, href: "mailto:makhduma03@gmail.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors"
              >
                <item.icon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}