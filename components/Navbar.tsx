"use client"

import type React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          KK
        </motion.a>
        <div className="flex items-center space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((section) => (
            <motion.a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {section}
            </motion.a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative"
          >
            <motion.div
              initial={{ rotate: 0, opacity: 1 }}
              animate={{ rotate: theme === "light" ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
              <Moon className="hidden dark:block h-[1.2rem] w-[1.2rem]" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar