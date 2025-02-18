"use client"

import type React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Github } from "lucide-react" // Added Github icon
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()
  const [activeSection, setActiveSection] = useState("Home")
  const [hidden, setHidden] = useState(false)

  const sections = ["Home", "About", "Skills", "Projects", "Contact"]

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sectionOffsets = sections.map(section => {
      const el = document.getElementById(section.toLowerCase())
      return el ? el.offsetTop : 0
    })
    
    const currentSectionIndex = sectionOffsets.findIndex(offset => latest < offset - 100) - 1
    if (currentSectionIndex >= 0) {
      setActiveSection(sections[currentSectionIndex])
    }

    // Hide/show navbar logic
    const previous = scrollY.getPrevious()
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="text-2xl font-bold relative group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              KK
            </span>
          </motion.a>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8 relative">
              {sections.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className={`relative px-2 py-1 ${
                    activeSection === section 
                      ? "text-blue-500" 
                      : "text-gray-600 dark:text-gray-300"
                  } transition-colors`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* GitHub Button */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a 
                  href="https://github.com/kedar000" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-[1.2rem] w-[1.2rem]" />
                </a>
              </Button>

              {/* Theme Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-full"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
                <Moon className="hidden dark:block h-[1.2rem] w-[1.2rem]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar