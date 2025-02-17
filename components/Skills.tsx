import type React from "react"
import { Badge } from "@/components/ui/badge"

const Skills: React.FC = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "Docker", level: 75 },
    { name: "Prisma", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Redis", level: 70 },
    { name: "Kafka", level: 65 },
    { name: "Microservices", level: 85 },
    { name: "API Development", level: 90 },
    { name: "Data Structures and Algorithms", level: 80 },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{skill.name}</span>
                <Badge variant="secondary">{skill.level}%</Badge>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills