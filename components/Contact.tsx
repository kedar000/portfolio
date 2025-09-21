"use client"

import type React from "react"
import { motion } from "framer-motion"
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import { FaFilePdf } from "react-icons/fa"  // PDF icon for resume

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold mb-12 text-center uppercase tracking-wider">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-20 px-10">
          {/* Animated Connection Avatar */}
          <motion.div 
            className="relative group w-64 h-64 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            {/* Glowing orb */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
            
            {/* Animated connection network SVG */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Central node */}
              <circle cx="50" cy="50" r="8" fill="currentColor" className="text-blue-500" />
              
              {/* Satellite nodes */}
              {[0, 90, 180, 270].map((rotation, i) => (
                <g key={i} transform={`rotate(${rotation} 50 50)`}>
                  <motion.circle
                    cx="50"
                    cy="20"
                    r="4"
                    fill="currentColor"
                    className="text-purple-500"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                  <motion.path
                    d="M50 50 L50 20"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-blue-300"
                    strokeDasharray="0 1"
                    animate={{ strokeDasharray: ["0 1", "1 1", "0 1"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                </g>
              ))}
            </motion.svg>

            {/* Revolving Contact Icons */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <motion.a
                href="mailto:kedareswarkotha@gmail.com"
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.5 }}
              >
                <SiGmail className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              </motion.a>
              <motion.a
                href="https://wa.me/9703181979"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                whileHover={{ scale: 1.5 }}
              >
                <SiWhatsapp className="w-8 h-8 text-green-500 dark:text-green-400" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Channels */}
          <div className="space-y-8 flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Direct Reach</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:kedareswarkotha@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 bg-blue-100 dark:bg-gray-600 rounded-lg">
                    <SiGmail className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      kedareswarkotha@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://wa.me/9703181979"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 bg-green-100 dark:bg-gray-600 rounded-lg">
                    <SiWhatsapp className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">WhatsApp</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      +91 9703181979
                    </p>
                  </div>
                </motion.a>

                {/* Resume */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://drive.google.com/file/d/1Mk0HIa1l0bNH-a6Bzj6EqdTuyHJyazkL/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 bg-red-100 dark:bg-gray-600 rounded-lg">
                    <FaFilePdf className="w-6 h-6 text-red-500 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Resume</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      📄 View / Download Resume
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact