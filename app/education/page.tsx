"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Award, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { educations } from "@/data/education"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function EducationPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-lg text-muted-foreground">
            My academic journey and the knowledge that shaped my career
          </p>
        </motion.div>

        <div className="space-y-8">
          {educations.map((education, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl mb-2">
                          {education.degree}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {education.institution}
                        </CardDescription>
                      </div>
                    </div>
                    {education.gpa && (
                      <Badge variant="secondary" className="text-sm font-semibold">
                        GPA: {education.gpa}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                    <span>{education.duration}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Overview
                      </h4>
                      <ul className="space-y-2">
                        {education.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.subjects.map((subject, i) => (
                          <Badge key={i} variant="outline" className="text-sm">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {education.achievements && education.achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {education.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">🏆</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
