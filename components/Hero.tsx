"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Github } from "lucide-react"
import { FaGitlab } from "react-icons/fa"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, y: 100, rotate: 0 }}
            animate={{ opacity: [0, 0.9, 0], y: -100, rotate: 360 }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              delay: Math.random(),
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        >
          
          Hey, This is Kedar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl mb-8"
        >
          Full Stack Developer | Microservices Enthusiast
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* GitHub Button */}
          <a
            href="https://github.com/kedar000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              <Github className="h-5 w-5" /> GitHub <ArrowRight className="h-4 w-4" />
            </Button>
          </a>

          {/* GitLab Button */}
          <a
            href="https://gitlab.com/kedar000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
              <FaGitlab className="h-5 w-5" /> GitLab <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Animated Down Arrows */}
      <div className="mt-[75px] flex gap-6 relative z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          >
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero