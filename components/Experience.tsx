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
  
  // add more experiences...
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
        // Dot center relative to container top, in pixels
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
      if(container == null){
        return null ;
      }
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top + window.scrollY
      const containerHeight = container.offsetHeight

      // Current scroll position relative to top of container
      const scrollY = window.scrollY + window.innerHeight / 2 // middle of viewport as trigger
      const relativeScroll = scrollY - containerTop

      if (relativeScroll <= 0) {
        setProgressHeight(0)
        return
      }
      if (relativeScroll >= containerHeight) {
        setProgressHeight(containerHeight)
        return
      }

      // Find max dot position <= relativeScroll
      let fill = 0
      for (const pos of dotPositions) {
        if (pos <= relativeScroll) {
          fill = pos
        } else {
          break
        }
      }
      setProgressHeight(fill)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Initial call
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [dotPositions])

  return (
    <section
      id="experience"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
       
        <h2 className="text-4xl font-extrabold mb-12 text-center uppercase tracking-wider">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

        <div
          ref={containerRef}
          className="relative pl-10 space-y-20"
          style={{ minHeight: experiences.length * 180 }}
        >
          {/* Progress bar */}
          <motion.div
            animate={{ height: progressHeight }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full origin-top"
            />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-6 top-4 timeline-dot">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md border-4 border-white dark:border-gray-900" />
              </div>

              {/* Card */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-300 transition-all hover:shadow-2xl">
               <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
                  {exp.role}{' '}@ {' '}
                  <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800/30 dark:to-purple-700/30 text-blue-700 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience