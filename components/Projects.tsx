import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const Projects: React.FC = () => {
  const projects = [
    {
      title: "PayEase (Payment System)",
      description:
        "A robust microservices-based payment processing system with advanced security features and real-time transaction handling.",
      technologies: [
        "Microservices",
        "API Gateway",
        "Kafka",
        "Redis",
        "Next.js",
        "React",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "NextAuth",
      ],
      status: "Completed",
      github: "https://github.com/HarshalRawal/paytm-project-main"
    },
    {
      title: "Zapier-like Automation Tool",
      description:
        "An extensible platform for creating automated workflows between various web services, featuring a user-friendly interface for creating complex integrations.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Docker", "RESTful APIs", "OAuth2", "TypeScript"],
      status: "Ongoing",
      github : "https://github.com/kedar000/zapier"
    },{
      title: "EV Slot Booking System",
      description:
        "A platform that allows users to search, book, and manage electric vehicle (EV) charging slots in various locations, providing a seamless booking experience integrated with real-time station availability.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Docker", "Kafka", "TypeScript", "Redis"],
      status: "Ongoing",
      github: "https://github.com/kedar000/EV-slot-booking-",
    },
    {
      title: "Online Food Delivery Platform",
      description:
        "A scalable food delivery system featuring real-time order tracking, multi-vendor support, and intelligent order routing.",
      technologies: ["WebSockets", "Redis", "Pub/Sub", "Queues", "Microservices", "Node.js", "Express", "MongoDB"],
      status: "Ongoing",
      github: "https://github.com/kedar000/food-delivery"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center uppercase tracking-wider">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              
              <Card className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent group-hover:border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    {project.status}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="bg-blue-50/50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-gray-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.github && (
                    <div className="mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span className="font-medium">View Code</span>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects