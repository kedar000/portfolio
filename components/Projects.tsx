import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { title } from "process"

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
      title: "Online Food Delivery Platform",
      description:
        "A scalable food delivery system featuring real-time order tracking, multi-vendor support, and intelligent order routing.",
      technologies: ["WebSockets", "Redis", "Pub/Sub", "Queues", "Microservices", "Node.js", "Express", "MongoDB"],
      status: "Ongoing",
      github: "https://github.com/kedar000/food-delivery"
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
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
            <CardDescription>{project.status}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            {/* GitHub Link */}
            {project.github && (
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
  )
}

export default Projects

