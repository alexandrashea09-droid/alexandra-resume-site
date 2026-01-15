"use client";

import resumeData from "@/data/resume";
import CaseStudyCard from "@/components/CaseStudyCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of projects showcasing problem-solving, technical expertise, and measurable impact.
        </p>
      </motion.div>

      <div className="space-y-8 sm:space-y-12">
        {resumeData.projects.map((project, index) => (
          <CaseStudyCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
