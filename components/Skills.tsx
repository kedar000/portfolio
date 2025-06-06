"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiApollographql,
  SiLeetcode,
} from "react-icons/si"
import { FaJava, FaProjectDiagram } from "react-icons/fa"

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Microservices", icon: <FaProjectDiagram /> },
  { name: "API Dev", icon: <SiApollographql /> },
  { name: "DSA", icon: <SiLeetcode /> },
]

const triangleLayout = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11],
  [12, 13],
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        
        <h2 className="text-4xl font-extrabold mb-12 text-center uppercase tracking-wider">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        

        <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">
          {triangleLayout.map((row, i) => (
            <motion.div
              key={i}
              className="flex gap-6 justify-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {row.map((index) => {
                const skill = skills[index]
                return (
                  <motion.div
                    key={index}
                    className="w-28 h-28 flex flex-col items-center justify-center rounded-xl shadow-md text-white text-sm font-medium dark:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #3b82f6, #8b5cf6)", // from-blue-500 to-purple-600
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div>{skill.name}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills