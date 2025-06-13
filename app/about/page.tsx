"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground">Get to know more about my journey in data analysis</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                  <Image 
                    src="/images/ramen.jpeg"
                    alt="Sayan Sasmal"
                    width={320}
                    height={320}
                    sizes="(max-width: 768px) 16rem, 20rem"
                    priority
                    className="rounded-full object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Passionate About Data-Driven Solutions</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: isInView ? 0.1 * index : 0,
                    type: 'spring',
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-sm px-4 py-2 transition-colors duration-200 hover:bg-primary/10"
                  >
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
