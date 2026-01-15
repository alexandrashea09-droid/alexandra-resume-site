"use client";

import resumeData from "@/data/resume";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";

export default function ResumePage() {
  const { name, title, location, contact, experiences, education, skills } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
      {/* Header with Print Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 no-print">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Resume
          </h1>
          <p className="text-gray-600">Print-friendly version</p>
        </div>
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-sm"
        >
          Print / Save PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="space-y-12 print:space-y-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center border-b border-gray-200 pb-8 print:pb-4"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {name}
          </h1>
          <p className="text-xl text-gray-700 mb-2">{title}</p>
          <p className="text-gray-600 mb-4">{location}</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a href={`mailto:${contact.email}`} className="hover:text-accent">
              {contact.email}
            </a>
            {contact.website && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {contact.website}
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                GitHub
              </a>
            )}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 print:mb-4">
            Experience
          </h2>
          <Timeline experiences={experiences} />
        </motion.div>

        {/* Education */}
        {education && education.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 print:mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((ed, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
                >
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {ed.institution}
                    </p>
                    <p className="text-gray-700">{ed.degree}</p>
                  </div>
                  <span className="text-gray-500">{ed.years}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 print:mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 print:border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
