import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-6 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-900">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-fade-in-up">
         Hey,This is Kedar
        </h1>
        <p className="text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-200">
          Backend Developer | Microservices Enthusiast
        </p>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white animate-fade-in-up animation-delay-400">
          Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

export default Hero

