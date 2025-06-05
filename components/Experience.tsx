'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    company: "DstarTechnology",
    role: "Full Stack Developer Intern",
    duration: "May 2025 – Present",
    tech: ["React", "Node.js", "TypeScript", "React Query", "Axios"],
    description:
      "Working on both frontend and backend. Migrated Axios calls to React Query and implemented mutation logic. Ongoing development and enhancement of full-stack features."
  },
  {
    company: "CreaxOS",
    role: "Backend Developer Intern",
    duration: "June 2025 – Present",
    tech: ["Node.js", "Express", "TypeScript", "Supabase"],
    description:
      "Focused on backend development. Built RESTful APIs, implemented middleware, and integrated with Supabase. Continuously enhancing backend architecture and performance."
  }
]

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dotPositions, setDotPositions] = useState<number[]>([])
  const [progressHeight, setProgressHeight] = useState(0)

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top + window.scrollY

      const dots = containerRef.current.querySelectorAll('.timeline-dot')
      const positions = Array.from(dots).map(dot => {
        const rect = dot.getBoundingClientRect()
        return rect.top + window.scrollY - containerTop + rect.height / 2
      })

      setDotPositions(positions)
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const onScroll = () => {
      const container = containerRef.current
      if (!container) return 
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top + window.scrollY
      const containerHeight = container.offsetHeight

      const scrollY = window.scrollY + window.innerHeight / 2
      const relativeScroll = scrollY - containerTop

      if (relativeScroll <= 0) {
        setProgressHeight(0)
        return
      }
      if (relativeScroll >= containerHeight) {
        setProgressHeight(containerHeight)
        return
      }

      let fill = 0
      for (let pos of dotPositions) {
        if (pos <= relativeScroll) {
          fill = pos
        } else {
          break
        }
      }
      setProgressHeight(fill)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [dotPositions])

  return (
    <section
      id="experience"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Experience
        </h2>

        <div className="relative pl-8 sm:pl-12" ref={containerRef}>
          {/* Timeline vertical line */}
          <div className="absolute left-3 sm:left-6 top-0 h-full w-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
          {/* Animated progress bar */}
          <motion.div
            className="absolute left-3 sm:left-6 top-0 w-1 bg-blue-500 rounded-full origin-top"
            style={{ height: progressHeight }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-[-18px] sm:left-[-10px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ml-6 sm:ml-10">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.role} @ <span className="text-blue-600">{exp.company}</span>
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience