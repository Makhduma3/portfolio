import { motion } from 'framer-motion';
import { Book, FileText } from 'lucide-react';
import type { Publication } from '../types';
import ParticlesBackground from '../components/ParticlesBackground';

interface PublicationsProps {
  publications: {
    journal_papers: Publication[];
    conference_papers: Publication[];
  };
}

export default function Publications({ publications }: PublicationsProps) {
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
            Research Publications
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contributing to the academic community through journal and conference publications.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Journal Papers */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Book className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Journal Publications
              </h3>
            </div>
            <div className="grid gap-6">
              {publications.journal_papers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {paper.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {paper.authors.join(', ')}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {paper.journal}
                    {paper.volume && `, Volume ${paper.volume}`}
                    {paper.pages && `, Pages ${paper.pages}`}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {paper.year}
                    </span>
                    {paper.status && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {paper.status}
                      </span>
                    )}
                    {paper.doi && (
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                      >
                        DOI: {paper.doi}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conference Papers */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Conference Publications
              </h3>
            </div>
            <div className="grid gap-6">
              {publications.conference_papers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {paper.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {paper.authors.join(', ')}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {paper.conference}
                    {paper.location && `, ${paper.location}`}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {paper.year}
                    </span>
                    {paper.status && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {paper.status}
                      </span>
                    )}
                    {paper.doi && (
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                      >
                        DOI: {paper.doi}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}