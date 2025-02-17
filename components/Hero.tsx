import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-900">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-fade-in-up">
          Hey, This is Kedar
        </h1>
        <p className="text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-200">
          Backend Developer | Microservices Enthusiast
        </p>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white animate-fade-in-up animation-delay-400">
          Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Multiple Downward Arrows (Positioned 2cm Below the Button) */}
      <div className="mt-[75px] flex gap-6">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2, // Staggered animation for smooth effect
            }}
          >
            <ChevronDown className="h-10 w-10 text-blue-600/60 dark:text-blue-400/60 drop-shadow-lg" />
            <ChevronDown className="h-8 w-8 text-purple-600/60 dark:text-purple-400/60 drop-shadow-lg absolute left-[4px]" />

          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero


