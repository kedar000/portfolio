"use client"

import { motion } from "framer-motion"

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-20"
        >

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center md:text-left space-y-1"
          >
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text pb-2"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            >
              Passionate Developer &amp;
              <br className="hidden md:inline" /> 
              <span className="whitespace-nowrap">Continuous Learner</span>
            </motion.h2>

            <div className="space-y-6 max-w-2xl mx-auto">
              <motion.p 
                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
              >
                I thrive in dynamic environments where I can architect innovative solutions to complex problems. My passion lies in building scalable systems and pushing the boundaries of modern web development.
              </motion.p>

              <motion.div 
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                  When not coding, I&apos;m exploring{' '}
                  <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Web3 ecosystems
                  </span>, contributing to{' '}
                  <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Open Source
                  </span>, or enjoying{' '}
                  <span className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                    anime marathons
                  </span>{' '}
                  🎌
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div 
            className="relative group w-48 h-48 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            {/* Glowing orb */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" />
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Central content */}
            <div className="relative z-10 w-40 h-40 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                className="text-6xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👾
              </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                initial={{
                  scale: 0,
                  opacity: 0,
                  x: Math.random() * 160 - 80,
                  y: Math.random() * 160 - 80
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe;