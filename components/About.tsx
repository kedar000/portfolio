"use client"

import { motion } from "framer-motion"
import { SiNextdotjs, SiTypescript, SiApachekafka, SiKubernetes } from "react-icons/si"

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Animated Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group w-full max-w-md"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
          <div className="relative bg-white dark:bg-gray-700 rounded-3xl p-6 shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/profile.jpg"
                alt="Kotha Kedareswar"
                className="w-full h-auto object-cover rounded-2xl border-4 border-white dark:border-gray-800"
              />
            </motion.div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -bottom-6 -right-6 flex gap-3">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
              >
                <SiNextdotjs className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg"
              >
                <SiTypescript className="w-6 h-6 text-purple-600" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-8"
        >
          <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Coding Enthusiast &<br/>Problem Solver
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> passionate about building scalable solutions. Currently architecting an EV Slot Booking System using:
            </p>
            
            {/* Tech Stack Visualization */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <SiNextdotjs className="w-6 h-6"/>, label: "Next.js" },
                { icon: <SiTypescript className="w-6 h-6"/>, label: "TypeScript" },
                { icon: <SiApachekafka className="w-6 h-6"/>, label: "Kafka" },
                { icon: <SiKubernetes className="w-6 h-6"/>, label: "K8s" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md"
                >
                  {tech.icon}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Highlight Section */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
              <p className="text-gray-700 dark:text-gray-300">
                When not coding, I'm exploring <span className="text-purple-600 font-medium">Web3 ecosystems</span>, 
                contributing to <span className="text-blue-600 font-medium">Open Source</span>, or enjoying 
                <span className="text-pink-600 font-medium"> anime marathons</span> 🎌
              </p>
            </div>

            {/* Signature Line */}
            <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-4">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Building solutions that scale, one microservice at a time"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe