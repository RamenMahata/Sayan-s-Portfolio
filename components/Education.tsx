"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { education } from "@/data/education"

export default function Education() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey has built a strong foundation in Computer Science and Data Science.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="p-6 rounded-xl bg-card border shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold text-blue-600">{edu.institution}</h3>
              <p className="text-lg font-medium mt-2">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">{edu.duration}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
