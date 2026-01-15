"use client";

import Link from "next/link";
import resumeData from "@/data/resume";
import Timeline from "@/components/Timeline";
import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function Home() {
  const { name, title, location, contact, experiences, education, skills } = resumeData;

  return (
    <>
      {/* Hero Section */}
      <Section id="home" className="flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              {name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700">{title}</p>
            <p className="text-lg text-gray-600">{location}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 text-accent"
          >
            <a
              href={`mailto:${contact.email}`}
              className="hover:underline transition-colors"
            >
              {contact.email}
            </a>
            {contact.website && (
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
              >
                Website
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
              >
                LinkedIn
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors"
              >
                GitHub
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-sm"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <Timeline experiences={experiences} />
          </motion.div>

          {education && education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
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

          {skills && skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <Link
              href="/resume"
              className="inline-block px-6 py-2 text-accent border-2 border-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-colors"
            >
              View Full Resume
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Projects Preview Section */}
      <Section id="projects">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects showcasing problem-solving, technical skills, and impact.
            </p>
          </motion.div>

          <div className="grid gap-8 mb-12">
            {resumeData.projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 italic mb-4">{project.summary}</p>
                <p className="text-gray-700 mb-4">{project.impact}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-sm"
              >
                Send Email
              </a>
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
