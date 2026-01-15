"use client";

import { Experience } from "@/data/resume";
import { motion } from "framer-motion";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 sm:pl-12"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-2 w-3 h-3 bg-accent rounded-full border-4 border-white shadow-sm"></div>
          
          {/* Timeline line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-[5px] top-6 bottom-[-3rem] w-0.5 bg-gray-200"></div>
          )}

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-700 mt-1">{exp.company}</p>
              </div>
              <span className="text-sm sm:text-base text-gray-500 whitespace-nowrap">
                {exp.startDate} — {exp.endDate}
              </span>
            </div>
            
            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            
            {exp.metrics && exp.metrics.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.metrics.map((metric, metricIndex) => (
                  <div
                    key={metricIndex}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
                  >
                    <span className="text-lg font-semibold text-accent">
                      {metric.value}
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
