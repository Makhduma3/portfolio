import { useState } from 'react';
import { X, Download } from 'lucide-react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface PDFViewerProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function PDFViewer({ url, isOpen, onClose, title }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-700 rounded-t-2xl border-b border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex items-center gap-4">
            <a
              href={url}
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-900 rounded-full animate-spin border-t-blue-500"></div>
              <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
                Loading document...
              </div>
            </div>
          </div>
        )}

        {/* PDF Viewer */}
        <div className="w-full h-full pt-16 pb-4 px-4">
          <div className="w-full h-full bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer
                fileUrl={url}
                onDocumentLoad={() => setIsLoading(false)}
                theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
              />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
}