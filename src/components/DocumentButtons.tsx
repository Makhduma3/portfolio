import { useState } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import PDFViewer from './PDFViewer';

export default function DocumentButtons() {
  const [selectedPDF, setSelectedPDF] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Commented out PDF buttons
        <button
          onClick={() => setSelectedPDF({ url: '/resume.pdf', title: 'Resume' })}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FileText className="w-5 h-5" />
          View Resume
        </button>
        <button
          onClick={() => setSelectedPDF({ url: '/cover-letter.pdf', title: 'Cover Letter' })}
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <FileText className="w-5 h-5" />
          View Cover Letter
        </button>
        */}

        <a
          href="https://scholar.google.co.in/citations?user=klmjOUwAAAAJ&hl=enm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ExternalLink className="w-5 h-5" />
          Google Scholar
        </a>
        <a
          href="https://ieeexplore.ieee.org/author/37089923814"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <ExternalLink className="w-5 h-5" />
          IEEE
        </a>
      </div>

      {selectedPDF && (
        <PDFViewer
          url={selectedPDF.url}
          title={selectedPDF.title}
          isOpen={!!selectedPDF}
          onClose={() => setSelectedPDF(null)}
        />
      )}
    </>
  );
}
