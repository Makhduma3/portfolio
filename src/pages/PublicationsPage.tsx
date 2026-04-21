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
  const sections = [
    {
      title: 'Journal Publications',
      icon: Book,
      key: 'journal_papers' as const,
      papers: publications.journal_papers,
    },
    {
      title: 'Conference Publications',
      icon: FileText,
      key: 'conference_papers' as const,
      papers: publications.conference_papers,
    },
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
            Publications
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Journal and conference contributions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;

            if (!section.papers || section.papers.length === 0) return null;

            return (
              <div key={sectionIndex}>

                {/* Section heading */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {section.title}
                  </h3>
                </div>

                {/* Paper cards */}
                <div className="grid gap-6">
                  {section.papers.map((paper, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card rounded-xl p-6"
                    >
                      {/* Title + year */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {paper.title}
                        </h4>
                        <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 sm:text-right">
                          {paper.year}
                        </span>
                      </div>

                      {/* Authors */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {paper.authors.join(', ')}
                      </p>

                      {/* Venue */}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {paper.journal || paper.conference}
                        {paper.volume && `, Vol. ${paper.volume}`}
                        {paper.pages && `, pp. ${paper.pages}`}
                        {paper.location && `, ${paper.location}`}
                      </p>

                      {/* Status + DOI */}
                      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                        {paper.status && (
                          <span className="text-xs text-gray-400 dark:text-gray-500">
                            {paper.status}
                          </span>
                        )}
                        {paper.doi && (
                          <a
                            href={`https://doi.org/${paper.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2 transition-colors"
                          >
                            DOI: {paper.doi}
                          </a>
                        )}
                      </div>

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
