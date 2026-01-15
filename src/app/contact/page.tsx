"use client";

import resumeData from "@/data/resume";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { name, contact } = resumeData;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          &apos;always open to discussing new opportunities, interesting projects, or just having a conversation about technology and design.
          </p>
        </div>

        <div className="space-y-6 pt-8">
          <div className="flex flex-col items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-sm text-lg"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {contact.website && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Website
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-12 text-gray-500 text-sm"
        >
          <p>I typically respond within 24-48 hours.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
