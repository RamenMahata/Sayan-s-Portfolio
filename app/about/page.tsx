"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Python",
  "SQL",
  "Excel",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Power BI",
  "Tableau",
  "Jupyter",
  "Git",
  "Statistics",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground">Get to know more about my journey in data analysis</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sayan Sasmal"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Passionate About Data-Driven Solutions</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am a self-driven data analysis enthusiast passionate about uncovering insights through data. I have
                  hands-on experience with Python (Pandas, NumPy, Matplotlib), SQL, Excel, Power BI, and Tableau.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I enjoy building dashboards, solving business problems, and visualizing complex data in a simple way.
                  My goal is to help organizations make informed decisions by transforming raw data into actionable
                  insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not analyzing data, you can find me exploring new visualization techniques, learning about
                  machine learning algorithms, or contributing to open-source projects.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
