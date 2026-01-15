"use client";

import { Project } from "@/data/resume";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
            {project.title}
          </h2>
          <p className="text-lg text-gray-600 italic">{project.summary}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Problem
            </h3>
            <p className="text-gray-700 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Approach
            </h3>
            <p className="text-gray-700 leading-relaxed">{project.approach}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Impact
            </h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              {project.impact}
            </p>
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            {project.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline text-sm font-medium transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
